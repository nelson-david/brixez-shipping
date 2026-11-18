import Link from "next/link";
import BrixezLogo from "./BrixezLogo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link className="brand" href="/" style={{ color: "#ffffff", marginBottom: "14px" }}>
            <BrixezLogo size={27} inverted className="brand-icon" />
            <span className="brand-text">
              BRIX<span>EZ</span>
              <i />
            </span>
          </Link>
          <p style={{ maxWidth: "420px" }}>
            Flight cargo and HMRC-bonded warehousing.
            <br />
            Coordinated from London with exactness.
          </p>
        </div>

        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "14px", color: "#9cb3ce", fontFamily: "var(--font-dm-mono)" }}>
            45a Great North Way, London NW4 1PT
          </p>
          <a
            href="tel:+447853573182"
            style={{
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: "var(--font-dm-mono)",
              display: "inline-block",
              marginTop: "6px",
            }}
          >
            +44 785 357 3182
          </a>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <span>Capabilities</span>
          <Link href="/air-freight">Flight shipping</Link>
          <Link href="/warehousing">Bonded warehousing</Link>
          <Link href="/services">Scheduled cargo</Link>
          <Link href="/air-freight">Boeing 777F charters</Link>
        </div>

        <div>
          <span>Operations</span>
          <Link href="/warehousing">45a Great North Way</Link>
          <Link href="/air-freight">Heathrow Airside Gate</Link>
          <Link href="/track">Consignment telemetry</Link>
          <Link href="/quote">Request tariff quote</Link>
        </div>

        <div>
          <span>Governance</span>
          <Link href="/about">About Brixez</Link>
          <Link href="/contact">Operations desk</Link>
          <Link href="/privacy">Data privacy</Link>
          <Link href="/terms">Standard trading terms</Link>
        </div>
      </div>

      <div className="copyright">
        © 2026 Brixez Logistics Ltd. All rights reserved.
        <span>London · Heathrow · NW4 1PT</span>
      </div>
    </footer>
  );
}
