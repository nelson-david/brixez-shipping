"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import BrixezLogo from "./BrixezLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bx-nav">
      {/* Brand Monogram & Lockup */}
      <Link href="/" className="group transition-opacity hover:opacity-90">
        <BrixezLogo size={36} />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex">
        <Link href="/air-freight">Flight Shipping</Link>
        <Link href="/warehousing">Bonded Storage</Link>
        <Link href="/services">Capabilities</Link>
        <Link href="/track">Cargo Radar</Link>
        <Link href="/about">Company</Link>
        <Link href="/contact">London HQ</Link>
      </nav>

      {/* Desktop Right CTA & Hotline */}
      <div className="hidden lg:flex items-center gap-6">
        <a
          href="tel:+447853573182"
          className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 hover:text-blue-600 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span>+44 785 357 3182</span>
        </a>

        <Link
          href="/quote"
          className="bx-btn bx-btn-dark !py-2.5 !px-4 text-xs"
        >
          <span>Request Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 text-slate-700 hover:text-slate-950"
        aria-label="Toggle Navigation Menu"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-[84px] left-0 w-full bg-white border-b border-slate-200 px-6 py-6 shadow-xl md:hidden space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-800">
            <Link
              href="/air-freight"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-blue-600"
            >
              Flight Shipping &amp; Air Cargo
            </Link>
            <Link
              href="/warehousing"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-slate-800"
            >
              HMRC Bonded Warehousing (NW4 1PT)
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-slate-800"
            >
              Logistics Capabilities
            </Link>
            <Link
              href="/track"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-slate-800"
            >
              Consignment Radar Tracking
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-slate-800"
            >
              About Brixez
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-1 text-slate-800"
            >
              London HQ &amp; Operations
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href="tel:+447853573182"
              className="flex items-center gap-2 text-xs font-mono font-medium text-slate-700 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+44 785 357 3182</span>
            </a>
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-2.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-semibold"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
