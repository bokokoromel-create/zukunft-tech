"use client";

import { motion } from "framer-motion";
import { Lock, PiggyBank, Rocket, Wrench } from "lucide-react";

const valueProps = [
  {
    title: "Un outil à votre main",
    description:
      "Pas de logiciel générique. Un site, une app ou un réseau pensé pour votre métier. Rien de plus.",
    icon: Wrench,
    gradient: "from-ocean to-ocean-light",
  },
  {
    title: "Dormez tranquilles",
    description:
      "Votre infrastructure est sous surveillance 24/7. Données et clients protégés. Vous avancez, on garde le fort.",
    icon: Lock,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Moins de factures IT",
    description:
      "On optimise l’existant et on évite le gaspillage. Vous payez moins. Le service reste au rendez-vous.",
    icon: PiggyBank,
    gradient: "from-ocean to-ocean-dark",
  },
  {
    title: "Lancez plus vite",
    description:
      "Vous sortez vos projets plus tôt. Vos équipes bossent mieux. Vous prenez de l’avance.",
    icon: Rocket,
    gradient: "from-ocean to-ocean-dark",
  },
];

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const valueCardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ValueSection() {
  return (
    <section
      id="valeur"
      className="relative scroll-mt-20 border-t border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24 bg-pattern-z"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-section text-title-gradient">
            Ce que vous gagnez
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Moins de stress. Moins de coûts. Plus de contrôle.
          </p>
        </motion.div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              variants={valueCardReveal}
              className={`hover-card glass-brand border border-zinc-700/80 p-6 hover:border-ocean/30 hover:shadow-xl hover:shadow-ocean/5 ${
                i === 0 ? "rounded-[18px]" : i === 1 ? "rounded-2xl" : i === 2 ? "rounded-[16px]" : "rounded-[20px]"
              }`}
            >
              <div
                className={`mb-5 inline-flex rounded-[12px] bg-gradient-to-br ${prop.gradient} p-3 text-white shadow-lg`}
              >
                <prop.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-card-title text-white">
                {prop.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
