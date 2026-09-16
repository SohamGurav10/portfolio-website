import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;
const requests = new Map<string, number[]>();

function isRateLimited(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  requests.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

function contactFields(body: unknown) {
  if (!body || typeof body !== "object") return null;

  const { name, email, subject, message } = body as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string" || typeof subject !== "string" || typeof message !== "string") return null;

  const fields = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email);

  return fields.name && fields.name.length <= 100
    && validEmail && fields.email.length <= 254
    && fields.subject && fields.subject.length <= 160
    && fields.message && fields.message.length <= 5_000
    ? fields
    : null;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let fields;
  try {
    fields = contactFields(await request.json());
  } catch {
    fields = null;
  }

  if (!fields) {
    return NextResponse.json({ error: "Please enter valid contact details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: "Contact email is not configured yet. Please use the email link below." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `[Portfolio] ${fields.subject}`,
        text: `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`,
      }),
    });
    const result: unknown = await response.json().catch(() => null);

    if (!response.ok || !result || typeof result !== "object" || !("id" in result)) {
      return NextResponse.json({ error: "Email delivery was not accepted. Please use the email link below." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Email delivery is unavailable. Please use the email link below." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

// ponytail: per-instance memory limit; use shared Redis limits if deployment spans instances.
