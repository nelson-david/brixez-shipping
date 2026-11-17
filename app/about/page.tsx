import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <p className="eyebrow">Company &amp; Infrastructure</p>
        <h1>
          A logistics partner
          <br />
          built on <em>exactness.</em>
        </h1>
        <p className="page-lede">
          Brixez was founded on a straightforward premise: moving high-value trade should never feel like a gamble. We combine direct air cargo capacity out of Heathrow with 125,000 sq ft of HMRC-bonded storage at our London headquarters (45a Great North Way, NW4 1PT).
        </p>

        <div className="page-stats">
          <div>
            <b>45a</b>
            <span>Great North Way (NW4 1PT)</span>
          </div>
          <div>
            <b>125k</b>
            <span>sq ft bonded facility</span>
          </div>
          <div>
            <b>99.2%</b>
            <span>schedule fidelity</span>
          </div>
          <div>
            <b>24/7</b>
            <span>duty controller support</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">Our approach</p>
        <div>
          <h2>
            Quiet authority.
            <br />
            Absolute <em>transparency.</em>
          </h2>
          <p className="body-copy">
            We avoid unnecessary jargon and automated telephone trees. When you work with Brixez, you speak directly with experienced logistics controllers stationed at our London headquarters who monitor your flight cargo and warehouse inventory around the clock.
          </p>
        </div>
      </section>

      <section className="capabilities" style={{ paddingTop: "0" }}>
        <div className="section-top">
          <p className="eyebrow">Our foundations</p>
          <a href="tel:+447853573182" className="text-link">
            Call operations desk <Arrow />
          </a>
        </div>

        <div className="capabilities-grid">
          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">01</span>
                <span className="cap-tag">Direct Infrastructure</span>
              </div>
              <h3>Physical asset ownership</h3>
              <p>
                Unlike asset-light brokers, Brixez operates its own flagship London bonded warehouse at 45a Great North Way with 14,000 pallet slots and 16 dedicated dock levelers.
              </p>
            </div>
            <div className="cap-specs">
              <span>Direct custody &amp; security</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">02</span>
                <span className="cap-tag">Air Capacity</span>
              </div>
              <h3>Priority flight allocations</h3>
              <p>
                Direct block space agreements with scheduled widebody carriers out of London Heathrow, guaranteeing cargo space even during peak demand seasons.
              </p>
            </div>
            <div className="cap-specs">
              <span>Guaranteed capacity</span>
              <Arrow />
            </div>
          </div>
        </div>
      </section>

      <section className="dark-panel">
        <div>
          <p className="eyebrow">London Headquarters</p>
          <h2>
            Stationed in London.
            <br />
            Moving <em>globally.</em>
          </h2>
          <p>
            45a Great North Way, London, England, NW4 1PT • Telephone: +44 785 357 3182 • Email: dispatch@brixez.com
          </p>
        </div>

        <div>
          <Link href="/contact" className="button blue-btn">
            Connect with London dispatch <Arrow />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
