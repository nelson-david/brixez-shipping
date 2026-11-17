"use client";

import Link from "next/link";

const Arrow = () => <span className="arrow">↗</span>;

export default function Navbar() {
  return (
    <header className="nav">
      <div className="brand-wrapper">
        <Link className="brand" href="/">
          BRIX<span>EZ</span>
          <i />
        </Link>
        <span className="brand-badge hidden sm:inline-block">London NW4 1PT</span>
      </div>

      <nav>
        <Link href="/air-freight">Flight shipping</Link>
        <Link href="/warehousing">Bonded storage</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">Company</Link>
        <Link href="/track">Tracking</Link>
      </nav>

      <div className="nav-actions">
        <a href="tel:+447853573182" className="nav-phone hidden lg:inline-block">
          +44 785 357 3182
        </a>
        <Link className="nav-cta" href="/quote">
          Request quote <Arrow />
        </Link>
      </div>
    </header>
  );
}
