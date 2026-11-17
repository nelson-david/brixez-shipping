import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1329",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brixez.com"),
  title: {
    default: "Brixez — Flight Shipping & London Bonded Warehousing",
    template: "%s | Brixez Logistics",
  },
  description:
    "Brixez provides high-velocity commercial flight shipping from London Heathrow (LHR) and 125,000 sq ft HMRC Type U bonded warehousing at 45a Great North Way, London NW4 1PT. Telephone: +44 785 357 3182.",
  applicationName: "Brixez Logistics",
  authors: [{ name: "Brixez Logistics Ltd" }],
  creator: "Brixez Logistics Ltd",
  publisher: "Brixez Logistics Ltd",
  keywords: [
    "Brixez",
    "Brixez shipping",
    "flight shipping London",
    "air freight London Heathrow",
    "bonded warehousing London NW4 1PT",
    "45a Great North Way",
    "HMRC Type U customs warehouse",
    "Heathrow air cargo dispatch",
    "Boeing 777F freighter charters",
    "AOG emergency courier",
    "customs clearance UK",
    "London logistics terminal",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://brixez.com",
    siteName: "Brixez",
    title: "Brixez — Flight Shipping & London Bonded Warehousing",
    description:
      "Coordinating scheduled commercial air cargo rotations from London Heathrow alongside 125,000 sq ft of HMRC Type U bonded storage at 45a Great North Way, London NW4 1PT. Telephone: +44 785 357 3182.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Brixez Flight Shipping & London Bonded Warehousing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixez — Flight Shipping & London Bonded Warehousing",
    description:
      "Commercial air freight out of London Heathrow & 125,000 sq ft HMRC Type U bonded storage at 45a Great North Way, London NW4 1PT.",
    images: ["/icon-512.png"],
  },
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
  alternates: {
    canonical: "https://brixez.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LogisticsService",
  "name": "Brixez Logistics Ltd",
  "alternateName": "Brixez",
  "url": "https://brixez.com",
  "logo": "https://brixez.com/icon-512.png",
  "telephone": "+447853573182",
  "email": "dispatch@brixez.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45a Great North Way",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "postalCode": "NW4 1PT",
    "addressCountry": "GB",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5901,
    "longitude": -0.2173,
  },
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Singapore" },
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    "opens": "00:00",
    "closes": "23:59",
  },
  "serviceType": [
    "Flight Shipping",
    "Commercial Air Cargo",
    "HMRC Type U Bonded Warehousing",
    "Customs Brokerage & CDS Compliance",
    "AOG Emergency Aerospace Logistics",
    "Pharmaceutical GDP Cold Chain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
