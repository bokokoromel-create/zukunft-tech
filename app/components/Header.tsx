"use client";

import { NAV_SECTIONS } from "../config/navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-b-brand bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="#"
          className="hover-link font-display text-2xl tracking-wide text-white hover:text-ocean"
          aria-label="ZUKUNFT TECH — Accueil"
        >
          ZUKUNFT TECH
        </Link>
        <nav
          className="flex items-center gap-7 text-sm font-semibold text-zinc-200"
          aria-label="Navigation principale"
        >
          {NAV_SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="hover-link transition-colors hover:text-white focus:text-ocean focus:outline-none"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hover-btn btn-cta radius-2xl inline-flex items-center justify-center px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-zinc-950 active:translate-y-0"
        >
          Nous contacter
        </Link>
      </div>
    </header>
  );
}
