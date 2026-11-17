"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function Home() {
  const [tracking, setTracking] = useState("");
  const [notice, setNotice] = useState("");

  const track = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tracking.trim()) {
      setNotice("Enter a shipment or airway bill reference.");
      return;
    }
    const q = tracking.trim().toUpperCase();
    if (q.includes("WH") || q.includes("LON") || q.includes("7710")) {
      setNotice(`Consignment ${q} held in Bonded Racking at 45a Great North Way (NW4 1PT) — cleared under HMRC Type U for immediate call-off.`);
    } else {
      setNotice(`Waybill ${q.startsWith("BRX") ? q : `BRX-${q}`} en route to New York JFK on Flight BX-402 — arriving as planned.`);
    }
  };

  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="eyebrow">
          Independent Freight <span>•</span> London · Heathrow · NW4 1PT
        </div>

        <div className="hero-grid">
          <div>
            <h1>
              Flight shipping.
              <br />
              Bonded <em>storage.</em>
            </h1>
            <p className="hero-copy">
              A dedicated logistics partner for trade that demands exact timing. We orchestrate daily air cargo departures from London Heathrow alongside 125,000 sq ft of HMRC-bonded warehousing at our London headquarters.
            </p>
            <div className="hero-actions">
              <Link href="/quote" className="button dark">
                Plan a movement <Arrow />
              </Link>
              <Link href="/about" className="text-link">
                Meet Brixez <Arrow />
              </Link>
            </div>
          </div>

          {/* TWEAKED HERO CARD (Distinct from Velvoxe's raw photo with tag) */}
          <div className="hero-card">
            <div>
              <div className="hero-card-tag">
                <span className="pulse" /> Live Heathrow Cargo Gateway
              </div>
              <h3>Scheduled Rotation BX-402</h3>
              <p>
                London Heathrow (LHR) → New York (JFK) via Boeing 777F freighter. Direct runway apron tender with 4-hour cargo cut-off.
              </p>
            </div>

            <div className="hero-card-meta">
              <div>
                <b>125,000 sq ft</b>
                <span>Bonded London Hub (NW4 1PT)</span>
              </div>
              <div>
                <b>HMRC Type U</b>
                <span>Duty &amp; VAT Deferral</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="hero-stats">
          <div>
            <b>125k</b>
            <span>sq ft bonded storage</span>
          </div>
          <div>
            <b>4h</b>
            <span>airside tender cut-off</span>
          </div>
          <div>
            <b>99.2%</b>
            <span>schedule fidelity</span>
          </div>
          <div>
            <b>24/7</b>
            <span>London dispatch support</span>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <p className="eyebrow">What we move</p>
        <div>
          <h2>
            Air cargo and storage
            <br />
            should feel like a <em>well-kept promise.</em>
          </h2>
          <p className="body-copy">
            From an emergency AOG aerospace component to thousands of pallets held under UK customs bond, we combine local operational command with global flight capacity. No black boxes. No passed-around problems.
          </p>
        </div>
      </section>

      {/* CAPABILITIES (TWEAKED 2-COLUMN ASYMMETRIC GRID INSTEAD OF 1-COL ROWS) */}
      <section className="capabilities">
        <div className="section-top">
          <p className="eyebrow">Core disciplines</p>
          <Link className="text-link" href="/services">
            View all services <Arrow />
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
                Priority airfreight, scheduled consolidations, and Boeing 777F charters departing London Heathrow and Stansted.
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
                <span className="cap-tag">London Terminal</span>
              </div>
              <h3>HMRC bonded warehousing</h3>
              <p>
                125,000 sq ft flagship storage facility at 45a Great North Way (NW4 1PT) with HMRC Type U duty and import VAT suspension.
              </p>
            </div>
            <div className="cap-specs">
              <span>14,000 pallet slots • 16 dock bays</span>
              <Arrow />
            </div>
          </Link>

          <Link href="/services" className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">03</span>
                <span className="cap-tag">Compliance</span>
              </div>
              <h3>Customs brokerage &amp; CDS</h3>
              <p>
                Direct electronic declarations to the UK Customs Declaration Service (CDS) for instant green routing and bonded discharges.
              </p>
            </div>
            <div className="cap-specs">
              <span>AEO-F accredited clearance</span>
              <Arrow />
            </div>
          </Link>

          <Link href="/contact" className="cap-card">
            <div>
              <div className="cap-head">
                <span className="cap-num">04</span>
                <span className="cap-tag">Time Critical</span>
              </div>
              <h3>Aerospace AOG &amp; rapid dispatch</h3>
              <p>
                24/7 dedicated dispatch desk responding to urgent aerospace emergencies with immediate collection and on-board couriers.
              </p>
            </div>
            <div className="cap-specs">
              <span>15-minute response desk</span>
              <Arrow />
            </div>
          </Link>
        </div>
      </section>

      {/* PROCESS SECTION */}
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

      {/* TRACKING RADAR PANEL */}
      <section className="dark-panel">
        <div>
          <p className="eyebrow">Consignment radar</p>
          <h2>
            Verify status
            <br />
            and <em>custody.</em>
          </h2>
          <p>
            Connected directly to airline airway bill systems and our London bonded warehouse management system (WMS).
          </p>
        </div>

        <div className="track-form">
          <form onSubmit={track}>
            <label htmlFor="track-number">Waybill or reference</label>
            <div>
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
            {notice && <small>{notice}</small>}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
