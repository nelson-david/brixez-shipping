import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <p className="eyebrow">How we move</p>
        <h1>
          The right mode.
          <br />
          The right <em>moment.</em>
        </h1>
        <p className="page-lede">
          Logistics designed with exactness. We combine commercial flight capacity out of London Heathrow with 125,000 sq ft of HMRC-bonded warehousing at 45a Great North Way (NW4 1PT).
        </p>

        <div className="page-stats">
          <div>
            <b>LHR / STN</b>
            <span>priority flight gateways</span>
          </div>
          <div>
            <b>125k</b>
            <span>sq ft London bonded hub</span>
          </div>
          <div>
            <b>Type U</b>
            <span>HMRC customs bond</span>
          </div>
          <div>
            <b>24/7</b>
            <span>dispatch desk support</span>
          </div>
        </div>
      </section>

      <section className="capabilities" style={{ paddingTop: "60px" }}>
        <div className="section-top">
          <p className="eyebrow">Operational disciplines</p>
          <Link className="text-link" href="/quote">
            Request movement tariff <Arrow />
          </Link>
        </div>

        <div className="capabilities-grid">
          <Link href="/air-freight" className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">01</span>
                <span className="cap-tag">Air Logistics</span>
              </div>
              <h3>Flight shipping &amp; air cargo</h3>
              <p>
                Priority airfreight, scheduled consolidations, and emergency charters departing London Heathrow and Stansted.
              </p>
            </div>
            <div className="cap-specs">
              <span>Next-Flight-Out (NFO) &amp; scheduled lines</span>
              <Arrow />
            </div>
          </Link>

          <Link href="/warehousing" className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">02</span>
                <span className="cap-tag">London Hub</span>
              </div>
              <h3>HMRC bonded warehousing</h3>
              <p>
                125,000 sq ft customs-bonded terminal at 45a Great North Way (NW4 1PT) providing indefinite duty and VAT deferral.
              </p>
            </div>
            <div className="cap-specs">
              <span>14,000 pallet slots • 16 dock bays</span>
              <Arrow />
            </div>
          </Link>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">03</span>
                <span className="cap-tag">Compliance</span>
              </div>
              <h3>Customs brokerage &amp; CDS</h3>
              <p>
                In-house electronic filing directly to HM Revenue &amp; Customs for rapid green-channel releases and inward processing relief.
              </p>
            </div>
            <div className="cap-specs">
              <span>AEO-F customs accredited</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">04</span>
                <span className="cap-tag">Time Critical</span>
              </div>
              <h3>Aerospace AOG &amp; rapid dispatch</h3>
              <p>
                15-minute response desk for critical aircraft-on-ground emergencies with dedicated couriers and chartered aircraft.
              </p>
            </div>
            <div className="cap-specs">
              <span>24/7 emergency dispatch</span>
              <Arrow />
            </div>
          </div>
        </div>
      </section>

      <section className="dark-panel">
        <div>
          <p className="eyebrow">Tariff Quote</p>
          <h2>
            Plan a movement
            <br />
            or <em>reserve storage.</em>
          </h2>
          <p>
            Tell us what needs to move and our London team will construct the optimal route and tariff.
          </p>
        </div>

        <div>
          <Link href="/quote" className="button blue-btn">
            Request a movement tariff <Arrow />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
