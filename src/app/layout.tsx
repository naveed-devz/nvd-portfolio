import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://naveedshaik.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naveed Shaik | Full-stack Developer",
    template: "%s | Naveed Shaik",
  },
  description:
    "Portfolio of Naveed Shaik, a full-stack developer building scalable web applications across tracking, education, AI products, internal tools, and integration-heavy business systems.",
  keywords: [
    "S Naveed",
    "Software Engineer",
    "Full-stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "AI Agents",
    "RAG",
    "Google ADK",
    "RouteEye",
    "Kalrav AI",
  ],
  authors: [{ name: "Naveed Shaik" }],
  creator: "Naveed Shaik",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naveed Shaik | Full-stack Developer",
    description:
      "Building scalable full-stack web applications for companies and clients across product, business, and AI-driven systems.",
    url: siteUrl,
    siteName: "Naveed Shaik Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveed Shaik | Full-stack Developer",
    description:
      "Portfolio featuring full-stack work across RouteEye, Kalrav AI, ECAI, and real-time product systems.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
