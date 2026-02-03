"use client";

import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { LEGAL_LINKS, NAV_SECTIONS } from "../config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-b-brand bg-zinc-950 bg-pattern-z pb-[env(safe-area-inset-bottom)]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-11 lg:grid-cols-4 lg:gap-9">
          <div className="lg:col-span-2">
            <Link
              href="#"
              className="hover-link font-display text-xl tracking-wide text-white hover:text-ocean"
            >
              ZUKUNFT TECH
            </Link>
            <p className="mt-3 max-w-sm text-sm text-zinc-300 leading-relaxed">
              Sites, apps, réseaux. Conçus. Sécurisés. Maintenus.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-300">
              <a
                href="mailto:contact@zukunft-tech.com"
                className="hover-link inline-flex min-h-[44px] items-center gap-2 hover:text-ocean"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                contact@zukunft-tech.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-ocean" aria-hidden />
                France
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-0">
              {NAV_SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="hover-link flex min-h-[44px] items-center text-sm text-zinc-300 hover:text-ocean"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Légal
            </h3>
            <ul className="mt-4 space-y-0">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="hover-link flex min-h-[44px] items-center text-sm text-zinc-300 hover:text-ocean"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-400">
            © {currentYear} ZUKUNFT TECH. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-zinc-400 sm:mt-0">
            Services numériques B2B
          </p>
        </div>
      </div>
    </footer>
  );
}
