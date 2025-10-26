import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Ranjan — Software Engineer",
  description:
    "Software Engineer (MS CS @ ASU). Next.js, TypeScript, GSAP. Building fast, elegant web apps and agentic backends.",
  metadataBase: new URL("https://arjunranjan.com"),
  openGraph: {
    title: "Arjun Ranjan — Software Engineer",
    description:
      "Next.js + TypeScript + GSAP portfolio. Performance-focused and UX-obsessed.",
    url: "/",
    siteName: "Arjun Ranjan",
    images: ["/og.png"], // optional: put an OG image in /public/og.png
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Ranjan — Software Engineer",
    description:
      "Next.js + TypeScript + GSAP portfolio. Performance-focused and UX-obsessed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
