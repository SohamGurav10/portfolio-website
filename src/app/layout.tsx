import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Soham Gurav Portfolio",
  description: "Explore the premium portfolio of Soham, an Electronics/Computer Engineer specializing in high-performance IoT, Flutter mobile applications, and advanced API designs.",
  keywords: ["Soham Portfolio", "Systems Engineer", "IoT Developer", "Flutter Mobile App developer", "Next.js Portfolio", "Light Glass UI", "Apple Minimalist Portfolio"],
  authors: [{ name: "Soham" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen text-primary-text relative">
        {/* Cinematic Light Environment */}
        <div className="cinematic-bg-light" />



        <div className="glow-orb-light-1">
          <div className="glow-orb-light-1-inner" />
        </div>
        <div className="glow-orb-light-2">
          <div className="glow-orb-light-2-inner" />
        </div>
        <div className="bento-texture-light" />
        <div className="noise-overlay-light" />
        
        {/* Main Content Area */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
