"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Plane, 
  Warehouse, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Phone
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Milestone {
  time: string;
  location: string;
  event: string;
  status: "completed" | "current" | "pending";
}

interface ShipmentData {
  awb: string;
  type: string;
  origin: string;
  destination: string;
  carrier: string;
  status: string;
  eta: string;
  pieces: string;
  weight: string;
  customsStatus: string;
  vaultBay: string;
  milestones: Milestone[];
}

export default function TrackPage() {
  const [query, setQuery] = useState("BRX-9482-GB");
  const [shipment, setShipment] = useState<ShipmentData | null>({
    awb: "BRX-9482-GB",
    type: "Priority Commercial Airfreight (NFO)",
    origin: "London Heathrow (LHR), UK",
    destination: "New York John F. Kennedy (JFK), USA",
    carrier: "Flight BX-402 (Boeing 777F)",
    status: "Airborne — Transatlantic Corridor",
    eta: "Today, 18:45 EST",
    pieces: "8 Skids / Ake Containers",
    weight: "2,480 kg gross",
    customsStatus: "UK CDS Export Clearance Granted",
    vaultBay: "Heathrow Cargo Terminal Apron Stand 14",
    milestones: [
      {
        time: "08:30 GMT",
        location: "45a Great North Way, London (NW4 1PT)",
        event: "Cargo consolidated and tendered for Heathrow transit",
        status: "completed"
      },
      {
        time: "10:15 GMT",
        location: "Heathrow World Cargo Centre (LHR)",
        event: "Regulated Agent x-ray security screening passed",
        status: "completed"
      },
      {
        time: "12:45 GMT",
        location: "Heathrow Apron Gate 4",
        event: "Main deck loading onto Boeing 777F completed",
        status: "completed"
      },
      {
        time: "14:30 GMT",
        location: "London Airspace",
        event: "Wheels up — En route JFK sector (Flight BX-402)",
        status: "current"
      },
      {
        time: "18:45 EST (Estimated)",
        location: "New York (JFK Cargo Facility)",
        event: "Scheduled wheels down and customs arrival handover",
        status: "pending"
      }
    ]
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim().toUpperCase();
    if (!q) return;

    if (q.includes("WH") || q.includes("LON") || q.includes("7710")) {
      setShipment({
        awb: q.includes("LON") ? q : "LON-WH-7710",
        type: "HMRC Type U Bonded Warehousing",
        origin: "Rotterdam Europort (Sea Container)",
        destination: "45a Great North Way, London (NW4 1PT)",
        carrier: "Dedicated Intermodal Articulated Unit",
        status: "Stored in Bonded Vault — Duty Suspended",
        eta: "In Facility (Available for Immediate Call-Off)",
        pieces: "24 Euro Pallets (1,200 x 800 mm)",
        weight: "11,840 kg",
        customsStatus: "HMRC Type U Bonded Intake Verified",
        vaultBay: "Aisle 4, Level 3, Bay 14 (VNA High-Bay)",
        milestones: [
          {
            time: "Yesterday, 14:00 GMT",
            location: "Port of Felixstowe",
            event: "Container discharged from deepsea vessel",
            status: "completed"
          },
          {
            time: "Today, 06:30 GMT",
            location: "45a Great North Way Terminal (NW4 1PT)",
            event: "HGV gated intake and seal inspection verified",
            status: "completed"
          },
          {
            time: "Today, 07:45 GMT",
            location: "Hydraulic Dock Bay 4",
            event: "Devanning, pallet barcoding and weight check completed",
            status: "completed"
          },
          {
            time: "Today, 09:00 GMT",
            location: "Bonded High-Bay Vault",
            event: "Racked under HMRC Type U duty & VAT suspension",
            status: "current"
          }
        ]
      });
    } else {
      setShipment({
        awb: q.startsWith("BRX") ? q : `BRX-${q}`,
        type: "Priority Commercial Airfreight (NFO)",
        origin: "London Heathrow (LHR), UK",
        destination: "Dubai World Central (DWC), UAE",
        carrier: "Flight BX-819 (Boeing 747-8F)",
        status: "Cargo Tendered — Gate Open",
        eta: "Tomorrow, 04:30 GST",
        pieces: "4 Pallets ULD",
        weight: "1,650 kg",
        customsStatus: "Export CDS Electronic Clearance Approved",
        vaultBay: "Heathrow Terminal 4 Airside Staging",
        milestones: [
          {
            time: "11:00 GMT",
            location: "45a Great North Way, London (NW4 1PT)",
            event: "Consignment dispatched under security seals",
            status: "completed"
          },
          {
            time: "13:30 GMT",
            location: "Heathrow Air Cargo Center",
            event: "Tarmac reception and weight reconciliation",
            status: "completed"
          },
          {
            time: "18:15 GMT (Scheduled)",
            location: "Heathrow Runway 27L",
            event: "Scheduled departure for Dubai World Central",
            status: "current"
          }
        ]
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Search className="w-3.5 h-3.5" />
            <span>LIVE CONSIGNMENT TELEMETRY &amp; CUSTODY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Consignment Radar.
            <br />
            <span className="text-blue-600">Real-Time Air Cargo &amp; Bonded Racking.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Directly connected to airline electronic airway bill systems and our London WMS at 45a Great North Way (NW4 1PT).
          </p>
        </div>
      </section>

      {/* Main Radar Workspace */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-2 p-1.5 bg-white rounded-xl border border-slate-300 shadow-sm focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <div className="pl-3 flex items-center text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Airway Bill (AWB) or Bonded Storage Code..."
              className="flex-1 py-2 px-2 bg-transparent border-0 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg font-mono transition-colors"
            >
              Locate
            </button>
          </form>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-[11px] font-mono text-slate-500">
            <span>Sample waybills:</span>
            <button
              type="button"
              onClick={() => {
                setQuery("BRX-9482-GB");
                handleSearch({ preventDefault: () => {} } as any);
              }}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-700"
            >
              BRX-9482-GB (LHR Flight Cargo)
            </button>
            <button
              type="button"
              onClick={() => {
                setQuery("LON-WH-7710");
                handleSearch({ preventDefault: () => {} } as any);
              }}
              className="px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-700"
            >
              LON-WH-7710 (London Bonded Pallets)
            </button>
          </div>
        </div>

        {/* Telemetry Result Card */}
        {shipment && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden max-w-4xl mx-auto">
            {/* Header Status Bar */}
            <div className="bg-slate-900 text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase font-bold">
                  CONSIGNMENT WAYBILL
                </span>
                <h3 className="text-2xl font-bold font-mono tracking-tight text-white mt-0.5">
                  {shipment.awb}
                </h3>
                <span className="text-xs text-slate-400 font-sans">{shipment.type}</span>
              </div>

              <div className="text-right sm:text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold inline-block">
                  ● {shipment.status}
                </span>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  ETA: <strong className="text-white">{shipment.eta}</strong>
                </div>
              </div>
            </div>

            {/* Flight & Storage Data Grid */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono border-b border-slate-100 pb-6">
                <div>
                  <span className="text-slate-400 block text-[11px]">ORIGIN</span>
                  <strong className="text-slate-900 text-xs block">{shipment.origin}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">DESTINATION</span>
                  <strong className="text-slate-900 text-xs block">{shipment.destination}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">CARRIER / VESSEL</span>
                  <strong className="text-blue-600 text-xs block">{shipment.carrier}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">PALLET WEIGHT</span>
                  <strong className="text-slate-900 text-xs block">{shipment.weight}</strong>
                </div>
              </div>

              {/* Facility & Customs Compliance Box */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 text-[11px] block">CUSTOMS STATUS</span>
                  <strong className="text-emerald-700 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{shipment.customsStatus}</span>
                  </strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">CURRENT BAY / STAND</span>
                  <strong className="text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{shipment.vaultBay}</span>
                  </strong>
                </div>
              </div>

              {/* Chronological Milestone Timeline */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  CUSTODY &amp; TRANSIT MILESTONES
                </h4>

                <div className="space-y-4 border-l-2 border-slate-200 ml-2 pl-4">
                  {shipment.milestones.map((m, idx) => (
                    <div key={idx} className="relative space-y-1">
                      <div
                        className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 bg-white ${
                          m.status === "completed"
                            ? "border-blue-600 bg-blue-600"
                            : m.status === "current"
                            ? "border-emerald-500 bg-emerald-500 animate-pulse"
                            : "border-slate-300"
                        }`}
                      />
                      <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-mono">
                        <strong className="text-slate-900">{m.event}</strong>
                        <span className="text-slate-400 text-[11px]">{m.time}</span>
                      </div>
                      <span className="text-slate-500 text-[11px] block">{m.location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Support Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono text-slate-600">
              <span>Questions regarding this waybill?</span>
              <a
                href="tel:+447853573182"
                className="text-blue-600 font-bold hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call London Dispatch: +44 785 357 3182</span>
              </a>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
