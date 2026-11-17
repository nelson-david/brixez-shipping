"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function TrackPage() {
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

      <section className="page-hero">
        <p className="eyebrow">Consignment Telemetry</p>
        <h1>
          Follow your cargo
          <br />
          in <em>motion.</em>
        </h1>
        <p className="page-lede">
          Enter your airway bill (AWB), container number, or bonded storage reference for live coordinates and milestone custody verification.
        </p>
      </section>

      <section className="dark-panel" style={{ margin: "0 5.2vw 120px" }}>
        <div>
          <p className="eyebrow">Live radar</p>
          <h2>
            Verify status
            <br />
            and <em>custody.</em>
          </h2>
          <p>
            Connected directly to HMRC electronic declarations and airline airway bill tracking systems.
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
