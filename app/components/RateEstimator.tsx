"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Plane, Warehouse, Ship } from "lucide-react";
import Link from "next/link";

export default function RateEstimator() {
  const [service, setService] = useState<"air" | "bonded" | "ocean">("air");
  const [weight, setWeight] = useState("450");
  const [pallets, setPallets] = useState("4");
  const [weeks, setWeeks] = useState("4");
  const [locked, setLocked] = useState(false);

  const w = parseFloat(weight) || 10;
  const p = parseInt(pallets) || 1;
  const k = parseInt(weeks) || 1;

  let estimate = 0;
  let timing = "";

  if (service === "air") {
    estimate = Math.round(w * 4.4 + 180);
    timing = "1 - 3 Days (Next-Flight-Out Available)";
  } else if (service === "bonded") {
    estimate = Math.round(p * k * 18 + 75);
    timing = "Immediate Space at 45a Great North Way (NW4 1PT)";
  } else {
    estimate = Math.round(p * 280 + 190);
    timing = "14 - 21 Days Door-to-Door Ocean Transit";
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
      {/* Mode Selector */}
      <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 rounded-xl text-xs font-semibold">
        <button
          type="button"
          onClick={() => { setService("air"); setLocked(false); }}
          className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
            service === "air" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Plane className="w-3.5 h-3.5" />
          <span>Flight Shipping</span>
        </button>

        <button
          type="button"
          onClick={() => { setService("bonded"); setLocked(false); }}
          className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
            service === "bonded" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Warehouse className="w-3.5 h-3.5" />
          <span>Bonded Storage</span>
        </button>

        <button
          type="button"
          onClick={() => { setService("ocean"); setLocked(false); }}
          className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
            service === "ocean" ? "bg-white text-blue-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Ship className="w-3.5 h-3.5" />
          <span>Ocean Freight</span>
        </button>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {service !== "bonded" ? (
          <>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">ORIGIN TERMINAL</label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600">
                <option>London Heathrow (LHR), UK</option>
                <option>London Stansted (STN), UK</option>
                <option>Frankfurt Airport Cargo (FRA)</option>
                <option>Amsterdam Schiphol (AMS)</option>
              </select>
            </div>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">DESTINATION HUB</label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600">
                <option>New York (JFK), USA</option>
                <option>Dubai World Central (DWC), UAE</option>
                <option>Singapore Changi (SIN)</option>
                <option>Chicago O&apos;Hare (ORD), USA</option>
              </select>
            </div>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">CARGO WEIGHT (KG)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">ESTIMATED PALLETS</label>
              <input
                type="number"
                value={pallets}
                onChange={(e) => setPallets(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-blue-600"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">BONDED TERMINAL</label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600">
                <option>London Flagship Hub (45a Great North Way, NW4 1PT)</option>
                <option>Heathrow Airside Rapid Terminal (TW6)</option>
                <option>Rotterdam Europort Continental Hub</option>
              </select>
            </div>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">PALLET COUNT</label>
              <input
                type="number"
                value={pallets}
                onChange={(e) => setPallets(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">STORAGE DURATION (WEEKS)</label>
              <input
                type="number"
                value={weeks}
                onChange={(e) => setWeeks(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="text-slate-500 font-mono text-[11px] block mb-1">CUSTOMS REGIME</label>
              <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-blue-600">
                <option>HMRC Type U Duty Deferral</option>
                <option>Pick &amp; Pack Order Fulfillment</option>
                <option>Transit Cross-Dock Consolidation</option>
              </select>
            </div>
          </>
        )}
      </div>

      {/* Output Strip */}
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase text-slate-400 block">Commercial Base Tariff</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-slate-950">£{estimate.toLocaleString()}</span>
            <span className="text-xs text-slate-500">indicative net</span>
          </div>
          <span className="text-xs text-slate-600 mt-0.5 block">{timing}</span>
        </div>

        <div>
          {!locked ? (
            <button
              type="button"
              onClick={() => setLocked(true)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Lock Rate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Reference logged: BRX-EST-{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
