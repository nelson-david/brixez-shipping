"use client";

import Link from "next/link";

const Arrow = () => <span className="arrow">↗</span>;

export default function Navbar() {
  return (
    <header className="nav">
      <Link className="brand" href="/">
        BRIX<span>EZ</span>
        <i />
      </Link>
      <nav>
        <Link href="/air-freight">Flight shipping</Link>
        <Link href="/warehousing">Warehousing</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">Company</Link>
        <Link href="/track">Tracking</Link>
      </nav>
      <Link className="nav-cta" href="/quote">
        Request a quote <Arrow />
      </Link>
    </header>
  );
}
