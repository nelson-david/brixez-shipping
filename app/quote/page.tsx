"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function Quote() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <Navbar />

      <section className="form-page">
        <p className="eyebrow">Request a movement tariff</p>
        <h1>
          Let&apos;s map
          <br />
          the <em>movement.</em>
        </h1>
        <p>
          A few details is all we need to start building the right flight route or allocating bonded warehouse capacity.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="two">
            <input required placeholder="Origin city / airport (e.g. London Heathrow)" />
            <input required placeholder="Destination city / terminal (e.g. New York JFK)" />
          </div>

          <div className="two">
            <select required defaultValue="">
              <option value="" disabled>
                Select required discipline
              </option>
              <option>Flight shipping (Air cargo priority)</option>
              <option>Bonded warehousing (London NW4 1PT)</option>
              <option>Dedicated aircraft charter (Boeing 777F)</option>
              <option>Customs brokerage &amp; CDS clearance</option>
            </select>
            <input required placeholder="Cargo volume (kg) or pallet count" />
          </div>

          <div className="two">
            <input required type="email" placeholder="Work email" />
            <input required placeholder="Contact telephone" />
          </div>

          <textarea placeholder="Cargo dimensions, commodity description, target ship date, or special handling notes..." />

          <button type="submit" className="button dark">
            {sent ? "Request submitted" : "Submit quote request"} <Arrow />
          </button>

          {sent && (
            <small>
              Your rate request has been sent to our commercial pricing team. A formal tariff schedule will be returned within 30 minutes.
            </small>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}
