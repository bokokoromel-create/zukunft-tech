"use client";

import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { LEGAL_LINKS, NAV_SECTIONS } from "../config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glacier/20 bg-gradient-to-b from-white to-[#F8F5F0] pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-9">
          <div className="lg:col-span-2">
            <Link
              href="#"
              className="hover-link font-display text-xl tracking-normal text-foreground hover:text-glacier-dark"
            >
              ZUKUNFT TECH
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-600">
              Sites, apps, réseaux. Conçus. Sécurisés. Maintenus.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-600">
              <a
                href="mailto:contact@zukunft-tech.com"
                className="hover-link inline-flex min-h-[44px] items-center gap-2 hover:text-glacier-dark"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                contact@zukunft-tech.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-glacier-dark" aria-hidden />
                France
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-0">
              {NAV_SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="hover-link flex min-h-[44px] items-center text-sm text-zinc-600 hover:text-glacier-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Légal
            </h3>
            <ul className="mt-4 space-y-0">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="hover-link flex min-h-[44px] items-center text-sm text-zinc-600 hover:text-glacier-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-glacier/20 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-500">
            © {currentYear} ZUKUNFT TECH. Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-zinc-500 sm:mt-0">
            Services numériques B2B
          </p>
        </div>
      </div>
    </footer>
  );
}
