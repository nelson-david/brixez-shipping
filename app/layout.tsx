import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071120",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brixez.com"),
  title: {
    default: "Brixez — Flight Shipping & London Bonded Warehousing",
    template: "%s · Brixez",
  },
  description:
    "Brixez provides high-velocity flight shipping and 125,000 sq ft HMRC Type U bonded warehousing at 45a Great North Way, London NW4 1PT. Telephone: +44 785 357 3182.",
  applicationName: "Brixez",
  keywords: [
    "Brixez",
    "Brixez shipping",
    "flight shipping London",
    "air freight Heathrow",
    "bonded warehousing London NW4 1PT",
    "45a Great North Way",
    "HMRC customs warehouse",
    "customs clearance UK",
    "freight forwarding",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://brixez.com",
    siteName: "Brixez",
    title: "Brixez — Flight Shipping & London Bonded Warehousing",
    description:
      "High-velocity flight shipping and 125,000 sq ft HMRC Type U bonded warehousing at 45a Great North Way, London NW4 1PT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixez — Flight Shipping & London Bonded Warehousing",
    description:
      "Flight shipping & 125,000 sq ft bonded warehousing at 45a Great North Way, London NW4 1PT. Call +44 785 357 3182.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
