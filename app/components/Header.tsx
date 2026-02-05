"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_SECTIONS } from "../config/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-b-brand bg-white/90 backdrop-blur-xl shadow-sm pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-14 min-h-[56px] max-w-6xl items-center justify-between gap-4 px-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="hover-link font-display text-xl tracking-normal text-foreground hover:text-glacier-dark sm:text-2xl"
          aria-label="ZUKUNFT TECH — Accueil"
        >
          ZUKUNFT TECH
        </Link>

        <nav className="hidden items-center gap-1 sm:flex lg:gap-2" aria-label="Navigation principale">
          {NAV_SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="hover-link min-h-[44px] px-3 py-2 text-sm font-medium text-foreground hover:text-glacier-dark focus:outline-none lg:px-4"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#contact"
            className="hover-btn btn-cta radius-2xl inline-flex min-h-[40px] items-center justify-center whitespace-nowrap px-4 py-2 text-[0.8rem] font-semibold tracking-wide text-white shadow-md focus:outline-none focus:ring-2 focus:ring-glacier focus:ring-offset-2 focus:ring-offset-white active:translate-y-0 sm:min-h-[44px] sm:px-5 sm:text-xs"
          >
            Contactez-nous
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-foreground hover:bg-glacier/10 hover:text-glacier-dark focus:outline-none focus:ring-2 focus:ring-glacier/30 sm:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out sm:hidden ${mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!mobileOpen}
      >
        <div className="min-h-0">
          <nav
            className="border-t border-glacier/20 bg-white/95 backdrop-blur-xl px-4 pb-4 pt-2"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col gap-0">
              {NAV_SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className="hover-link flex min-h-[48px] items-center border-b border-glacier/10 py-3 text-base font-medium text-foreground hover:text-glacier-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="hover-btn btn-cta radius-2xl mt-4 flex min-h-[48px] w-full items-center justify-center text-sm font-semibold text-white shadow-md"
            >
              Contactez-nous
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
