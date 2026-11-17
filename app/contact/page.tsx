"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arrow = () => <span className="arrow">↗</span>;

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <Navbar />

      <section className="form-page">
        <p className="eyebrow">London Operations &amp; Dispatch</p>
        <h1>
          Let&apos;s start
          <br />
          with <em>hello.</em>
        </h1>
        <p>
          45a Great North Way, London, England, NW4 1PT • Telephone: +44 785 357 3182 • Email: dispatch@brixez.com
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="two">
            <input required placeholder="Your name" />
            <input required type="email" placeholder="Work email" />
          </div>

          <div className="two">
            <input required placeholder="Company name" />
            <input required placeholder="Telephone (+44 ...)" />
          </div>

          <textarea required placeholder="Tell us what needs to move, warehouse capacity needed, or flight requirements..." />

          <button type="submit" className="button dark">
            {sent ? "Message received" : "Send message"} <Arrow />
          </button>

          {sent && (
            <small>
              Your transmission has been assigned to London dispatch at 45a Great North Way. An operations controller will respond within 15 minutes.
            </small>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}
