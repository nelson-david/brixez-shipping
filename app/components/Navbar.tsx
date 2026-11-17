"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, ArrowRight, Menu, X, Plane, Warehouse, Search, ShieldCheck, Clock } from "lucide-react";
import BrixezLogo from "./BrixezLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      {/* Top Operations Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-mono py-1.5 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              LONDON DISPATCH ACTIVE
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">Terminal: 45a Great North Way, NW4 1PT</span>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <span className="text-slate-400 hidden lg:inline">Heathrow (LHR) Apron Cut-off: 4h Prior</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+447853573182"
              className="text-white hover:text-blue-400 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>+44 785 357 3182</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-blue-400 font-medium">HMRC Type U Bonded</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link href="/" className="group transition-opacity hover:opacity-95">
          <BrixezLogo size={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600">
          <Link
            href="/air-freight"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <Plane className="w-4 h-4 text-blue-600" />
            <span>Flight Shipping</span>
          </Link>

          <Link
            href="/warehousing"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <Warehouse className="w-4 h-4 text-slate-500" />
            <span>Bonded Warehousing</span>
          </Link>

          <Link
            href="/services"
            className="hover:text-blue-600 transition-colors"
          >
            Capabilities
          </Link>

          <Link
            href="/track"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Consignment Radar</span>
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors"
          >
            Company
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors"
          >
            London HQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/quote"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all inline-flex items-center gap-1.5"
          >
            <span>Request Freight Tariff</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-950"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-800">
            <Link
              href="/air-freight"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 flex items-center gap-2 text-blue-600"
            >
              <Plane className="w-4 h-4" />
              <span>Flight Shipping &amp; Air Cargo</span>
            </Link>
            <Link
              href="/warehousing"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 flex items-center gap-2 text-slate-800 hover:text-blue-600"
            >
              <Warehouse className="w-4 h-4 text-slate-500" />
              <span>Bonded Warehousing (NW4 1PT)</span>
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-800 hover:text-blue-600"
            >
              All Capabilities
            </Link>
            <Link
              href="/track"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 flex items-center gap-2 text-slate-800 hover:text-blue-600"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span>Consignment Radar Tracking</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-800 hover:text-blue-600"
            >
              About Brixez
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-800 hover:text-blue-600"
            >
              London HQ &amp; Operations
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href="tel:+447853573182"
              className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Dispatch: +44 785 357 3182</span>
            </a>
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <span>Instant Tariff Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
