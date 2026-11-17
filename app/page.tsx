"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plane, 
  Warehouse, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Search, 
  ArrowUpRight, 
  Box, 
  Layers, 
  Cpu, 
  Navigation
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlightDepartures from "./components/FlightDepartures";
import RateEstimator from "./components/RateEstimator";

export default function Home() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<"track" | "flights" | "terminal">("track");
  const [sampleTrackQuery, setSampleTrackQuery] = useState("BRX-9482-GB");
  const [trackStatus, setTrackStatus] = useState({
    code: "BRX-9482-GB",
    route: "LHR → JFK (Flight BX-402)",
    aircraft: "Boeing 777F Freighter",
    status: "Airborne — Transatlantic Sector",
    eta: "Today, 18:45 EST",
    security: "Regulated Agent (RA3) Verified",
    bondedBay: "London Heathrow Airside Gate 4"
  });

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = sampleTrackQuery.trim().toUpperCase();
    if (q.includes("WH") || q.includes("LON") || q.includes("7710")) {
      setTrackStatus({
        code: q || "LON-WH-7710",
        route: "Rotterdam → London Terminal",
        aircraft: "Inbound Dedicated Haulage",
        status: "Cleared under HMRC Bond (NW4 1PT)",
        eta: "In Vault (Bay 14, VNA Racking)",
        security: "Biometric & 24/7 Redcare Monitored",
        bondedBay: "45a Great North Way (Type U Bond)"
      });
    } else {
      setTrackStatus({
        code: q.startsWith("BRX") ? q : `BRX-${q}`,
        route: "LHR → JFK (Flight BX-402)",
        aircraft: "Boeing 777F Freighter",
        status: "Airborne — Transatlantic Sector",
        eta: "Today, 18:45 EST",
        security: "Regulated Agent (RA3) Verified",
        bondedBay: "Heathrow Cargo Terminal 4"
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* COMMAND CENTER HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-200 bg-white bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Direct Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>LONDON OPERATIONS HUB • 45A GREAT NORTH WAY NW4 1PT</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08]">
                Direct Flight Cargo.
                <br />
                <span className="text-blue-600">Bonded London Storage.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Coordinating high-frequency airfreight departures from London Heathrow alongside 125,000 sq ft of HMRC Type U bonded warehousing. 4-hour tarmac tenders, zero upfront customs duty, and 24/7 dedicated dispatch.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/air-freight"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  <span>Book Flight Cargo</span>
                </Link>

                <Link
                  href="/warehousing"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <Warehouse className="w-4 h-4 text-blue-400" />
                  <span>Reserve Bonded Bays</span>
                </Link>

                <a
                  href="tel:+447853573182"
                  className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>+44 785 357 3182</span>
                </a>
              </div>

              {/* Live Technical Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 font-mono text-xs">
                <div>
                  <span className="text-lg font-bold text-slate-950 block">125,000 sq ft</span>
                  <span className="text-slate-500 text-[11px]">London Bonded Racking</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-slate-950 block">4-Hour</span>
                  <span className="text-slate-500 text-[11px]">Heathrow Cargo Cutoff</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-blue-600 block">HMRC Type U</span>
                  <span className="text-slate-500 text-[11px]">Duty &amp; VAT Deferral</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Dispatch Console */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
                {/* Console Header */}
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase">
                      BRIXEZ DISPATCH RADAR
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    TERMINAL 45A-NW4
                  </span>
                </div>

                {/* Console Tab Selectors */}
                <div className="grid grid-cols-3 bg-slate-100 text-xs font-semibold border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("track")}
                    className={`py-3 px-2 text-center transition-colors font-mono ${
                      activeConsoleTab === "track"
                        ? "bg-white text-blue-600 border-b-2 border-blue-600 font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Cargo Radar
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("flights")}
                    className={`py-3 px-2 text-center transition-colors font-mono ${
                      activeConsoleTab === "flights"
                        ? "bg-white text-blue-600 border-b-2 border-blue-600 font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    LHR Departures
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveConsoleTab("terminal")}
                    className={`py-3 px-2 text-center transition-colors font-mono ${
                      activeConsoleTab === "terminal"
                        ? "bg-white text-blue-600 border-b-2 border-blue-600 font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Storage Vault
                  </button>
                </div>

                {/* Tab 1: Live Cargo Radar */}
                {activeConsoleTab === "track" && (
                  <div className="p-6 space-y-4">
                    <form onSubmit={handleTrackSubmit} className="flex gap-2">
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={sampleTrackQuery}
                          onChange={(e) => setSampleTrackQuery(e.target.value)}
                          placeholder="AWB or Reference..."
                          className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg font-mono"
                      >
                        Locate
                      </button>
                    </form>

                    {/* Live Telemetry Box */}
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <span className="text-slate-500">CONSIGNMENT</span>
                        <strong className="text-blue-600 font-bold">{trackStatus.code}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">SECTOR</span>
                        <strong className="text-slate-900">{trackStatus.route}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">PAYLOAD CARRIER</span>
                        <span className="text-slate-800">{trackStatus.aircraft}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">CURRENT STATUS</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          {trackStatus.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">EXPECTED ARRIVAL</span>
                        <strong className="text-slate-900">{trackStatus.eta}</strong>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-[11px]">
                        <span className="text-slate-500">FACILITY / APRON</span>
                        <span className="text-slate-700">{trackStatus.bondedBay}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
                      <span>Quick lookup:</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSampleTrackQuery("BRX-9482-GB");
                            setTrackStatus({
                              code: "BRX-9482-GB",
                              route: "LHR → JFK (Flight BX-402)",
                              aircraft: "Boeing 777F Freighter",
                              status: "Airborne — En Route",
                              eta: "Today, 18:45 EST",
                              security: "Regulated Agent (RA3) Verified",
                              bondedBay: "Heathrow Cargo Terminal 4"
                            });
                          }}
                          className="hover:text-blue-600 underline"
                        >
                          Flight AWB
                        </button>
                        <span>•</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSampleTrackQuery("LON-WH-7710");
                            setTrackStatus({
                              code: "LON-WH-7710",
                              route: "Bonded Storage Intake",
                              aircraft: "Inbound Container Bay 3",
                              status: "Stored in Bonded Vault",
                              eta: "Stored (NW4 1PT)",
                              security: "HMRC Type U Suspended",
                              bondedBay: "45a Great North Way (VNA 12)"
                            });
                          }}
                          className="hover:text-blue-600 underline"
                        >
                          Bonded Pallet
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: LHR Departures Snapshot */}
                {activeConsoleTab === "flights" && (
                  <div className="p-6 space-y-3 font-mono text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">BX-402 • B777F</div>
                        <div className="text-[11px] text-slate-500">LHR → JFK (New York)</div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold block">
                          Boarding Cargo
                        </span>
                        <span className="text-[10px] text-slate-500">Departs 14:30 GMT</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">BX-819 • B747-8F</div>
                        <div className="text-[11px] text-slate-500">LHR → DWC (Dubai)</div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold block">
                          Gate Open
                        </span>
                        <span className="text-[10px] text-slate-500">Departs 18:15 GMT</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">BX-104 • A350F</div>
                        <div className="text-[11px] text-slate-500">STN → SIN (Singapore)</div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold block">
                          Scheduled
                        </span>
                        <span className="text-[10px] text-slate-500">Departs 22:00 GMT</span>
                      </div>
                    </div>

                    <Link
                      href="/air-freight"
                      className="block text-center pt-2 text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      View Full Flight Roster &amp; Cutoffs →
                    </Link>
                  </div>
                )}

                {/* Tab 3: Storage Vault Snapshot */}
                {activeConsoleTab === "terminal" && (
                  <div className="p-6 space-y-3 font-mono text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                      <div className="flex justify-between text-slate-500">
                        <span>FACILITY</span>
                        <span className="text-slate-900 font-bold">45a Great North Way (NW4 1PT)</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>TOTAL CAPACITY</span>
                        <span className="text-slate-900">125,000 sq ft (14,000 Pallets)</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>CUSTOMS BOND</span>
                        <span className="text-blue-600 font-bold">HMRC Type U Authorized</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>DOCK LEVELERS</span>
                        <span className="text-slate-900">16 Hydraulic Inbound Bays</span>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-200 text-[11px] text-blue-900 space-y-1">
                      <div className="font-bold">DUTY &amp; VAT SUSPENSION READY</div>
                      <p className="text-blue-700">
                        Goods stored in this terminal do not trigger UK import tax or duty until release for domestic consumption.
                      </p>
                    </div>

                    <Link
                      href="/warehousing"
                      className="block text-center pt-2 text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Inspect London Warehouse Facility →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PRIMARY ASSET SHOWCASE CARDS (Flight Logistics vs London Bonded Hub) */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 block font-semibold">
              CORE INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mt-1 font-display">
              Commercial Flight Operations &amp; London Warehousing
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 font-mono"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Flight Shipping */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Plane className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-medium">
                  HEATHROW (LHR) • STANSTED (STN)
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  Flight Shipping &amp; Air Cargo
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Scheduled widebody belly cargo, dedicated Boeing 777F freighter rotations, and emergency aerospace charter services operating directly from London airports.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Next-Flight-Out (NFO) Priority</strong>
                    <span className="text-slate-500">Guaranteed boarding for urgent aerospace (AOG), medical devices, and high-tech components.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">4-Hour Heathrow Airside Tenders</strong>
                    <span className="text-slate-500">Late cargo acceptance windows with direct runway apron delivery and customs clearance.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">GDP Certified Cold Chain</strong>
                    <span className="text-slate-500">Active temperature-controlled ULD containers maintained between +2°C to +8°C and -20°C.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <Link
                href="/air-freight"
                className="font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5"
              >
                <span>Flight Departures &amp; Charters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="font-mono text-slate-400 text-[11px]">Heathrow Terminal 4 Airside</span>
            </div>
          </div>

          {/* Card 2: London Bonded Warehousing */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Warehouse className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-blue-50 text-blue-700 rounded-md font-semibold border border-blue-200">
                  HMRC TYPE U AUTHORISED
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">
                  London Bonded Warehousing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  Our flagship 125,000 sq ft logistics hub located at 45a Great North Way, London (NW4 1PT). Authorised by HMRC for indefinite UK customs duty and import VAT suspension.
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">14,000 VNA Pallet Positions</strong>
                    <span className="text-slate-500">12.5m clear ceiling heights with wire-guided narrow aisle reach trucks and barcoded bin slots.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">16 Hydraulic Dock Levelers</strong>
                    <span className="text-slate-500">Instant container turnaround, cross-docking, and unstuffing with full UK road transport link.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Strategic London Positioning (NW4 1PT)</strong>
                    <span className="text-slate-500">Immediate access to the A1 / M1 junction and North Circular for rapid Greater London distribution.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <Link
                href="/warehousing"
                className="font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5"
              >
                <span>Terminal Specs &amp; Racking</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="font-mono text-slate-400 text-[11px]">45a Great North Way, NW4 1PT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULED FLIGHT ROTATIONS SECTION */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <FlightDepartures />
        </div>
      </section>

      {/* FACILITY ARCHITECTURE & COMPARISON GRID */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 block font-semibold">
            FACILITIES &amp; ASSETS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mt-1 font-display">
            Strategic Logistics Hubs
          </h2>
          <p className="text-slate-600 text-xs mt-1">
            Certified facilities engineered for fast turnaround, secure bonded custody, and high-velocity flight tendering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Facility 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                London Headquarters
              </span>
              <span className="text-xs font-mono text-slate-400">NW4 1PT</span>
            </div>

            <h4 className="text-base font-bold text-slate-950 font-display">
              45a Great North Way Terminal
            </h4>
            
            <p className="text-slate-600 text-xs leading-relaxed">
              Main London warehousing complex providing customs duty suspension, bonded storage, and automated pallet handling.
            </p>

            <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono">
              <div className="flex justify-between"><span>Floor Space:</span><strong className="text-slate-900">125,000 sq ft</strong></div>
              <div className="flex justify-between"><span>Racking Capacity:</span><strong className="text-slate-900">14,000 VNA Pallets</strong></div>
              <div className="flex justify-between"><span>Customs Bond:</span><strong className="text-blue-600 font-bold">HMRC Type U</strong></div>
              <div className="flex justify-between"><span>Hydraulic Bays:</span><strong className="text-slate-900">16 Inbound Docks</strong></div>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold">
                Heathrow Airside
              </span>
              <span className="text-xs font-mono text-slate-400">TW6 2GW</span>
            </div>

            <h4 className="text-base font-bold text-slate-950 font-display">
              Heathrow Cargo Apron Hub
            </h4>

            <p className="text-slate-600 text-xs leading-relaxed">
              Airside consolidation facility with direct runway apron access for late-cut off passenger belly cargo and freighter staging.
            </p>

            <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono">
              <div className="flex justify-between"><span>Floor Space:</span><strong className="text-slate-900">68,000 sq ft</strong></div>
              <div className="flex justify-between"><span>Tarmac Access:</span><strong className="text-slate-900">Direct Gate Access</strong></div>
              <div className="flex justify-between"><span>Security:</span><strong className="text-blue-600 font-bold">Regulated Agent (RA)</strong></div>
              <div className="flex justify-between"><span>Cold Chain:</span><strong className="text-slate-900">+2°C to +8°C Vault</strong></div>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold">
                European Hub
              </span>
              <span className="text-xs font-mono text-slate-400">3199 LK</span>
            </div>

            <h4 className="text-base font-bold text-slate-950 font-display">
              Rotterdam Europort Terminal
            </h4>

            <p className="text-slate-600 text-xs leading-relaxed">
              Multimodal interchange linking UK haulage with direct European ocean shipping and continental rail freight networks.
            </p>

            <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono">
              <div className="flex justify-between"><span>Floor Space:</span><strong className="text-slate-900">180,000 sq ft</strong></div>
              <div className="flex justify-between"><span>Intermodal:</span><strong className="text-slate-900">Road, Ocean &amp; Rail</strong></div>
              <div className="flex justify-between"><span>Customs:</span><strong className="text-blue-600 font-bold">EU Bonded Depot</strong></div>
              <div className="flex justify-between"><span>Heavy Lift:</span><strong className="text-slate-900">45-Ton Reach Stackers</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFF ESTIMATOR SECTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 block font-semibold">
              COMMERCIAL TARIFFS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mt-1 font-display">
              Instant Freight &amp; Storage Estimator
            </h2>
          </div>
          <RateEstimator />
        </div>
      </section>

      {/* OPERATIONS & DISPATCH BANNER */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 LONDON DISPATCH ACTIVE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
              Ready to book flight space or reserve bonded pallets?
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              45a Great North Way, London, England, NW4 1PT • Hotline: +44 785 357 3182
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+447853573182"
              className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dispatch: +44 785 357 3182</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-3 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-xs font-semibold rounded-lg transition-colors"
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
