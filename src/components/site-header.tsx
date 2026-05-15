"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/moves", label: "Moves" },
  { href: "/submit", label: "Submit" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          CRUXENIO
        </Link>
        <nav className="nav-links hidden md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/moves" className="text-sm font-semibold text-white/80" onClick={() => setOpen(false)}>
            Moves
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
            aria-expanded={open}
            aria-controls="cruxenio-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="cruxenio-mobile-nav"
          className="shell flex flex-col gap-3 border-t border-white/10 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-lg text-white/90" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
