import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <span>DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
            Privacy &amp; Consignment Data Policy
          </h1>

          <p className="text-slate-600 text-sm leading-relaxed">
            Brixez Logistics Ltd is committed to protecting trade data, airway bill manifests, and commercial consignment records in accordance with the UK GDPR and the Data Protection Act 2018.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-8 text-xs leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-950 font-display">1. Information We Collect</h3>
            <p>
              We process commercial consignor and consignee names, physical addresses, commercial invoices, commodity Harmonized System (HS) codes, and airway bill manifests strictly for international flight cargo clearance, aviation security screening, and bonded warehouse storage.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-950 font-display">2. Lawful Basis &amp; HMRC Regulatory Disclosures</h3>
            <p>
              Cargo manifests and bonded storage logs are transmitted securely to HM Revenue &amp; Customs (CDS) and the UK Civil Aviation Authority (CAA) in accordance with statutory border requirements. Trade telemetry is never monetized or distributed to unauthorized third parties.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-950 font-display">3. Retention &amp; Physical Security</h3>
            <p>
              Consignment telemetry and biometric access records at our 45a Great North Way terminal are retained under encrypted storage and protected under TAPA Class A security guidelines.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-500">
            <div>Data Protection Officer: <strong className="text-slate-900">Brixez Logistics Ltd</strong></div>
            <div>Physical Terminal: <strong className="text-slate-900">45a Great North Way, London, NW4 1PT</strong></div>
            <div>Email: <a href="mailto:dispatch@brixez.com" className="text-blue-600 hover:underline">dispatch@brixez.com</a></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
