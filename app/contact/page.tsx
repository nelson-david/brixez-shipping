"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Plane 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "air",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Page Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>LONDON OPERATIONS DESK • NW4 1PT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Contact London Operations.
            <br />
            <span className="text-blue-600">Direct Flight &amp; Terminal Dispatch.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Reach our duty controllers for urgent air freight bookings out of Heathrow or bonded storage reservations at 45a Great North Way (NW4 1PT).
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & HGV Gate */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                HEADQUARTERS &amp; TERMINAL
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">45a Great North Way</strong>
                    <span className="text-slate-600">London, England, NW4 1PT</span>
                    <span className="text-slate-400 block text-[11px] mt-0.5">United Kingdom</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">24/7 OPERATIONS TELEPHONE</span>
                    <a href="tel:+447853573182" className="text-blue-600 font-bold text-sm hover:underline block">
                      +44 785 357 3182
                    </a>
                    <span className="text-slate-400 text-[11px]">Direct line to London Dispatch</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">CENTRAL DISPATCH EMAIL</span>
                    <a href="mailto:dispatch@brixez.com" className="text-slate-900 font-bold text-sm hover:underline block">
                      dispatch@brixez.com
                    </a>
                    <span className="text-slate-400 text-[11px]">Monitored continuously 24/7/365</span>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-mono text-slate-700 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>OPERATING WINDOWS</span>
                </div>
                <div className="font-mono text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Flight Cargo Tender (LHR):</span>
                    <strong className="text-slate-900">24/7 Continuous</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>London Bonded Inbound Docks:</span>
                    <strong className="text-slate-900">06:00 - 22:00 GMT</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Customs CDS Clearance:</span>
                    <strong className="text-slate-900">24/7 Electronic Link</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* HGV Intake Directions */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>HGV &amp; HAULIER ARRIVAL INSTRUCTIONS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Access via Great North Way (A1) southbound carriageway. All 40ft articulators must check in at Gatehouse Security (Gate 2) with reference booking code.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1">
                Security clearance radio frequency: VHF Ch. 14
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                  TRANSMIT CARGO REQUIREMENTS
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-display mt-1">
                  Direct Dispatch Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Transmissions are routed directly to the London on-duty controller.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-950 font-display">Transmission Received</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your request has been assigned to duty dispatch at 45a Great North Way. An operations specialist will contact you directly within 15 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-semibold text-blue-600 hover:underline pt-2 inline-block"
                  >
                    Submit another transmission →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 block mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Captain David Davies"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-1">COMPANY NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aero Global Ltd"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 block mb-1">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-1">CONTACT TELEPHONE *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">SERVICE OF INTEREST *</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 font-sans text-xs"
                    >
                      <option value="air">Flight Shipping &amp; Air Cargo (London Heathrow / Stansted)</option>
                      <option value="bonded">HMRC Bonded Warehousing (45a Great North Way, NW4 1PT)</option>
                      <option value="charter">Dedicated Aircraft Charter (Boeing 777F / 747-8F)</option>
                      <option value="customs">UK CDS Customs Brokerage &amp; Duty Management</option>
                      <option value="multimodal">Ocean Freight &amp; Multimodal Container Haulage</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-600 block mb-1">CARGO SPECIFICATIONS / DETAILS *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify dimensions, total weight (kg), number of pallets, commodity type, target departure date, or bonded storage requirements..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 font-sans text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit to London Dispatch</span>
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
