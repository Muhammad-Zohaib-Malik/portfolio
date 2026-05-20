import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

const siteUrl = "https://zohaibaay.tech" // ← Replace with your actual domain

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  // ─── Core Meta ───────────────────────────────────────────
  title: {
    default: "Muhammad Zohaib Malik | Full Stack Developer",
    template: "%s — Muhammad Zohaib Malik",
  },
  description:
    "Muhammad Zohaib Malik — Full Stack Developer specializing in React, Node.js, MongoDB, AWS, and Docker. Building robust, scalable systems from frontend to backend.",
  keywords: [
    "Muhammad Zohaib Malik",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "MongoDB",
    "Express.js",
    "TypeScript",
    "JavaScript Developer",
    "AWS",
    "Docker",
    "Pakistan Developer",
    "Portfolio",
    "Software Engineer",
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
    siteName: "Muhammad Zohaib Malik — Portfolio",
    title: "Muhammad Zohaib Malik | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, MongoDB, AWS & Docker. Building production-grade, scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zohaib Malik — Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter Card ────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zohaib Malik | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, MongoDB, AWS & Docker.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Structured Data for Google Rich Results
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Zohaib Malik",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, MongoDB, AWS, and Docker.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    sameAs: [
      "https://github.com/Muhammad-Zohaib-Malik",
      "https://www.linkedin.com/in/zohaib-malik-bb7a3131b/",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Docker",
      "AWS",
      "Redis",
      "PostgreSQL",
      "REST API",
      "Full Stack Development",
      "Web Development",
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Zohaib Malik — Portfolio",
    url: siteUrl,
    description:
      "Personal portfolio of Muhammad Zohaib Malik, a Full Stack Developer from Pakistan.",
    author: {
      "@type": "Person",
      name: "Muhammad Zohaib Malik",
    },
  }

  return (
    <html lang="en" className="dark">
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
      <body className={`${inter.variable} ${jetbrains.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}