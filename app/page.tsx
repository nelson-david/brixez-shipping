"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plane, 
  Warehouse, 
  ArrowUpRight, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Search, 
  Clock 
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const flightsData = [
  {
    code: "BX-402",
    aircraft: "Boeing 777F",
    route: "London Heathrow (LHR) → New York (JFK)",
    dest: "North America",
    departure: "14:30 GMT",
    cutoff: "10:30 GMT (4h Cut-off)",
    status: "Boarding Cargo"
  },
  {
    code: "BX-819",
    aircraft: "Boeing 747-8F",
    route: "London Heathrow (LHR) → Dubai (DWC)",
    dest: "Middle East",
    departure: "18:15 GMT",
    cutoff: "13:45 GMT",
    status: "Gate Open"
  },
  {
    code: "BX-104",
    aircraft: "Airbus A350F",
    route: "London Stansted (STN) → Singapore (SIN)",
    dest: "Asia-Pacific",
    departure: "22:00 GMT",
    cutoff: "17:00 GMT",
    status: "Scheduled"
  },
  {
    code: "BX-621",
    aircraft: "Boeing 767-300F",
    route: "London Heathrow (LHR) → Chicago (ORD)",
    dest: "North America",
    departure: "Tomorrow, 08:00",
    cutoff: "03:30 GMT",
    status: "Scheduled"
  }
];

export default function Home() {
  const [trackQuery, setTrackQuery] = useState("");
  const [trackNotice, setTrackNotice] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const q = trackQuery.trim().toUpperCase();
    if (!q) {
      setTrackNotice("Please enter an airway bill (AWB) or bonded storage code.");
      return;
    }
    if (q.includes("WH") || q.includes("LON") || q.includes("7710")) {
      setTrackNotice(`Consignment ${q} held in Bonded Vault at 45a Great North Way (NW4 1PT) — cleared under HMRC Type U for immediate call-off.`);
    } else {
      setTrackNotice(`Waybill ${q.startsWith("BRX") ? q : `BRX-${q}`} in transit to New York (JFK) on Flight BX-402 — on schedule.`);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* MINIMALIST HERO SECTION (Spacious, Centered Architectural Alignment) */}
      <section className="pt-20 pb-20 md:pt-28 md:pb-28 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          {/* Eyebrow */}
          <div className="bx-eyebrow justify-center">
            <span className="dot"></span>
            <span>London Operations • 45a Great North Way (NW4 1PT) • Heathrow Air Cargo</span>
          </div>

          {/* Master Headline */}
          <h1 className="bx-title-hero">
            Commercial flight shipping.
            <br />
            <span className="text-blue-600 font-normal">Dedicated bonded warehousing.</span>
          </h1>

          {/* Lede Body */}
          <p className="bx-body max-w-2xl mx-auto">
            Coordinating scheduled air cargo departures from London Heathrow alongside 125,000 sq ft of HMRC Type U bonded storage at our London terminal. Zero upfront duty, 4-hour tarmac tenders, and 24/7 dedicated dispatch.
          </p>

          {/* Quick Tracking Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <form onSubmit={handleTrack} className="flex items-center bg-slate-50 border border-slate-300 rounded-lg p-1.5 focus-within:border-blue-600 focus-within:bg-white transition-all">
              <Search className="w-4 h-4 text-slate-400 ml-3 mr-2 shrink-0" />
              <input
                type="text"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                placeholder="Enter airway bill (AWB) or storage reference..."
                className="w-full bg-transparent text-xs font-mono text-slate-900 placeholder:text-slate-400 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bx-btn bx-btn-blue !py-2 !px-4 text-xs font-mono shrink-0"
              >
                Track
              </button>
            </form>

            {trackNotice && (
              <p className="text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-md p-2.5 mt-3 font-mono text-left">
                {trackNotice}
              </p>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/air-freight" className="bx-btn bx-btn-dark">
              <span>Explore Flight Cargo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/warehousing" className="bx-btn bx-btn-outline">
              <span>London Bonded Terminal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+447853573182"
              className="text-xs font-mono font-medium text-slate-600 hover:text-blue-600 flex items-center gap-1.5 py-2 px-3"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+44 785 357 3182</span>
            </a>
          </div>

          {/* Architectural Metrics Strip */}
          <div className="pt-12 grid grid-cols-3 gap-6 border-t border-slate-100 max-w-2xl mx-auto font-mono text-xs">
            <div>
              <span className="text-xl font-bold text-slate-950 block">125,000 sq ft</span>
              <span className="text-slate-500 text-[11px] mt-0.5 block">Bonded London Racking</span>
            </div>
            <div>
              <span className="text-xl font-bold text-slate-950 block">4-Hour</span>
              <span className="text-slate-500 text-[11px] mt-0.5 block">Heathrow Cargo Cut-Off</span>
            </div>
            <div>
              <span className="text-xl font-bold text-blue-600 block">HMRC Type U</span>
              <span className="text-slate-500 text-[11px] mt-0.5 block">Duty &amp; VAT Deferral</span>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PRIMARY FOCUS ASSETS (Asymmetric Minimalist 2-Column Grid) */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <div className="bx-eyebrow">
              <span className="dot"></span>
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="bx-title-section">
              Flight Logistics &amp; Strategic Storage
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>All Capabilities</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Flight Shipping */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-8 md:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Plane className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">HEATHROW (LHR) • STANSTED (STN)</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  Flight Shipping &amp; Airfreight
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Daily scheduled widebody belly cargo, dedicated Boeing 777F freighter rotations, and priority Next-Flight-Out (NFO) air cargo departures from London Heathrow.
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Next-Flight-Out (NFO) guaranteed boarding for urgent aerospace AOG and medical</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Late 4-hour airside cargo tenders directly at Heathrow Terminal 4</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>GDP certified cold-chain ULD containers held at +2°C to +8°C and -20°C</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <Link
                href="/air-freight"
                className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Flight Departures &amp; Charters</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="font-mono text-slate-400 text-[11px]">Heathrow Airside Gate</span>
            </div>
          </div>

          {/* Card 2: Warehousing */}
          <div className="bg-white rounded-xl border border-slate-200/90 p-8 md:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Warehouse className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                  HMRC TYPE U AUTHORISED
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  London Bonded Warehousing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Flagship 125,000 sq ft logistics facility at 45a Great North Way, London (NW4 1PT). Authorised by HMRC for indefinite customs duty and import VAT suspension.
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>14,000 VNA narrow-aisle pallet positions with 12.5m clear ceiling heights</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>16 hydraulic dock levelers for rapid container devanning and cross-docking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Direct arterial road connectivity to the A1, M1, and North Circular corridors</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <Link
                href="/warehousing"
                className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Terminal Specs &amp; Racking</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="font-mono text-slate-400 text-[11px]">45a Great North Way, NW4 1PT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULED FLIGHT ROTATIONS (Clean Minimalist Table) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
            <div>
              <div className="bx-eyebrow">
                <span className="dot"></span>
                <span>HEATHROW AIR CARGO ROTATIONS</span>
              </div>
              <h3 className="bx-title-section mt-1">
                Active Flight Schedule
              </h3>
            </div>
            <Link
              href="/air-freight"
              className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All Flights</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-mono text-[11px] uppercase">
                  <th className="py-3 px-4 font-medium">Flight</th>
                  <th className="py-3 px-4 font-medium">Route</th>
                  <th className="py-3 px-4 font-medium">Aircraft</th>
                  <th className="py-3 px-4 font-medium">Departure</th>
                  <th className="py-3 px-4 font-medium">Cargo Cut-Off</th>
                  <th className="py-3 px-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {flightsData.map((f) => (
                  <tr key={f.code} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-slate-900 text-sm">
                      {f.code}
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-900 block">{f.route}</span>
                      <span className="text-slate-400 text-[11px]">{f.dest}</span>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-600">
                      {f.aircraft}
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-900 font-medium">
                      {f.departure}
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-500">
                      {f.cutoff}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-50 text-blue-700">
                        {f.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* THREE STRATEGIC FACILITIES GRID */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-1">
          <div className="bx-eyebrow">
            <span className="dot"></span>
            <span>NETWORK ASSETS</span>
          </div>
          <h2 className="bx-title-section">
            Terminal &amp; Storage Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Facility 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                London Headquarters
              </span>
              <span className="text-xs font-mono text-slate-400">NW4 1PT</span>
            </div>

            <h4 className="text-base font-bold text-slate-950 font-display">
              45a Great North Way Terminal
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Flagship London warehousing facility providing customs duty suspension, bonded storage, and automated pallet handling.
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono">
              <div className="flex justify-between"><span>Floor Space:</span><strong className="text-slate-900">125,000 sq ft</strong></div>
              <div className="flex justify-between"><span>Racking Capacity:</span><strong className="text-slate-900">14,000 VNA Pallets</strong></div>
              <div className="flex justify-between"><span>Customs Bond:</span><strong className="text-blue-600">HMRC Type U</strong></div>
              <div className="flex justify-between"><span>Hydraulic Bays:</span><strong className="text-slate-900">16 Inbound Docks</strong></div>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                Heathrow Airside
              </span>
              <span className="text-xs font-mono text-slate-400">TW6</span>
            </div>

            <h4 className="text-base font-bold text-slate-950 font-display">
              Heathrow Cargo Apron Hub
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Airside consolidation facility with direct runway apron access for late-cut off passenger belly cargo and freighter staging.
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono">
              <div className="flex justify-between"><span>Floor Space:</span><strong className="text-slate-900">68,000 sq ft</strong></div>
              <div className="flex justify-between"><span>Tarmac Access:</span><strong className="text-slate-900">Direct Gate Access</strong></div>
              <div className="flex justify-between"><span>Security:</span><strong className="text-blue-600">Regulated Agent (RA)</strong></div>
              <div className="flex justify-between"><span>Cold Chain:</span><strong className="text-slate-900">+2°C to +8°C Vault</strong></div>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                European Hub
              </span>
              <span className="text-xs font-mono text-slate-400">Europort</span>
            </div>

            <h4 className="text-base font-bold text-slate-950 font-display">
              Rotterdam Europort Terminal
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Multimodal interchange linking UK haulage with direct European ocean shipping and continental rail freight networks.
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono">
              <div className="flex justify-between"><span>Floor Space:</span><strong className="text-slate-900">180,000 sq ft</strong></div>
              <div className="flex justify-between"><span>Intermodal:</span><strong className="text-slate-900">Road, Ocean &amp; Rail</strong></div>
              <div className="flex justify-between"><span>Customs:</span><strong className="text-blue-600">EU Bonded Depot</strong></div>
              <div className="flex justify-between"><span>Heavy Lift:</span><strong className="text-slate-900">45-Ton Reach Stackers</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCH CALLOUT (Clean, Airy Midnight Navy Panel) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 LONDON DISPATCH ACTIVE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ready to book flight space or allocate bonded bays?
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              45a Great North Way, London, England, NW4 1PT • Telephone: +44 785 357 3182
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+447853573182"
              className="bx-btn bx-btn-blue text-xs font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+44 785 357 3182</span>
            </a>
            <Link
              href="/contact"
              className="bx-btn !border-slate-700 !text-slate-200 hover:!border-slate-500 hover:!text-white text-xs"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
