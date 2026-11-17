import Link from "next/link";
import { 
  Plane, 
  Warehouse, 
  Ship, 
  ShieldCheck, 
  Thermometer, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Phone 
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const servicesList = [
  {
    icon: Plane,
    code: "SVC-01",
    title: "Flight Shipping & Air Cargo",
    desc: "Scheduled widebody consolidations and dedicated Boeing 777F freighters departing London Heathrow (LHR) and Stansted (STN). 4-hour cut-off windows and apron handling.",
    link: "/air-freight",
    points: [
      "Next-Flight-Out (NFO) guaranteed boarding",
      "Fixed block space allocations (BSA) to JFK, DXB, SIN",
      "Regulated Agent (RA) certified security screening"
    ]
  },
  {
    icon: Warehouse,
    code: "SVC-02",
    title: "HMRC Bonded Warehousing",
    desc: "125,000 sq ft flagship facility at 45a Great North Way (NW4 1PT). Authorised Type U Customs Warehouse for indefinite UK import duty and VAT deferral.",
    link: "/warehousing",
    points: [
      "14,000 VNA narrow-aisle pallet positions",
      "16 hydraulic dock levelers for rapid container turnaround",
      "Direct A1 / M1 arterial junction connectivity"
    ]
  },
  {
    icon: ShieldCheck,
    code: "SVC-03",
    title: "Customs Brokerage & CDS Compliance",
    desc: "In-house customs specialists managing UK electronic declarations directly via the Customs Declaration Service (CDS) for instant green routing and duty optimization.",
    link: "/quote?service=customs",
    points: [
      "AEO-F accredited expedited customs clearance",
      "Bonded transfers under transit declarations (T1/NCTS)",
      "Tariff code classification and inward processing relief"
    ]
  },
  {
    icon: Zap,
    code: "SVC-04",
    title: "Aerospace & AOG Rapid Response",
    desc: "24/7 dedicated desk responding to critical Aircraft-on-Ground emergencies. Dedicated courier collection, ramp-side boarding, and rapid customs clearance.",
    link: "/contact",
    points: [
      "15-minute dispatch activation guarantee",
      "On-Board Courier (OBC) and dedicated air charters",
      "Global network of certified aerospace forwarders"
    ]
  },
  {
    icon: Thermometer,
    code: "SVC-05",
    title: "Pharmaceutical GDP Cold-Chain",
    desc: "Strictly monitored temperature-controlled air freight and bonded warehouse storage ranging from +2°C to +8°C, +15°C to +25°C, and deep-freeze -20°C.",
    link: "/warehousing",
    points: [
      "MHRA GDP compliant processes and active telemetry",
      "Envirotainer and passive thermal blanket packing",
      "Real-time calibrated temperature data loggers"
    ]
  },
  {
    icon: Ship,
    code: "SVC-06",
    title: "Ocean Freight & Multimodal Intermodal",
    desc: "Full container load (FCL) and less-than-container load (LCL) consolidation connecting Southampton, London Gateway, and Felixstowe with global deepsea ports.",
    link: "/quote?service=ocean",
    points: [
      "Weekly sailings with premier tier-1 ocean alliances",
      "Reefer, open-top, and flat-rack heavy lift equipment",
      "Direct haulage from UK ports to 45a Great North Way"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-20 bg-white border-b border-slate-200 bx-tech-grid">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <span>OPERATIONAL DISCIPLINES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display">
            Precision Logistics Capabilities.
            <br />
            <span className="text-blue-600">Flight Shipping, Storage &amp; Compliance.</span>
          </h1>

          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Delivering high-reliability commercial air cargo, bonded warehouse custody at 45a Great North Way (NW4 1PT), and direct UK customs clearance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.code}
                className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold">{svc.code}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950 font-display">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                      {svc.desc}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
                    {svc.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                  <Link
                    href={svc.link}
                    className="font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 font-mono"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OPERATIONS HOTLINE BANNER */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-display">Need custom freight routing or bonded storage allocation?</h3>
            <p className="text-xs text-slate-400 font-mono">
              Speak directly with our London operations team at 45a Great North Way, NW4 1PT.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+447853573182"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg font-mono transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+44 785 357 3182</span>
            </a>
            <Link
              href="/quote"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
            >
              Request Tariff
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
