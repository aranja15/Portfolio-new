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
  title: "Arjun Ranjan — AI Engineer",
  description:
    "AI Engineer building production agent systems, semantic retrieval, and fast full-stack products. MS Computer Science at Arizona State University.",
  metadataBase: new URL("https://arjunranjan.com"),
  openGraph: {
    title: "Arjun Ranjan — AI Engineer",
    description:
      "Production agent systems, semantic retrieval, and full-stack AI products.",
    url: "/",
    siteName: "Arjun Ranjan",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Ranjan — AI Engineer",
    description:
      "Production agent systems, semantic retrieval, and full-stack AI products.",
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
