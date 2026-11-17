"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function Home() {
  const [tracking, setTracking] = useState("BRX-9482-GB");
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setSubStatus("success");
    }
  };

  const [telemetry, setTelemetry] = useState({
    code: "BRX-9482-GB",
    sector: "London Heathrow (LHR) → New York (JFK)",
    carrier: "Flight BX-402 (Boeing 777F)",
    status: "Airborne — Transatlantic Sector",
    eta: "Today, 18:45 EST",
    custody: "Heathrow Cargo Apron Stand 14",
    compliance: "UK CDS Green Channel Export Clearance"
  });

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const q = tracking.trim().toUpperCase();
    if (!q) return;

    if (q.includes("WH") || q.includes("LON") || q.includes("7710")) {
      setTelemetry({
        code: q.includes("LON") ? q : "LON-WH-7710",
        sector: "Rotterdam Europort → London Terminal",
        carrier: "Dedicated Articulated Inbound Unit",
        status: "Held in Bonded Racking — Duty Suspended",
        eta: "In Facility (Available for Call-Off)",
        custody: "45a Great North Way (Aisle 4, Bay 14)",
        compliance: "HMRC Type U Customs Warehouse (Ref: CW-GB-7710)"
      });
    } else {
      setTelemetry({
        code: q.startsWith("BRX") ? q : `BRX-${q}`,
        sector: "London Heathrow (LHR) → New York (JFK)",
        carrier: "Flight BX-402 (Boeing 777F)",
        status: "Airborne — Transatlantic Sector",
        eta: "Today, 18:45 EST",
        custody: "Heathrow Cargo Apron Stand 14",
        compliance: "UK CDS Green Channel Export Clearance"
      });
    }
  };

  return (
    <main>
      <Navbar />

      {/* SHAPESHIFTED HERO: FULL-WIDTH COMMAND HEADLINE + DUAL OPERATIONS BLOCK */}
      <section className="hero">
        <div className="hero-header">
          <div className="eyebrow">
            London Dispatch <span>•</span> 45a Great North Way (NW4 1PT) <span>•</span> Heathrow Air Cargo
          </div>
          <h1>
            Flight cargo &amp; bonded storage,
            <br />
            engineered with <em>exactness.</em>
          </h1>
        </div>

        <div className="hero-body-grid">
          <div>
            <p className="hero-copy">
              A specialized logistics partner for commercial airfreight and HMRC customs-bonded warehousing. We coordinate high-velocity scheduled flight departures from London Heathrow alongside 125,000 sq ft of high-density storage at our London headquarters.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="button dark">
                Plan a movement <Arrow />
              </Link>
              <Link href="/about" className="text-link">
                Meet Brixez <Arrow />
              </Link>
              <a
                href="tel:+447853573182"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "12px",
                  color: "var(--ink)",
                  fontWeight: 500
                }}
              >
                +44 785 357 3182
              </a>
            </div>
          </div>

          <div className="hero-dual-block">
            {/* Block 1: Flight Corridor with Image */}
            <div className="hero-mini-card">
              <div>
                <div
                  className="mini-card-photo"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80")',
                  }}
                >
                  <div className="mini-card-photo-tag">
                    <span className="pulse" /> Heathrow Apron (TW6)
                  </div>
                </div>
                <h3>Heathrow Air Cargo (LHR)</h3>
                <p>
                  Direct runway apron tenders on scheduled widebody rotations to JFK, DWC, and SIN with 4-hour cut-off windows.
                </p>
              </div>
              <div className="mini-card-specs">
                <span>Flight BX-402 • B777F</span>
                <span style={{ color: "var(--accent)" }}>4h Cut-off</span>
              </div>
            </div>

            {/* Block 2: London Bonded Hub with Image */}
            <div className="hero-mini-card">
              <div>
                <div
                  className="mini-card-photo"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80")',
                  }}
                >
                  <div className="mini-card-photo-tag">
                    <span className="pulse" /> 45a Great North Way (NW4)
                  </div>
                </div>
                <h3>London Terminal (NW4 1PT)</h3>
                <p>
                  125,000 sq ft high-bay warehouse at 45a Great North Way. Complete UK customs duty and import VAT suspension.
                </p>
              </div>
              <div className="mini-card-specs">
                <span>14,000 VNA Pallet Slots</span>
                <span style={{ color: "var(--accent)" }}>16 Docks</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARCHITECTURAL METRICS STRIP */}
        <div className="hero-stats">
          <div>
            <b>125k</b>
            <span>sq ft bonded London storage</span>
          </div>
          <div>
            <b>4h</b>
            <span>Heathrow apron tender cut-off</span>
          </div>
          <div>
            <b>99.2%</b>
            <span>scheduled flight fidelity</span>
          </div>
          <div>
            <b>24/7</b>
            <span>London operations desk</span>
          </div>
        </div>
      </section>

      {/* SHAPESHIFTED INTRO: 50/50 EDITORIAL SPLIT */}
      <section className="intro">
        <div>
          <p className="eyebrow">Operating philosophy</p>
          <h2>
            Air cargo and custody
            <br />
            should feel like a <em>well-kept promise.</em>
          </h2>
        </div>

        <div className="intro-right">
          <p className="body-copy">
            From an emergency AOG aerospace component needing same-day flight boarding to thousands of pallets held under UK customs bond, we combine local operational authority with direct flight capacity. No black boxes. No passed-around problems.
          </p>

          <div className="intro-features">
            <div className="intro-feature">
              <b>Owned Physical Custody</b>
              <span>Directly operating 45a Great North Way with biometric security and narrow-aisle racking.</span>
            </div>
            <div className="intro-feature">
              <b>Priority Flight Allocations</b>
              <span>Fixed weekly block space allocations on major cargo rotations ex-Heathrow and Stansted.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET VISUAL SHOWCASE: CINEMATIC IMAGERY STRIP */}
      <section className="asset-showcase">
        <div className="asset-showcase-grid">
          {/* Visual Card 1: Air Cargo Aviation */}
          <div className="asset-photo-card">
            <div
              className="asset-photo"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1524592714635-d77511a4834d?auto=format&fit=crop&w=1200&q=80")',
              }}
            >
              <div className="asset-photo-badge">
                HEATHROW AIRSIDE T4 • 4-HOUR CARGO TENDER
              </div>
            </div>
            <div className="asset-card-details">
              <div>
                <h4>Scheduled Cargo Flight Infrastructure</h4>
                <p>
                  Direct runway apron access, Regulated Agent screening, and scheduled transatlantic freighter bridges.
                </p>
              </div>
              <Link href="/air-freight" className="text-link" style={{ whiteSpace: "nowrap" }}>
                Flight operations <Arrow />
              </Link>
            </div>
          </div>

          {/* Visual Card 2: London Bonded Hub */}
          <div className="asset-photo-card">
            <div
              className="asset-photo"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80")',
              }}
            >
              <div className="asset-photo-badge">
                45A GREAT NORTH WAY (NW4 1PT) • HMRC TYPE U
              </div>
            </div>
            <div className="asset-card-details">
              <div>
                <h4>125,000 sq ft London Storage Terminal</h4>
                <p>
                  14,000 VNA narrow-aisle pallet slots and 16 hydraulic docks with indefinite import duty and VAT deferral.
                </p>
              </div>
              <Link href="/warehousing" className="text-link" style={{ whiteSpace: "nowrap" }}>
                Terminal specs <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPESHIFTED CAPABILITIES: 2 LARGE PRIMARY + 3 SECONDARY */}
      <section className="capabilities">
        <div className="section-top">
          <p className="eyebrow">Operational disciplines</p>
          <Link className="text-link" href="/services">
            View all capabilities <Arrow />
          </Link>
        </div>

        {/* Row 1: The Two Core Request Services */}
        <div className="capabilities-primary">
          <Link href="/air-freight" className="cap-card-large">
            <div>
              <div className="cap-head">
                <span className="cap-num">01</span>
                <span className="cap-tag">Air Logistics</span>
              </div>
              <h3>Commercial flight shipping &amp; airfreight</h3>
              <p>
                Priority scheduled widebody consolidations, dedicated Boeing 777F freighter rotations, and emergency Next-Flight-Out (NFO) air cargo departures directly from London Heathrow.
              </p>
            </div>
            <div className="cap-specs">
              <span>Next-Flight-Out (NFO) &amp; full freighter charters</span>
              <Arrow />
            </div>
          </Link>

          <Link href="/warehousing" className="cap-card-large">
            <div>
              <div className="cap-head">
                <span className="cap-num">02</span>
                <span className="cap-tag">London Terminal</span>
              </div>
              <h3>HMRC Type U bonded warehousing</h3>
              <p>
                Flagship 125,000 sq ft logistics facility at 45a Great North Way, London (NW4 1PT). Authorised by HMRC for indefinite customs duty and import VAT suspension.
              </p>
            </div>
            <div className="cap-specs">
              <span>14,000 VNA slots • 16 hydraulic dock bays</span>
              <Arrow />
            </div>
          </Link>
        </div>

        {/* Row 2: Three Complementary Disciplines */}
        <div className="capabilities-secondary">
          <div className="cap-card-small">
            <div>
              <span className="cap-num" style={{ display: "block", marginBottom: "10px" }}>03</span>
              <h3>Customs CDS clearance</h3>
              <p>
                Direct electronic declaration filing via the Customs Declaration Service for instant green-channel routing.
              </p>
            </div>
            <span style={{ fontSize: "11px", fontFamily: "var(--font-dm-mono)", color: "var(--accent)" }}>
              AEO-F accredited clearance
            </span>
          </div>

          <div className="cap-card-small">
            <div>
              <span className="cap-num" style={{ display: "block", marginBottom: "10px" }}>04</span>
              <h3>Aerospace AOG rapid dispatch</h3>
              <p>
                24/7 emergency response for grounded aircraft, medical avionics, and high-value manufacturing parts.
              </p>
            </div>
            <span style={{ fontSize: "11px", fontFamily: "var(--font-dm-mono)", color: "var(--accent)" }}>
              15-min dispatch activation
            </span>
          </div>

          <div className="cap-card-small">
            <div>
              <span className="cap-num" style={{ display: "block", marginBottom: "10px" }}>05</span>
              <h3>GDP pharmaceutical cold chain</h3>
              <p>
                Strictly monitored temperature-controlled air freight and bonded warehouse storage (+2°C to +8°C and -20°C).
              </p>
            </div>
            <span style={{ fontSize: "11px", fontFamily: "var(--font-dm-mono)", color: "var(--accent)" }}>
              Calibrated telemetry logs
            </span>
          </div>
        </div>
      </section>

      {/* SHAPESHIFTED METHOD / PROCESS */}
      <section className="process">
        <div>
          <p className="eyebrow">Our method</p>
          <h2 style={{ marginTop: "12px" }}>
            Speed without
            <br />
            the <em>panic.</em>
          </h2>
        </div>

        <div className="steps-list">
          <div className="step-card">
            <span>01 / INTAKE</span>
            <h3>Intake &amp; security</h3>
            <p>Direct collection from your dock or receipt at our 45a Great North Way terminal for x-ray screening.</p>
          </div>

          <div className="step-card">
            <span>02 / FLIGHT</span>
            <h3>Apron tender</h3>
            <p>Direct Heathrow airside delivery within 4 hours of wheels-up, bypassing commercial congestion.</p>
          </div>

          <div className="step-card">
            <span>03 / CUSTODY</span>
            <h3>Bonded custody</h3>
            <p>Indefinite duty and import VAT deferral under HMRC Type U bond for domestic call-off or re-export.</p>
          </div>

          <div className="step-card">
            <span>04 / RELEASE</span>
            <h3>Final dispatch</h3>
            <p>Immediate green-routing clearance and dedicated tail-lift haulage to the recipient door.</p>
          </div>
        </div>
      </section>

      {/* SHAPESHIFTED RADAR DISPATCH (SEARCH ON LEFT, TELEMETRY MONITOR ON RIGHT) */}
      <section className="dark-panel">
        <div className="track-form-box">
          <div>
            <p className="eyebrow">Consignment Telemetry</p>
            <h2>
              Verify status
              <br />
              and <em>custody.</em>
            </h2>
            <p>
              Connected directly to airline airway bill systems and our London bonded warehouse management system (WMS).
            </p>
          </div>

          <form onSubmit={handleTrack}>
            <label htmlFor="track-number">Waybill or Bonded Reference</label>
            <div className="track-input-line">
              <input
                id="track-number"
                type="text"
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
                placeholder="e.g. BRX-9482-GB or LON-WH-7710"
                autoComplete="off"
              />
              <button type="submit" aria-label="Track consignment">
                <Arrow />
              </button>
            </div>
          </form>

          <div className="track-presets">
            <span>Sample waybills:</span>
            <button
              type="button"
              className="track-preset-btn"
              onClick={() => {
                setTracking("BRX-9482-GB");
                setTelemetry({
                  code: "BRX-9482-GB",
                  sector: "London Heathrow (LHR) → New York (JFK)",
                  carrier: "Flight BX-402 (Boeing 777F)",
                  status: "Airborne — Transatlantic Sector",
                  eta: "Today, 18:45 EST",
                  custody: "Heathrow Cargo Apron Stand 14",
                  compliance: "UK CDS Green Channel Export Clearance"
                });
              }}
            >
              BRX-9482-GB (Air Cargo)
            </button>
            <button
              type="button"
              className="track-preset-btn"
              onClick={() => {
                setTracking("LON-WH-7710");
                setTelemetry({
                  code: "LON-WH-7710",
                  sector: "Rotterdam Europort → London Terminal",
                  carrier: "Dedicated Articulated Inbound Unit",
                  status: "Held in Bonded Racking — Duty Suspended",
                  eta: "In Facility (Available for Call-Off)",
                  custody: "45a Great North Way (Aisle 4, Bay 14)",
                  compliance: "HMRC Type U Customs Warehouse (Ref: CW-GB-7710)"
                });
              }}
            >
              LON-WH-7710 (Bonded Pallet)
            </button>
          </div>
        </div>

        {/* Live Telemetry Display Card */}
        <div className="radar-telemetry-box">
          <div className="telemetry-row">
            <span>WAYBILL REF</span>
            <b style={{ color: "var(--accent)" }}>{telemetry.code}</b>
          </div>
          <div className="telemetry-row">
            <span>TRANSIT SECTOR</span>
            <b>{telemetry.sector}</b>
          </div>
          <div className="telemetry-row">
            <span>PAYLOAD CARRIER</span>
            <b>{telemetry.carrier}</b>
          </div>
          <div className="telemetry-row">
            <span>CURRENT STATUS</span>
            <b style={{ color: "#38bdf8" }}>{telemetry.status}</b>
          </div>
          <div className="telemetry-row">
            <span>ESTIMATED ARRIVAL</span>
            <b>{telemetry.eta}</b>
          </div>
          <div className="telemetry-row">
            <span>LOCATION / STAND</span>
            <b>{telemetry.custody}</b>
          </div>
          <div className="telemetry-row">
            <span>CUSTOMS COMPLIANCE</span>
            <b style={{ color: "#4ade80" }}>{telemetry.compliance}</b>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER SUBSCRIBE / DISPATCH CIRCULAR */}
      <section className="subscribe-strip">
        <div className="subscribe-content">
          <div className="eyebrow">
            Brixez Dispatch Circular <span>•</span> Heathrow &amp; London NW4
          </div>
          <h2>
            Subscribe to flight manifests &amp; customs circulars.
          </h2>
          <p>
            Weekly operational intelligence on transatlantic air cargo capacity, Heathrow stand allocations, and HMRC bonded warehouse regulatory updates.
          </p>
        </div>

        <div className="subscribe-form-wrap">
          {subStatus === "success" ? (
            <div className="subscribe-success">
              <b>✓ Subscribed to Brixez Dispatch Circular</b>
              <span>Operational bulletins will be dispatched to {subEmail}.</span>
            </div>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <div className="subscribe-input-group">
                <input
                  type="email"
                  className="subscribe-input"
                  placeholder="Enter corporate email address"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe <Arrow />
                </button>
              </div>
              <div className="subscribe-meta">
                <span>Direct dispatch from London NW4</span>
                <span>UK GDPR compliant • Zero spam</span>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
