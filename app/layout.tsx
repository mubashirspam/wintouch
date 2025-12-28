import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  // ═══════════════════════════════════════════════════════════════════════════
  // BASIC METADATA
  // ═══════════════════════════════════════════════════════════════════════════
  title: {
    default: "Wintouch Academy | NEET & Integrated +1/+2 for Girls",
    template: "%s | Wintouch Academy",
  },
  description:
    "A premier girls-only residential academy combining academic excellence with Islamic values, horse training, and holistic development. Offering NEET coaching and integrated +1/+2 programs.",

  // ═══════════════════════════════════════════════════════════════════════════
  // KEYWORDS & AUTHORS
  // ═══════════════════════════════════════════════════════════════════════════
  keywords: [
    "girls academy",
    "NEET coaching",
    "integrated school",
    "+1 +2 for girls",
    "residential school",
    "Islamic education",
    "horse training",
    "holistic development",
    "girls education Kerala",
    "NEET preparation",
    "women empowerment education",
    "best girls school India",
  ],
  authors: [{ name: "Wintouch Academy" }],
  creator: "Wintouch Academy",
  publisher: "Wintouch Academy",

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONS & MANIFEST
  // ═══════════════════════════════════════════════════════════════════════════
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",

  // ═══════════════════════════════════════════════════════════════════════════
  // CANONICAL & BASE URL
  // ═══════════════════════════════════════════════════════════════════════════
  metadataBase: new URL("https://wintouchacademy.com"),
  alternates: {
    canonical: "/",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OPEN GRAPH (Facebook, LinkedIn, etc.)
  // ═══════════════════════════════════════════════════════════════════════════
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wintouchacademy.com",
    siteName: "Wintouch Academy",
    title: "Wintouch Academy | NEET & Integrated +1/+2 for Girls",
    description:
      "A premier girls-only residential academy combining academic excellence with Islamic values, horse training, and holistic development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wintouch Academy - Empowering Girls Through Education",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TWITTER CARD
  // ═══════════════════════════════════════════════════════════════════════════
  twitter: {
    card: "summary_large_image",
    title: "Wintouch Academy | NEET & Integrated +1/+2 for Girls",
    description:
      "A premier girls-only residential academy combining academic excellence with Islamic values, horse training, and holistic development.",
    images: ["/og-image.jpg"],
    creator: "@wintouchacademy",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ROBOTS & INDEXING
  // ═══════════════════════════════════════════════════════════════════════════
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

  // ═══════════════════════════════════════════════════════════════════════════
  // VERIFICATION (Add your IDs when available)
  // ═══════════════════════════════════════════════════════════════════════════
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADDITIONAL METADATA
  // ═══════════════════════════════════════════════════════════════════════════
  category: "Education",
  classification: "Educational Institution",
};

// ═══════════════════════════════════════════════════════════════════════════
// JSON-LD STRUCTURED DATA FOR RICH SNIPPETS
// ═══════════════════════════════════════════════════════════════════════════
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://wintouchacademy.com/#organization",
      name: "Wintouch Academy",
      alternateName: "Wintouch Girls Academy",
      url: "https://wintouchacademy.com",
      logo: "https://wintouchacademy.com/logo.svg",
      description:
        "A premier girls-only residential academy combining academic excellence with Islamic values, horse training, and holistic development.",
      foundingDate: "2024",
      image: "https://wintouchacademy.com/og-image.jpg",
      sameAs: [
        "https://www.facebook.com/wintouchacademy",
        "https://www.instagram.com/wintouchacademy",
        "https://twitter.com/wintouchacademy",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressRegion: "Kerala",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-XXXXXXXXXX",
        contactType: "admissions",
        availableLanguage: ["English", "Malayalam", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://wintouchacademy.com/#website",
      url: "https://wintouchacademy.com",
      name: "Wintouch Academy",
      publisher: {
        "@id": "https://wintouchacademy.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://wintouchacademy.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Course",
      name: "NEET Coaching Program",
      description:
        "Comprehensive NEET preparation program for girls with experienced faculty and proven results.",
      provider: {
        "@id": "https://wintouchacademy.com/#organization",
      },
      courseMode: "In-Person",
      educationalCredentialAwarded: "NEET Qualification",
    },
    {
      "@type": "Course",
      name: "Integrated +1/+2 Program",
      description:
        "Integrated higher secondary education combining state board curriculum with NEET preparation.",
      provider: {
        "@id": "https://wintouchacademy.com/#organization",
      },
      courseMode: "In-Person",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jakarta.variable} bg-[#FFFBF0] text-[#2D1B2E] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
