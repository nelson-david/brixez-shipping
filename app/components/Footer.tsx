import Link from "next/link";
import { Plane, Warehouse, ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import BrixezLogo from "./BrixezLogo";

export default function Footer() {
  return (
    <footer className="bg-[#060c18] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <BrixezLogo size={38} variant="light" />
            </Link>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Global commercial flight cargo and high-density HMRC-bonded warehousing. Coordinated from our London logistics terminal for mission-critical supply chains.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>45a Great North Way, London, England, NW4 1PT</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+447853573182" className="text-slate-200 hover:text-white transition-colors">
                  +44 785 357 3182
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:dispatch@brixez.com" className="text-slate-200 hover:text-white transition-colors">
                  dispatch@brixez.com
                </a>
              </div>
            </div>
          </div>

          {/* Air Logistics Column */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block font-semibold">
              Flight Cargo
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/air-freight" className="hover:text-white transition-colors">Next-Flight-Out (NFO)</Link></li>
              <li><Link href="/air-freight" className="hover:text-white transition-colors">Scheduled Consolidations</Link></li>
              <li><Link href="/air-freight" className="hover:text-white transition-colors">Boeing 777F Charters</Link></li>
              <li><Link href="/air-freight" className="hover:text-white transition-colors">AOG Emergency Dispatch</Link></li>
              <li><Link href="/air-freight" className="hover:text-white transition-colors">Pharma Cold Chain</Link></li>
            </ul>
          </div>

          {/* Warehousing Column */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block font-semibold">
              London Terminal
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/warehousing" className="hover:text-white transition-colors">45a Great North Way (NW4)</Link></li>
              <li><Link href="/warehousing" className="hover:text-white transition-colors">HMRC Bonded Storage</Link></li>
              <li><Link href="/warehousing" className="hover:text-white transition-colors">VNA Narrow-Aisle Racking</Link></li>
              <li><Link href="/warehousing" className="hover:text-white transition-colors">16 Hydraulic Dock Bays</Link></li>
              <li><Link href="/warehousing" className="hover:text-white transition-colors">Cross-Docking Facilities</Link></li>
            </ul>
          </div>

          {/* Operational Tools */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block font-semibold">
              Operations
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/track" className="hover:text-white transition-colors flex items-center gap-1 text-slate-300">
                  <span>Cargo Radar Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </Link>
              </li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Commercial Rate Estimator</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Ocean & Multimodal</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Customs Brokerage Desk</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Duty Controller Dispatch</Link></li>
            </ul>
          </div>
        </div>

        {/* Accreditations Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              AEO-F Customs Authorised
            </span>
            <span>•</span>
            <span>IATA Cargo Agent</span>
            <span>•</span>
            <span>HMRC Type U Bonded</span>
            <span>•</span>
            <span>BIFA Member</span>
          </div>

          <div>
            © 2026 Brixez Logistics Ltd. Registered in England & Wales.
          </div>
        </div>
      </div>
    </footer>
  );
}
