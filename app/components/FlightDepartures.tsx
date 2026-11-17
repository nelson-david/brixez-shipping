"use client";

import { Plane, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface Flight {
  flight: string;
  aircraft: string;
  route: string;
  destCity: string;
  departure: string;
  cutOff: string;
  status: "Boarding Cargo" | "Gate Open" | "Scheduled";
}

const departures: Flight[] = [
  {
    flight: "BX-402",
    aircraft: "Boeing 777F",
    route: "London Heathrow (LHR) → New York (JFK)",
    destCity: "USA",
    departure: "14:30 GMT",
    cutOff: "10:30 GMT (4h Prior)",
    status: "Boarding Cargo"
  },
  {
    flight: "BX-819",
    aircraft: "Boeing 747-8F",
    route: "London Heathrow (LHR) → Dubai (DWC)",
    destCity: "UAE",
    departure: "18:15 GMT",
    cutOff: "13:45 GMT",
    status: "Gate Open"
  },
  {
    flight: "BX-104",
    aircraft: "Airbus A350F",
    route: "London Stansted (STN) → Singapore (SIN)",
    destCity: "Singapore",
    departure: "22:00 GMT",
    cutOff: "17:00 GMT",
    status: "Scheduled"
  },
  {
    flight: "BX-621",
    aircraft: "Boeing 767-300F",
    route: "London Heathrow (LHR) → Chicago (ORD)",
    destCity: "USA",
    departure: "Tomorrow, 08:00",
    cutOff: "03:30 GMT",
    status: "Scheduled"
  }
];

export default function FlightDepartures() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 border-b border-slate-100">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 block font-semibold">
            LONDON HEATHROW AIR FREIGHT CORRIDOR
          </span>
          <h3 className="text-xl font-bold text-slate-950 mt-1">
            Active Scheduled Cargo Flights
          </h3>
        </div>
        <Link
          href="/air-freight"
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
        >
          <span>All Flight Operations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-mono uppercase text-slate-500">
              <th className="py-3.5 px-6 font-semibold">Flight</th>
              <th className="py-3.5 px-6 font-semibold">Route</th>
              <th className="py-3.5 px-6 font-semibold">Aircraft</th>
              <th className="py-3.5 px-6 font-semibold">Departure</th>
              <th className="py-3.5 px-6 font-semibold">Cargo Cut-Off</th>
              <th className="py-3.5 px-6 font-semibold text-right">Airside Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {departures.map((d) => (
              <tr key={d.flight} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-6 font-mono font-bold text-slate-900 text-sm">
                  {d.flight}
                </td>
                <td className="py-4 px-6">
                  <span className="font-semibold text-slate-900 block">{d.route}</span>
                  <span className="text-slate-400 font-mono text-[11px]">{d.destCity} Gateway</span>
                </td>
                <td className="py-4 px-6 text-slate-600 font-mono text-xs">
                  {d.aircraft}
                </td>
                <td className="py-4 px-6 font-mono font-medium text-slate-900">
                  {d.departure}
                </td>
                <td className="py-4 px-6 text-slate-500 font-mono text-[11px]">
                  {d.cutOff}
                </td>
                <td className="py-4 px-6 text-right">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                    d.status === "Boarding Cargo"
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : d.status === "Gate Open"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>{d.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 px-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
        <span>Tender cargo directly at Heathrow Airside Cargo Center up to 4 hours prior to departure.</span>
        <span className="font-mono text-slate-800 font-semibold">24/7 Flight Desk: +44 785 357 3182</span>
      </div>
    </div>
  );
}
