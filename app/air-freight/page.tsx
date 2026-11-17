import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function AirFreightPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <p className="eyebrow">Aviation &amp; Airfreight • London Heathrow (LHR) &amp; Stansted (STN)</p>
        <h1>
          Flight shipping with
          <br />
          uncompromising <em>velocity.</em>
        </h1>
        <p className="page-lede">
          Scheduled widebody belly cargo, dedicated Boeing 777F freighter rotations, and priority Next-Flight-Out (NFO) air cargo departures with 4-hour tarmac tenders.
        </p>

        <div className="page-stats">
          <div>
            <b>4h</b>
            <span>apron tender cut-off</span>
          </div>
          <div>
            <b>B777F</b>
            <span>102T long-haul payload</span>
          </div>
          <div>
            <b>99.2%</b>
            <span>on-time flight arrival</span>
          </div>
          <div>
            <b>24/7</b>
            <span>AOG flight response</span>
          </div>
        </div>
      </section>

      <section className="capabilities" style={{ paddingTop: "60px" }}>
        <div className="section-top">
          <p className="eyebrow">Flight capabilities</p>
          <Link className="text-link" href="/quote">
            Book flight allocation <Arrow />
          </Link>
        </div>

        <div className="capabilities-grid">
          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">01</span>
                <span className="cap-tag">Priority NFO</span>
              </div>
              <h3>Next-Flight-Out priority</h3>
              <p>
                Guaranteed commercial boarding on the earliest departure from London Heathrow. Direct courier ramp handover and priority destination customs clearance.
              </p>
            </div>
            <div className="cap-specs">
              <span>12 - 24 hour global transit</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">02</span>
                <span className="cap-tag">Scheduled Cargo</span>
              </div>
              <h3>Scheduled consolidations</h3>
              <p>
                Fixed weekly block space allocations on premier transatlantic and Middle Eastern air lanes connecting London with JFK, DWC, and SIN.
              </p>
            </div>
            <div className="cap-specs">
              <span>Predictable commercial volume tariffs</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">03</span>
                <span className="cap-tag">Charter Operations</span>
              </div>
              <h3>Full aircraft charters</h3>
              <p>
                Boeing 777F, 747-8F, and Airbus A330F full freighter charters for oversized, heavy-lift, or high-volume industrial project cargo with tailored flight routings.
              </p>
            </div>
            <div className="cap-specs">
              <span>Direct apron supervision</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">04</span>
                <span className="cap-tag">Cold Chain</span>
              </div>
              <h3>GDP pharmaceutical airfreight</h3>
              <p>
                Active temperature-controlled ULD containers maintained strictly between +2°C to +8°C and -20°C for sensitive medical and pharmaceutical freight.
              </p>
            </div>
            <div className="cap-specs">
              <span>MHRA GDP compliant handling</span>
              <Arrow />
            </div>
          </div>
        </div>
      </section>

      <section className="dark-panel">
        <div>
          <p className="eyebrow">Flight Operations Desk</p>
          <h2>
            Book flight space
            <br />
            or <em>urgent charter.</em>
          </h2>
          <p>
            Direct communication with our Heathrow duty dispatch controllers.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
          <p style={{ color: "#ffffff", fontSize: "15px", margin: 0, fontFamily: "var(--font-dm-mono)" }}>
            Hotline: +44 785 357 3182 • Heathrow Apron Active
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
            <a href="tel:+447853573182" className="button blue-btn">
              Call Flight Desk <Arrow />
            </a>
            <Link href="/quote" className="button pale">
              Request Tariff <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
