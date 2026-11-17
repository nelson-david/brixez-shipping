"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Warehouse, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Box, 
  Truck, 
  Layers, 
  Thermometer, 
  Lock,
  FileCheck
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WarehousingPage() {
  const [palletCount, setPalletCount] = useState(10);
  const [storageWeeks, setStorageWeeks] = useState(4);
  const [storageType, setStorageType] = useState<"ambient" | "bonded" | "cold">("bonded");

  let weeklyRate = 4.25;
  if (storageType === "bonded") weeklyRate = 4.85;
  if (storageType === "cold") weeklyRate = 7.50;

  const totalEstimate = Math.round(palletCount * storageWeeks * weeklyRate + 60);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* PAGE HEADER */}
      <section className="pt-14 pb-16 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Warehouse className="w-3.5 h-3.5" />
            <span>LONDON FLAGSHIP TERMINAL • NW4 1PT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            HMRC Bonded Warehousing.
            <br />
            <span className="text-blue-600">45a Great North Way, London.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            125,000 sq ft of high-density logistics storage licensed by HMRC as an Authorised Type U Customs Warehouse. Defer UK import duty and VAT indefinitely while maintaining rapid dispatch access to London and Heathrow.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="px-3 py-1.5 bg-slate-100 rounded-md text-slate-700">
              <span className="text-slate-400">POSTCODE:</span> <strong>NW4 1PT</strong>
            </div>
            <div className="px-3 py-1.5 bg-slate-100 rounded-md text-slate-700">
              <span className="text-slate-400">RACKING:</span> <strong>14,000+ VNA Slots</strong>
            </div>
            <div className="px-3 py-1.5 bg-slate-100 rounded-md text-slate-700">
              <span className="text-slate-400">DOCK BAYS:</span> <strong>16 Hydraulic Levelers</strong>
            </div>
            <div className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-md font-bold">
              <span>HMRC TYPE U AUTHORISED</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SPECIFICATIONS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
            ENGINEERED FACILITY
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
            Facility Infrastructure &amp; Technical Capabilities
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Built to accommodate fast container discharge, pharmaceutical cold-chain, and high-value secure storage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Spec 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">HMRC Type U Customs Bond</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Authorised customs warehouse where imported freight can be stored without immediate payment of UK Customs Duty or Import VAT until released into the domestic market.
            </p>
            <div className="pt-2 text-[11px] font-mono text-blue-600 font-medium">
              Indefinite duty suspension supported
            </div>
          </div>

          {/* Spec 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">14,000 VNA Pallet Positions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              12.5m clear ceiling heights fitted with wire-guided Very Narrow Aisle (VNA) reach trucks, laser barcoded pallet slots, and live WMS inventory tracking.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Euro &amp; Standard UK pallet formats
            </div>
          </div>

          {/* Spec 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">16 Hydraulic Dock Bays</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated loading docks capable of discharging 20ft and 40ft high-cube sea containers with rapid devanning, sorting, and immediate cross-dock transshipment.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Turnaround: 45 minutes per 40ft container
            </div>
          </div>

          {/* Spec 4 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">Biometric Security &amp; CCTV</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete perimeter protection with 24/7 Redcare dual-path intruder monitoring, dual-credential biometric turnstiles, and 4K optical camera surveillance across all bays.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              TAPA Class A compliant security perimeter
            </div>
          </div>

          {/* Spec 5 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Thermometer className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">GDP Cold-Chain Chamber</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Controlled environment vault held precisely at +2°C to +8°C with dual redundant HVAC compressors, backup power generators, and automatic temperature excursion alerts.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              MHRA GDP compliance certified
            </div>
          </div>

          {/* Spec 6 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">Direct HMRC CDS Integration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-house customs compliance officers file electronic declarations directly to the UK Customs Declaration Service (CDS), providing instant green routing and bonded discharges.
            </p>
            <div className="pt-2 text-[11px] font-mono text-blue-600 font-medium">
              Zero customs delays on bonded call-offs
            </div>
          </div>
        </div>
      </section>

      {/* STORAGE TARIFF CALCULATOR */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
              INSTANT PRICING ESTIMATE
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
              London Bonded Storage Estimator
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Calculate projected storage costs at 45a Great North Way (NW4 1PT).
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setStorageType("bonded")}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  storageType === "bonded"
                    ? "bg-white border-blue-600 shadow-xs"
                    : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="font-bold text-xs text-slate-900 font-display">HMRC Bonded</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Duty &amp; VAT suspended</div>
                <div className="text-xs font-mono font-bold text-blue-600 mt-2">£4.85 / pallet / wk</div>
              </button>

              <button
                type="button"
                onClick={() => setStorageType("ambient")}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  storageType === "ambient"
                    ? "bg-white border-blue-600 shadow-xs"
                    : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="font-bold text-xs text-slate-900 font-display">Standard Ambient</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Dry goods &amp; general cargo</div>
                <div className="text-xs font-mono font-bold text-slate-900 mt-2">£4.25 / pallet / wk</div>
              </button>

              <button
                type="button"
                onClick={() => setStorageType("cold")}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  storageType === "cold"
                    ? "bg-white border-blue-600 shadow-xs"
                    : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="font-bold text-xs text-slate-900 font-display">Cold Chain (+2° to +8°C)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Pharma &amp; temperature-safe</div>
                <div className="text-xs font-mono font-bold text-slate-900 mt-2">£7.50 / pallet / wk</div>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="flex justify-between text-xs font-mono text-slate-600 mb-1">
                  <span>NUMBER OF PALLETS:</span>
                  <strong className="text-slate-900 font-bold">{palletCount} Pallets</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={palletCount}
                  onChange={(e) => setPalletCount(parseInt(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div>
                <label className="flex justify-between text-xs font-mono text-slate-600 mb-1">
                  <span>STORAGE DURATION:</span>
                  <strong className="text-slate-900 font-bold">{storageWeeks} Weeks</strong>
                </label>
                <input
                  type="range"
                  min="1"
                  max="52"
                  value={storageWeeks}
                  onChange={(e) => setStorageWeeks(parseInt(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">Estimated Total Storage:</span>
                <div className="text-3xl font-extrabold text-slate-950 font-display">
                  £{totalEstimate.toLocaleString()}
                  <span className="text-xs text-slate-500 font-normal font-mono ml-2">excl. VAT</span>
                </div>
              </div>

              <Link
                href={`/quote?service=bonded&pallets=${palletCount}&weeks=${storageWeeks}`}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors inline-flex items-center gap-1.5"
              >
                <span>Reserve Bay Allocation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HAULIER & ACCESS INFORMATION FOR LONDON TERMINAL */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                SITE DISPATCH &amp; ACCESS
              </span>
              <h3 className="text-2xl font-bold font-display mt-1">
                45a Great North Way Terminal Gatehouse
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct HGV access from A1 / M1 corridors. 24/7 security gate manned for scheduled intake.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+447853573182"
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-mono font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+44 785 357 3182</span>
              </a>
              <Link
                href="/contact"
                className="px-4 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
              >
                Gate Instructions
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-slate-300">
            <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
              <span className="text-slate-400 block text-[11px]">POSTAL ADDRESS</span>
              <strong className="text-white block">45a Great North Way</strong>
              <span className="text-slate-400">London, England, NW4 1PT</span>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
              <span className="text-slate-400 block text-[11px]">GATE BOOKING CODE</span>
              <strong className="text-blue-400 block">VBS-BX-LONDON</strong>
              <span className="text-slate-400">Vehicle Booking System required for all 40ft units</span>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
              <span className="text-slate-400 block text-[11px]">DISPATCH EMAIL</span>
              <strong className="text-white block">dispatch@brixez.com</strong>
              <span className="text-slate-400">Average response time: &lt; 15 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
