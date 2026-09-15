# Soham Gurav — Portfolio

A responsive portfolio for Soham Gurav, an Electronics & Computer Engineer focused on Software Systems, APIs, and full-stack product delivery.

## Live website

[www.sohamgurav.me](https://www.sohamgurav.me)

## Project overview

This portfolio presents engineering projects, technical skills, education, achievements, and contact details in one focused experience. It is designed to feel more like a product interface than a static resume: information is grouped into scannable sections, project cards reveal additional context, and the contact flow is available without leaving the site.

### Features

- Responsive navigation and layouts for desktop and mobile screens.
- Hero section with availability status, portrait, primary contact CTA, and resume download.
- Expandable project cards with role, results, challenges, stack, impact, and progress details.
- Skills grouped by languages, frameworks, databases, and tools.
- Timeline-style achievements section.
- Contact form with server-side validation, Resend delivery, and a limit of three requests per IP every ten minutes.
- Resume and social profile links.
- Accessible form labels, descriptive portrait text, semantic section headings, and keyboard-friendly native controls.

### Visual direction

The interface uses a light, editorial visual system instead of a standard dark developer portfolio:

- Palatinate blue (`#173DED`) is used for actions, status, emphasis, and timeline markers.
- Soft neutral backgrounds keep long sections readable.
- Glass surfaces, subtle borders, rounded cards, and blur create depth without relying on stock templates.
- Monospace labels provide a systems/engineering feel while the primary sans-serif type remains readable.
- Ambient gradients, grain, grid textures, canvas effects, and motion are layered behind the content to create a distinctive visual identity.

The visual effects are decorative; the content and project evidence should remain useful if animations are reduced or removed.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, custom CSS variables |
| Motion | Framer Motion |
| Icons | Lucide React |
| Canvas/WebGL effects | Three.js, OGL |
| Email delivery | Resend HTTP API |
| Hosting | Vercel |

## Project structure

```text
src/
  app/
    api/contact/route.ts   # Validates, rate-limits, and sends contact messages
    layout.tsx             # Fonts, metadata, and global background layers
    page.tsx               # Portfolio page composition
    globals.css            # Theme tokens and shared visual styles
  components/              # Navigation and portfolio sections/effects
public/
  resume.pdf               # Downloadable resume
  soham-portrait.jpg       # Hero portrait
```

## Getting started

### Requirements

- Node.js 20.9 or newer
- npm
- A Resend account and verified sending domain for contact delivery

### Install and run locally

```bash
git clone https://github.com/SohamGurav10/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` in the project root. Never commit it.

```env
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL="Portfolio <contact@mail.your-domain.com>"
CONTACT_TO_EMAIL=you@example.com
```

### How to get them

1. Create a [Resend account](https://resend.com/signup).
2. Add and verify a sending domain in **Domains**. A subdomain such as `mail.your-domain.com` is recommended.
3. Create an API key with **Sending access only**. Restrict it to the verified sending domain when available.
4. Set `CONTACT_FROM_EMAIL` to an address on that verified domain.
5. Set `CONTACT_TO_EMAIL` to the inbox where portfolio inquiries should arrive.

The Resend key is read only by `src/app/api/contact/route.ts`; it is never exposed to the browser. If the variables are missing, the form returns an unavailable-delivery message instead of claiming success.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Customization guide

- Update portfolio sections in `src/components/`.
- Change the page composition in `src/app/page.tsx`.
- Change title, description, fonts, and metadata in `src/app/layout.tsx`.
- Change colors, glass surfaces, textures, and shared effects in `src/app/globals.css`.
- Replace `public/soham-portrait.jpg` with the portfolio owner’s portrait.
- Replace `public/resume.pdf` with the current resume.
- Update social links and contact copy in `src/components/ConnectSection.tsx`.
- Replace the example project and achievement content with verifiable work and links.

If you use this design as a starting point, replace the personal name, portrait, resume, project claims, contact details, and social links before publishing. Do not present Soham’s projects or achievements as your own.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the detected Next.js framework and `npm run build` command.
4. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` under **Project Settings → Environment Variables** for Production and Preview as needed.
5. Deploy and submit one real test message from the live site.

The sending address must use the verified Resend domain, otherwise Resend will reject the message.

## Security and privacy

- Contact input is validated on the server; client-side `maxLength` values are only a usability aid.
- Contact submissions are limited to three requests per IP per ten-minute window.
- The API key and recipient address are server-side environment variables.
- Visitor email addresses and message bodies are not written to application logs.
- Contact contents are sent to Resend and the configured recipient inbox. Add a privacy notice and retention policy before collecting leads at scale.
- The current rate limiter is in-memory per deployment instance. A shared store is needed if the site grows to multiple instances or requires coordinated abuse protection.

## Performance and accessibility notes

- The layout uses responsive CSS grids, flexible typography, and native form controls rather than a separate mobile application.
- Canvas/WebGL backgrounds and card motion add visual personality but can cost battery and frame rate on lower-powered devices.
- Test the site with reduced motion, keyboard-only navigation, a screen reader, and a mobile Lighthouse run before adding more effects.
- Keep decorative layers non-interactive and preserve readable contrast when changing the palette.

## License and content

No open-source license is currently declared. Treat the code, written content, imagery, resume, and personal project information as belonging to the repository owner unless explicit permission is provided.
