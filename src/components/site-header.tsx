"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/about#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`topbar${menuOpen ? " topbar-menu-open" : ""}`}>
      <div className="topbar-row">
        <Link
          className="brand-mark"
          href="/"
          aria-label="Go to top of page"
          onClick={() => setMenuOpen(false)}
        >SN</Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav-group">
        <nav
          id="primary-navigation"
          className="nav-links"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
