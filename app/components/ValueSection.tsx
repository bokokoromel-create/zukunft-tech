"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye, Handshake, Wallet } from "lucide-react";
import { memo } from "react";

const valueProps = [
  {
    problem: "Outils bancals",
    solution: "Sur-mesure métier",
    description:
      "Vos équipes bricolent avec des outils pensés pour tout le monde. On conçoit un site, une app ou un réseau taillé pour votre métier.",
    icon: Handshake,
    gradient: "from-glacier via-[#9CD1E0] to-glacier-dark",
    glowColor: "rgba(168, 213, 226, 0.25)",
  },
  {
    problem: "Peur des pannes",
    solution: "Surveillance 24/7",
    description:
      "Une panne et tout s'arrête. On surveille, on sécurise et on vous prévient avant que le client ne le fasse.",
    icon: Eye,
    gradient: "from-[#B4E4CE] via-[#A0D4B8] to-[#8FC4A8]",
    glowColor: "rgba(180, 228, 206, 0.25)",
  },
  {
    problem: "Budget qui explose",
    solution: "Coûts optimisés",
    description:
      "Licences, serveurs, prestas… ça s'empile. On coupe le gras et on garde ce qui crée vraiment de la valeur.",
    icon: Wallet,
    gradient: "from-peach via-[#F0C8A0] to-peach-dark",
    glowColor: "rgba(245, 213, 184, 0.25)",
  },
  {
    problem: "Projets en retard",
    solution: "Livraison rapide",
    description:
      "Specs qui changent, planning qui dérape. On vous aide à sortir vos projets vite, proprement et sans rework.",
    icon: Clock,
    gradient: "from-[#D4C5F9] via-[#C4B5E8] to-[#B4A5D8]",
    glowColor: "rgba(212, 197, 249, 0.25)",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Carte mémorisée
const ValueCard = memo(function ValueCard({
  prop,
  index,
}: {
  prop: (typeof valueProps)[number];
  index: number;
}) {
  const Icon = prop.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-glacier/20 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-glacier/40 hover:shadow-lg sm:p-8">
        {/* Top row */}
        <div className="mb-5 flex flex-wrap items-start gap-3 sm:gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${prop.gradient} shadow-md sm:h-14 sm:w-14 sm:rounded-2xl`}
          >
            <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" aria-hidden />
          </div>

          {/* Problem → Solution badge — wrap sur petit écran */}
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5 rounded-full border border-glacier/30 bg-glacier/10 px-3 py-1.5 sm:gap-2">
            <span className="text-xs font-medium text-red-500">{prop.problem}</span>
            <ArrowRight className="h-3 w-3 shrink-0 text-zinc-400" />
            <span className="text-xs font-medium text-emerald-600">{prop.solution}</span>
          </div>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-zinc-700 sm:text-base">
          {prop.description}
        </p>

        {/* Bottom accent line */}
        <div
          className={`mt-6 h-1 w-[30%] rounded-full bg-gradient-to-r ${prop.gradient} transition-all duration-500 group-hover:w-[50%]`}
        />
      </div>
    </motion.div>
  );
});

function ValueSection() {
  return (
    <section
      id="valeur"
      className="relative scroll-mt-20 overflow-hidden border-t border-glacier/20 bg-gradient-to-b from-white via-[#FEFDFB] to-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background - CSS simple */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-slow absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-glacier/15 blur-[120px]" />
        <div className="animate-pulse-slow animation-delay-2000 absolute bottom-[10%] right-[15%] h-[350px] w-[350px] rounded-full bg-peach/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:mb-20"
        >
          <h2 className="font-display text-[clamp(1.75rem,4vw+0.5rem,3rem)] font-normal leading-[1.15] tracking-tight text-foreground">
            Vous vivez ça.{" "}
            <span className="bg-gradient-to-r from-glacier-dark via-glacier to-peach bg-clip-text text-transparent">
              On le résout.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Projets qui glissent, pannes au pire moment, prestas qui disparaissent.
            ZUKUNFT TECH transforme ce chaos en système qui tient debout.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:gap-6"
        >
          {valueProps.map((prop, i) => (
            <ValueCard key={prop.problem} prop={prop} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center lg:mt-16"
        >
          <p className="text-sm text-zinc-500">
            Prêt à transformer vos frustrations en solutions ?
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-glacier-dark transition-colors hover:text-glacier"
          >
            Discutons de votre projet
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ValueSection);
