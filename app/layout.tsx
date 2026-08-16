import type React from "react";
import type { Metadata, Viewport } from "next";
import {
  Inter,
  JetBrains_Mono,
  Playfair_Display,
  Oswald,
  Dancing_Script,
} from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const siteUrl = "https://zohaibaay.tech";

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // ─── Core Meta ───────────────────────────────────────────
  title: {
    default: "Muhammad Zohaib Malik | Backend Developer",
    template: "%s — Muhammad Zohaib Malik",
  },
  description:
    "Muhammad Zohaib Malik — Backend Developer specializing in Node.js, Express, MongoDB, PostgreSQL, AWS, and Docker. Building robust, scalable, and secure server-side architectures.",
  keywords: [
    "Muhammad Zohaib Malik",
    "Backend Developer",
    "Node.js Developer",
    "API Developer",
    "Software Engineer",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "TypeScript",
    "JavaScript Developer",
    "AWS",
    "Docker",
    "Redis",
    "Microservices",
    "Pakistan Backend Developer",
    "Portfolio",
    "Zohaib Malik",
  ],
  authors: [{ name: "Muhammad Zohaib Malik", url: siteUrl }],
  creator: "Muhammad Zohaib Malik",
  publisher: "Muhammad Zohaib Malik",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // ─── Robots ──────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Open Graph (Facebook, LinkedIn, Discord) ────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhammad Zohaib Malik — Backend Portfolio",
    title: "Muhammad Zohaib Malik | Backend Developer",
    description:
      "Backend Developer specializing in Node.js, MongoDB, PostgreSQL, AWS & Docker. Building production-grade, scalable server architectures.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zohaib Malik — Backend Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter Card ────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zohaib Malik | Backend Developer",
    description:
      "Backend Developer specializing in Node.js, MongoDB, PostgreSQL, AWS & Docker.",
    images: ["/og-image.png"],
    creator: "@zohaib_malik", // ← Replace with your Twitter handle if you have one
  },

  // ─── Icons ───────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // ─── Manifest ────────────────────────────────────────────
  manifest: "/manifest.json",

  // ─── Verification (fill in when you register) ───────────
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // ─── Category ────────────────────────────────────────────
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Google Rich Results
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Zohaib Malik",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Backend Developer",
    description:
      "Backend Developer specializing in Node.js, Express, MongoDB, PostgreSQL, AWS, and Docker.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    sameAs: [
      "https://github.com/Muhammad-Zohaib-Malik",
      "https://www.linkedin.com/in/zohaib-malik-bb7a3131b/",
    ],
    knowsAbout: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
      "JavaScript",
      "Docker",
      "AWS",
      "Redis",
      "Microservices",
      "REST API",
      "GraphQL",
      "Backend Development",
      "System Architecture",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Zohaib Malik — Portfolio",
    url: siteUrl,
    description:
      "Personal portfolio of Muhammad Zohaib Malik, a Backend Developer and Software Engineer from Pakistan.",
    author: {
      "@type": "Person",
      name: "Muhammad Zohaib Malik",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`bg-[#F2E4CA] text-black ${inter.variable} ${jetbrains.variable} ${playfair.variable} ${oswald.variable} ${dancingScript.variable} ${inter.className}`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
