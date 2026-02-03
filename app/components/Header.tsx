"use client";

import { useState, useCallback } from "react";
import { NAV_SECTIONS } from "../config/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-b-brand bg-zinc-950/90 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-14 min-h-[56px] max-w-6xl items-center justify-between gap-4 px-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#"
          onClick={closeMenu}
          className="hover-link font-display text-xl tracking-wide text-white hover:text-ocean sm:text-2xl"
          aria-label="ZUKUNFT TECH — Accueil"
        >
          ZUKUNFT TECH
        </Link>

        {/* Nav desktop */}
        <nav
          className="hidden items-center gap-6 text-sm font-semibold text-zinc-200 md:flex lg:gap-7"
          aria-label="Navigation principale"
        >
          {NAV_SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="hover-link min-h-[44px] items-center transition-colors hover:text-white focus:text-ocean focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-zinc-950 md:inline-flex"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="#contact"
          className="hover-btn btn-cta radius-2xl hidden min-h-[44px] items-center justify-center px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-zinc-950 active:translate-y-0 md:inline-flex"
        >
          Nous contacter
        </Link>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-zinc-200 transition-colors hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-zinc-950 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-mobile"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="nav-mobile"
        className={`border-t border-zinc-800 bg-zinc-950/98 backdrop-blur-xl transition-[max-height] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col px-4 pb-6 pt-2 pl-[max(1rem,env(safe-area-inset-left))]"
          aria-label="Navigation mobile"
        >
          {NAV_SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="hover-link min-h-[48px] flex items-center border-b border-zinc-800/80 text-base font-medium text-zinc-200 last:border-0 hover:text-white focus:text-ocean focus:outline-none"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={closeMenu}
            className="hover-btn btn-cta radius-2xl mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 px-5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-zinc-950 active:translate-y-0"
          >
            Nous contacter
          </Link>
        </nav>
      </div>
    </header>
  );
}
