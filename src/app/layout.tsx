import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto } from "next/font/google";
import { Analytics } from "@/components/analytics";
import {
  personName,
  preferredLocations,
  seoKeywords,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naveed Shaik | Full-stack Engineer, Product Engineer, Delivery Engineer",
    template: "%s | Naveed Shaik",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: seoKeywords,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Naveed Shaik | Full-stack Engineer, Product Engineer, Delivery Engineer",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/profile.jpeg`,
        width: 1200,
        height: 1200,
        alt: "Portrait of Naveed Shaik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveed Shaik | Full-stack Engineer, Product Engineer, Delivery Engineer",
    description: siteDescription,
    images: [`${siteUrl}/profile.jpeg`],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": preferredLocations.join(", "),
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      data-theme="midnight-grid"
      className={`${inter.variable} ${roboto.variable} ${openSans.variable}`}
    >
      <body className="app-font-shell">
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
