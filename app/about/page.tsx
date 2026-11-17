import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Plane, 
  Warehouse, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Page Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Building2 className="w-3.5 h-3.5" />
            <span>COMPANY PROFILE &amp; INFRASTRUCTURE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Brixez Logistics Ltd.
            <br />
            <span className="text-blue-600">Engineered for Velocity &amp; Custody.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Headquartered at 45a Great North Way, London (NW4 1PT). We combine dedicated commercial flight shipping capacity from London Heathrow with 125,000 sq ft of HMRC Type U bonded warehousing.
          </p>
        </div>
      </section>

      {/* THREE PILLARS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
            OPERATIONAL PILLARS
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
            The Brixez Operating Model
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Why enterprise importers, aerospace manufacturers, and high-velocity distributors choose Brixez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Warehouse className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950 font-display">Owned Asset Infrastructure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike asset-light digital brokers who re-broker your cargo multiple times, Brixez operates its own flagship London bonded warehouse at 45a Great North Way with 14,000 pallet slots and 16 dedicated dock levelers.
            </p>
            <div className="text-[11px] font-mono text-blue-600 pt-2 border-t border-slate-100 font-semibold">
              London Facility: NW4 1PT
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950 font-display">Priority Air Capacity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We maintain direct block space agreements with scheduled widebody carriers and operate emergency Boeing 777F freighters out of London Heathrow and Stansted for rapid transatlantic and global cargo tendering.
            </p>
            <div className="text-[11px] font-mono text-blue-600 pt-2 border-t border-slate-100 font-semibold">
              4-Hour Heathrow Airside Cut-off
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950 font-display">HMRC Regulatory Authority</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fully approved by HM Revenue &amp; Customs as an Authorised Type U Customs Warehousekeeper. We execute electronic CDS entries, defer import duty and VAT, and issue green customs routing in minutes.
            </p>
            <div className="text-[11px] font-mono text-blue-600 pt-2 border-t border-slate-100 font-semibold">
              HMRC Type U &amp; AEO-F Accredited
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS & REGULATORY RECOGNITIONS */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block">
              REGULATORY ACCREDITATIONS
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 mt-1 font-display">
              Certified Compliance Standards
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">AEO-F AUTHORISED</div>
              <div className="text-[11px] text-slate-500">Full Customs Simplifications &amp; Security</div>
              <span className="inline-block mt-1 text-[10px] text-emerald-600 font-semibold">GB AEOF 004928/22</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">HMRC TYPE U</div>
              <div className="text-[11px] text-slate-500">Customs Bonded Warehousekeeper</div>
              <span className="inline-block mt-1 text-[10px] text-blue-600 font-semibold">Ref: CW-GB-7710</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">IATA CARGO AGENT</div>
              <div className="text-[11px] text-slate-500">Regulated Air Cargo Endorsement</div>
              <span className="inline-block mt-1 text-[10px] text-slate-600 font-semibold">Code: 91-4-8831</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">BIFA MEMBER</div>
              <div className="text-[11px] text-slate-500">British International Freight Assoc.</div>
              <span className="inline-block mt-1 text-[10px] text-slate-600 font-semibold">Member # 4190</span>
            </div>
          </div>
        </div>
      </section>

      {/* LONDON HQ LOCATION DOSSIER */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase">
              LONDON HEADQUARTERS &amp; DISPATCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Stationed at 45a Great North Way, London (NW4 1PT)
            </h3>
            <p className="text-xs text-slate-400 max-w-xl font-mono">
              Located on the key arterial link between Central London, the M1 motorway corridor, and Heathrow Airport. 24/7 operational desk on site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-slate-400 block text-[11px]">PHYSICAL ADDRESS</span>
              <strong className="text-white block">45a Great North Way</strong>
              <span className="text-slate-400">London, England, NW4 1PT</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block text-[11px]">DIRECT TELEPHONE</span>
              <a href="tel:+447853573182" className="text-blue-400 font-bold hover:underline block">
                +44 785 357 3182
              </a>
              <span className="text-slate-400">24/7 Operations Desk</span>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block text-[11px]">DISPATCH EMAIL</span>
              <a href="mailto:dispatch@brixez.com" className="text-slate-200 hover:underline block">
                dispatch@brixez.com
              </a>
              <span className="text-slate-400">Airfreight &amp; Bonded Intake</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
