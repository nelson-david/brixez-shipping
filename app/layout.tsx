import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Brixez | Flight Shipping & London Bonded Warehousing",
  description:
    "Brixez provides high-velocity flight shipping and 125,000 sq ft HMRC Type U bonded warehousing at 45a Great North Way, London NW4 1PT. Telephone: +44 785 357 3182.",
  keywords: [
    "Brixez",
    "Brixez shipping",
    "air freight London Heathrow",
    "flight shipping",
    "bonded warehousing London NW4 1PT",
    "45a Great North Way",
    "HMRC customs warehouse",
    "Heathrow cargo dispatch",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
