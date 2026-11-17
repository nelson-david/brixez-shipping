"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Plane, 
  Warehouse, 
  Ship, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Send 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RateEstimator from "../components/RateEstimator";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "flight",
    origin: "",
    destination: "",
    weightOrPallets: "",
    date: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Calculator className="w-3.5 h-3.5" />
            <span>COMMERCIAL TARIFF &amp; CAPACITY ESTIMATOR</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Request Freight &amp; Storage Tariffs.
            <br />
            <span className="text-blue-600">Fast Commercial Response.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Obtain fixed commercial rates for scheduled air cargo rotations ex-Heathrow or reserve bonded pallet racking at our 45a Great North Way terminal (NW4 1PT).
          </p>
        </div>
      </section>

      {/* Main Quote Calculator & Booking Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Estimator */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                INSTANT TARIFF BENCHMARK
              </span>
              <h2 className="text-xl font-bold text-slate-950 font-display mt-1">
                Live Rate Estimator
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Adjust parameters to calculate indicative commercial tariffs.
              </p>
            </div>

            <RateEstimator />

            <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2 text-xs font-mono">
              <div className="text-blue-400 font-bold uppercase text-[11px]">
                NEED DIRECT TARIFF CONFIRMATION?
              </div>
              <p className="text-slate-300">
                Large volumes, Boeing 777F charters, and 100+ pallet bonded storage qualify for negotiated corporate account rates.
              </p>
              <div className="pt-1">
                <a href="tel:+447853573182" className="text-white hover:text-blue-400 font-bold flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-blue-400" />
                  <span>Call Dispatcher: +44 785 357 3182</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Quote Transmission */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                  TRANSMIT OFFICIAL SPECIFICATIONS
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-display mt-1">
                  Book Allocation / Request Formal Tender
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our commercial team issues binding rate schedules within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-950 font-display">Tender Request Transmitted</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    A formalized airway tariff or bonded warehouse allocation sheet has been scheduled for your company. Our duty controller will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-semibold text-blue-600 hover:underline pt-2 inline-block"
                  >
                    Submit another quote request →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 block mb-1">YOUR FULL NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-1">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 block mb-1">CONTACT PHONE *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-1">PRIMARY SERVICE REQUIRED *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 font-sans text-xs"
                      >
                        <option value="flight">Flight Shipping (Air Cargo LHR / STN)</option>
                        <option value="bonded">HMRC Bonded Warehousing (NW4 1PT)</option>
                        <option value="charter">Dedicated Freighter Charter (B777F / B747)</option>
                        <option value="ocean">Ocean Container Freight (FCL / LCL)</option>
                        <option value="customs">UK CDS Customs Brokerage Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 block mb-1">ORIGIN CITY / AIRPORT *</label>
                      <input
                        type="text"
                        required
                        value={formData.origin}
                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                        placeholder="e.g. London Heathrow (LHR)"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-1">DESTINATION CITY / AIRPORT *</label>
                      <input
                        type="text"
                        required
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. New York (JFK)"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 block mb-1">GROSS WEIGHT (KG) OR PALLETS *</label>
                      <input
                        type="text"
                        required
                        value={formData.weightOrPallets}
                        onChange={(e) => setFormData({ ...formData, weightOrPallets: e.target.value })}
                        placeholder="e.g. 1,450 kg / 6 Pallets"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-1">TARGET SHIP DATE *</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Tariff Request to Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
