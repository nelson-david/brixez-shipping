import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function WarehousingPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <p className="eyebrow">London Terminal • 45a Great North Way (NW4 1PT)</p>
        <h1>
          HMRC bonded storage at
          <br />
          commanding <em>scale.</em>
        </h1>
        <p className="page-lede">
          Our flagship 125,000 sq ft terminal at 45a Great North Way provides strategic London positioning, licensed by HMRC as an Authorised Type U Customs Warehouse for indefinite duty and import VAT suspension.
        </p>

        <div className="page-stats">
          <div>
            <b>125k</b>
            <span>sq ft bonded space</span>
          </div>
          <div>
            <b>14,000+</b>
            <span>VNA pallet slots</span>
          </div>
          <div>
            <b>16</b>
            <span>hydraulic dock bays</span>
          </div>
          <div>
            <b>Type U</b>
            <span>HMRC customs bond</span>
          </div>
        </div>
      </section>

      <section className="capabilities" style={{ paddingTop: "60px" }}>
        <div className="section-top">
          <p className="eyebrow">Terminal capabilities</p>
          <Link className="text-link" href="/quote">
            Reserve warehouse bays <Arrow />
          </Link>
        </div>

        <div className="capabilities-grid">
          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">01</span>
                <span className="cap-tag">Customs Suspension</span>
              </div>
              <h3>Duty &amp; VAT deferral</h3>
              <p>
                Authorised Type U Customs Warehouse allowing commercial freight to be stored without upfront payment of UK customs duties or 20% import VAT until domestic call-off.
              </p>
            </div>
            <div className="cap-specs">
              <span>Indefinite duty suspension</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">02</span>
                <span className="cap-tag">High-Density Racking</span>
              </div>
              <h3>14,000 VNA Pallet Positions</h3>
              <p>
                12.5m clear ceiling heights fitted with wire-guided narrow aisle reach trucks, laser-barcoded pallet slots, and live WMS inventory tracking.
              </p>
            </div>
            <div className="cap-specs">
              <span>Euro &amp; Standard UK formats</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">03</span>
                <span className="cap-tag">Container Turnaround</span>
              </div>
              <h3>16 Hydraulic Dock Bays</h3>
              <p>
                Engineered for rapid 20ft and 40ft container devanning, palletisation, sorting, and immediate cross-dock transshipment along the A1 / M1 corridor.
              </p>
            </div>
            <div className="cap-specs">
              <span>Turnaround: 45 min per 40ft</span>
              <Arrow />
            </div>
          </div>

          <div className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">04</span>
                <span className="cap-tag">Site Security</span>
              </div>
              <h3>Biometrics &amp; 24/7 CCTV</h3>
              <p>
                Dual-credential biometric turnstiles, 4K optical camera surveillance across all bays, and 24/7 Redcare dual-path intruder monitoring.
              </p>
            </div>
            <div className="cap-specs">
              <span>TAPA Class A security</span>
              <Arrow />
            </div>
          </div>
        </div>
      </section>

      <section className="dark-panel">
        <div>
          <p className="eyebrow">London Dispatch &amp; Intake</p>
          <h2>
            Schedule terminal
            <br />
            or <em>dock access.</em>
          </h2>
          <p>
            45a Great North Way, London, England, NW4 1PT • Telephone: +44 785 357 3182
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
          <p style={{ color: "#ffffff", fontSize: "15px", margin: 0, fontFamily: "var(--font-dm-mono)" }}>
            Gate 2 HGV intake active: 06:00 - 22:00 GMT
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
            <a href="tel:+447853573182" className="button blue-btn">
              Call Dispatch (+44 785 357 3182) <Arrow />
            </a>
            <Link href="/quote" className="button pale">
              Request Rate Tariff <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
