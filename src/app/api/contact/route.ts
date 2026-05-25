import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All contact fields are required." },
        { status: 400 }
      );
    }

    // 2. Log transmission to the server console securely
    console.log("================ CONTACT TRANSMISSION RECIEVED ================");
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message Body:\n${message}`);
    console.log("==============================================================");

    /* 
      ---------------------------------------------------------
      PRO-TIP: HOW TO WIRE REAL EMAIL DELIVERABILITY LATER
      ---------------------------------------------------------
      You can easily route these incoming messages directly to your inbox 
      using a provider like Resend or Nodemailer!

      Option A: Using Resend (Recommended & Extremely Premium)
      -----------------------------------------------------
      1. Install Resend: npm install resend
      2. Import Resend: import { Resend } from "resend";
      3. Wire the code:
         const resend = new Resend(process.env.RESEND_API_KEY);
         await resend.emails.send({
           from: 'Portfolio Contact <onboarding@resend.dev>',
           to: 'sohamgurav808@gmail.com',
           subject: `[Portfolio Connect] ${subject}`,
           html: `<p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong> ${message}</p>`
         });

      Option B: Using Nodemailer (Standard SMTP Routing)
      -----------------------------------------------------
      1. Install Nodemailer: npm install nodemailer
      2. Import Nodemailer: import nodemailer from "nodemailer";
      3. Wire the code:
         const transporter = nodemailer.createTransport({
           service: 'gmail',
           auth: {
             user: process.env.EMAIL_USER,
             pass: process.env.EMAIL_PASS // Use Gmail App Password
           }
         });
         await transporter.sendMail({
           from: email,
           to: 'sohamgurav808@gmail.com',
           subject: `[Portfolio Connect] ${subject}`,
           text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
         });
    */

    return NextResponse.json(
      { success: true, message: "Transmission received and logged successfully." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("API contact submission error:", err);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred while processing the transmission." },
      { status: 500 }
    );
  }
}
