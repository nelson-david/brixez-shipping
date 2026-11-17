import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <span>OPERATIONAL TERMS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
            Standard Trading Conditions
          </h1>

          <p className="text-slate-600 text-sm leading-relaxed">
            All flight shipping, customs brokerage, and bonded storage operations conducted by Brixez Logistics Ltd are governed by British International Freight Association (BIFA) standard conditions and the Montreal Convention 1999.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-8 text-xs leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-950 font-display">1. Air Cargo Carriage &amp; Montreal Convention</h3>
            <p>
              International air freight is carried subject to the Montreal Convention 1999. Consignors must warrant that cargo tendered at London Heathrow or Stansted has been packed in compliance with IATA Dangerous Goods Regulations (DGR) where applicable.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-950 font-display">2. HMRC Bonded Warehouse Custody</h3>
            <p>
              Storage of cargo at 45a Great North Way (NW4 1PT) under HMRC Type U Customs Bond is subject to statutory compliance with the Taxation (Cross-border Trade) Act 2018. The depositor remains legally responsible for accurate valuation and commodity classification until duty is declared.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-950 font-display">3. Lien &amp; Right of Detention</h3>
            <p>
              Brixez Logistics Ltd reserves a general and particular possessory lien on all goods, documents, and consignments for all sums due to the company for freight, demurrage, storage, customs duties, and disbursements.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100 font-mono text-[11px] text-slate-500">
            <div>Jurisdiction: <strong className="text-slate-900">Courts of England and Wales</strong></div>
            <div>Registered Office: <strong className="text-slate-900">45a Great North Way, London, England, NW4 1PT</strong></div>
            <div>Company Phone: <strong className="text-slate-900">+44 785 357 3182</strong></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
