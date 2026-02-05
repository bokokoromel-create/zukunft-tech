"use client";

import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";

const packs = [
  {
    id: "startup",
    name: "Pack Start-up",
    price: "À partir de 499€ / mois",
    description: "Site en ligne. Réseau en place. Vous pouvez grandir.",
    features: [
      "Site web professionnel",
      "Configuration réseau de base",
      "Hébergement inclus",
      "Support par email",
    ],
    cta: "Demander un devis",
    highlighted: false,
    gradient: "from-glacier/80 to-glacier-dark/80",
  },
  {
    id: "entreprise",
    name: "Pack Entreprise",
    price: "À partir de 1 299€ / mois",
    description: "Site + app + audit. Vous êtes couverts.",
    features: [
      "Site web professionnel",
      "Application mobile",
      "Audit cybersécurité",
      "Hébergement & maintenance",
      "Support prioritaire",
    ],
    cta: "Choisir ce pack",
    highlighted: true,
    gradient: "from-glacier to-peach",
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: "Sur devis",
    description: "Tout est fait. Réseau, sécurité, formation. Vous pilotez.",
    features: [
      "Site web sur mesure",
      "Application mobile",
      "Infrastructure réseau complète",
      "Cybersécurité (audit + protection)",
      "Formation équipes",
      "Support dédié & SLA",
    ],
    cta: "Nous contacter",
    highlighted: false,
    gradient: "from-peach/80 to-peach-dark/80",
  },
];

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function PricingCatalogueSection() {
  return (
    <section
      id="tarifs"
      className="relative scroll-mt-20 border-t border-glacier/20 bg-gradient-to-b from-white via-[#FEFDFB] to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-section text-title-gradient">
            Des offres claires et adaptées.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-600">
            Investissez dans la sérénité et la croissance.
          </p>
        </motion.div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {packs.map((pack) => (
            <motion.article
              key={pack.id}
              variants={cardReveal}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 ${
                pack.highlighted
                  ? "border-2 border-glacier shadow-lg shadow-glacier/20 bg-gradient-to-br from-glacier/5 to-peach/5 backdrop-blur-xl lg:scale-[1.02]"
                  : "border border-glacier/20 bg-white/90 backdrop-blur-xl hover:border-glacier/40 hover:shadow-md"
              }`}
            >
              <h3 className={`text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl`}>
                {pack.name}
              </h3>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-glacier-dark sm:text-4xl">
                {pack.price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {pack.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pack.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-zinc-700"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-glacier-dark"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white sm:w-auto ${
                  pack.highlighted
                    ? "btn-cta text-white shadow-md focus:ring-glacier"
                    : "border border-glacier/30 bg-glacier/10 text-glacier-dark hover:border-glacier/50 hover:bg-glacier/20 focus:ring-glacier"
                }`}
              >
                {pack.cta}
                <ChevronRight className={`h-4 w-4 ${pack.highlighted ? "text-white" : "text-glacier-dark"}`} aria-hidden />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
