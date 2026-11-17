"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plane, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Gauge, 
  Zap, 
  Thermometer, 
  FileText
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlightDepartures from "../components/FlightDepartures";

export default function AirFreightPage() {
  const [selectedAircraft, setSelectedAircraft] = useState("B777F");

  const aircraftData: Record<string, { name: string; payload: string; volume: string; range: string; mainDeck: string }> = {
    B777F: {
      name: "Boeing 777F Long-Range Freighter",
      payload: "102,000 kg (102 Tonnes)",
      volume: "650 m³ (27 Main Deck Positions)",
      range: "9,200 km (Non-stop London to Hong Kong)",
      mainDeck: "Accommodates 3.05m tall 10ft ULD containers"
    },
    B7478F: {
      name: "Boeing 747-8F Nose-Loader",
      payload: "137,700 kg (137 Tonnes)",
      volume: "858 m³ (34 Main Deck Positions)",
      range: "7,800 km (Direct Transatlantic & Gulf)",
      mainDeck: "Front nose door enables 30-meter continuous pipe/shaft cargo"
    },
    A330F: {
      name: "Airbus A330-200F Regional Heavy",
      payload: "70,000 kg (70 Tonnes)",
      volume: "475 m³ (23 Pallet Positions)",
      range: "7,400 km (London to Middle East & East Coast USA)",
      mainDeck: "Side cargo door with automated powered roller floor"
    }
  };

  const capabilities = [
    {
      title: "Next-Flight-Out (NFO) Priority",
      badge: "SAME-DAY / CRITICAL",
      desc: "Emergency priority boarding on the earliest commercial flight departure from London Heathrow. Direct tarmac apron handover, priority customs clearance, and dedicated destination courier delivery.",
      points: [
        "12 to 24 hour guaranteed global transit delivery",
        "Aircraft-on-Ground (AOG), aerospace avionics & surgical medical tech",
        "Dedicated On-Board Courier (OBC) accompaniment if required"
      ]
    },
    {
      title: "Scheduled Freight Consolidations",
      badge: "WEEKLY BLOCK SPACE (BSA)",
      desc: "Fixed weekly block space allocations on high-frequency commercial air lanes connecting London Heathrow (LHR) and Stansted (STN) with North America, the UAE, and Singapore.",
      points: [
        "Cost-predictable commercial volume tariffs",
        "Direct electronic airway bills (AWB) with live IATA tracking",
        "Comprehensive pre-arrival UK & overseas customs declaration"
      ]
    },
    {
      title: "Dedicated Full Aircraft Charters",
      badge: "FULL CAPACITY DISPATCH",
      desc: "Full and partial freighter chartering for oversized, heavy-lift, or emergency project cargo requiring dedicated point-to-point flight schedules without standard carrier stopovers.",
      points: [
        "Boeing 777F, 747-8F, and Airbus A330F operational availability",
        "Direct flight paths into remote or secondary industrial airfields",
        "On-site loadmaster and apron crane loading supervision"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Plane className="w-3.5 h-3.5" />
            <span>HEATHROW AIRSIDE GATEWAY (LHR) • STANSTED (STN)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            High-Velocity Flight Shipping.
            <br />
            <span className="text-blue-600">Air Cargo &amp; Dedicated Charters.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Operating daily scheduled air freight rotations and time-critical aircraft charters out of London Heathrow. Backed by Regulated Agent security screening, late apron tenders, and 4-hour cut-off windows.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/quote?service=air"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Book Flight Allocation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="tel:+447853573182"
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Air Dispatch: +44 785 357 3182</span>
            </a>
          </div>
        </div>
      </section>

      {/* THREE SPECIALIZED FLIGHT TIERS */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
            FLIGHT DISCIPLINES
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
            Airfreight Operating Modes
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Engineered around critical deadlines, high payloads, and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {c.badge}
                </span>
                <h3 className="text-lg font-bold text-slate-950 font-display">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                
                <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
                  {c.points.map((pt, pidx) => (
                    <li key={pidx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href={`/quote?service=air&mode=${encodeURIComponent(c.title)}`}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 font-mono"
                >
                  <span>Request Capacity</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE FLIGHT ROTATIONS BOARD */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FlightDepartures />
        </div>
      </section>

      {/* AIRCRAFT FLEET TECHNICAL SPECS */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
            FLEET SPECIFICATIONS
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
            Freighter Payload &amp; Aircraft Capabilities
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Review cargo hold dimensions, main-deck clearance, and payload limits for widebody freighters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Aircraft Selector */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setSelectedAircraft("B777F")}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selectedAircraft === "B777F"
                  ? "bg-white border-blue-600 shadow-sm"
                  : "bg-white/60 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="font-bold text-sm text-slate-900 font-display">Boeing 777F</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">102 Tonnes • Long Haul Intercontinental</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedAircraft("B7478F")}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selectedAircraft === "B7478F"
                  ? "bg-white border-blue-600 shadow-sm"
                  : "bg-white/60 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="font-bold text-sm text-slate-900 font-display">Boeing 747-8F</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">137 Tonnes • Nose-Loading Heavy Lift</div>
            </button>

            <button
              type="button"
              onClick={() => setSelectedAircraft("A330F")}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selectedAircraft === "A330F"
                  ? "bg-white border-blue-600 shadow-sm"
                  : "bg-white/60 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="font-bold text-sm text-slate-900 font-display">Airbus A330-200F</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">70 Tonnes • Regional &amp; Transatlantic</div>
            </button>
          </div>

          {/* Aircraft Specification Display Card */}
          <div className="lg:col-span-2 bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                  AIRCRAFT TECHNICAL DOSSIER
                </span>
                <h3 className="text-xl font-bold font-display mt-1">
                  {aircraftData[selectedAircraft].name}
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-slate-800 rounded text-slate-300">
                ICAO / IATA APPROVED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 bg-slate-800/60 rounded-xl space-y-1">
                <span className="text-slate-400 block text-[11px]">MAXIMUM PAYLOAD</span>
                <strong className="text-white text-sm block">{aircraftData[selectedAircraft].payload}</strong>
              </div>

              <div className="p-3.5 bg-slate-800/60 rounded-xl space-y-1">
                <span className="text-slate-400 block text-[11px]">CARGO HOLD VOLUME</span>
                <strong className="text-white text-sm block">{aircraftData[selectedAircraft].volume}</strong>
              </div>

              <div className="p-3.5 bg-slate-800/60 rounded-xl space-y-1">
                <span className="text-slate-400 block text-[11px]">MAX FLIGHT RANGE</span>
                <strong className="text-white text-sm block">{aircraftData[selectedAircraft].range}</strong>
              </div>

              <div className="p-3.5 bg-slate-800/60 rounded-xl space-y-1">
                <span className="text-slate-400 block text-[11px]">MAIN-DECK ENVELOPE</span>
                <strong className="text-blue-400 text-xs block">{aircraftData[selectedAircraft].mainDeck}</strong>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
              <span className="text-slate-400 font-mono">
                Direct apron loading at Heathrow T4 &amp; Stansted World Cargo Centre.
              </span>
              <Link
                href="/quote"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Request Charter Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
