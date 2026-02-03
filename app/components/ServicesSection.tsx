"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Cpu,
  Layout,
  LifeBuoy,
  Shield,
  Smartphone,
  Wrench,
} from "lucide-react";

const serviceOfferings = [
  {
    title: "Développement & Design",
    icon: Code2,
    deliverables: [
      { label: "Sites pro", icon: Layout },
      { label: "Apps mobiles", icon: Smartphone },
      { label: "UI/UX", icon: Layout },
      { label: "Maintenance", icon: Wrench },
    ],
    gradient: "from-ocean to-ocean-light",
    glow: "shadow-ocean/10",
  },
  {
    title: "Réseau & Cybersécurité",
    icon: Shield,
    deliverables: [
      { label: "Infrastructure", icon: Cpu },
      { label: "Audits", icon: Shield },
      { label: "Protection", icon: Shield },
      { label: "Formations", icon: LifeBuoy },
    ],
    gradient: "from-ocean to-ocean-dark",
    glow: "shadow-ocean/10",
  },
  {
    title: "Services Complémentaires",
    icon: Cloud,
    deliverables: [
      { label: "Cloud", icon: Cloud },
      { label: "Data Science & IA", icon: Cpu },
      { label: "Support technique", icon: LifeBuoy },
    ],
    gradient: "from-ocean to-ocean-dark",
    glow: "shadow-ocean/10",
  },
];

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const serviceCardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 border-t border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-section text-zinc-900">
            Nos services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 leading-relaxed">
            Du dev à la sécurité : tout sous un même toit.
          </p>
        </motion.div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {serviceOfferings.map((offering, i) => (
            <motion.article
              key={offering.title}
              variants={serviceCardReveal}
              className={`group relative overflow-hidden border border-zinc-200 bg-zinc-50/80 p-6 shadow-lg transition-all duration-200 hover:border-ocean/40 hover:shadow-xl hover:shadow-ocean/5 ${
                i === 0 ? "rounded-[18px]" : i === 1 ? "rounded-2xl" : "rounded-[20px]"
              }`}
              whileHover={{ y: -6 }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <div
                className={`mb-5 inline-flex rounded-[10px] bg-gradient-to-br ${offering.gradient} p-3 text-white shadow-lg ${offering.glow}`}
              >
                <offering.icon className="h-6 w-6 text-white" aria-hidden />
              </div>
              <h3 className="text-card-title text-zinc-900">
                {offering.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {offering.deliverables.map((delivery) => (
                  <li
                    key={delivery.label}
                    className="flex items-center gap-3 text-zinc-600"
                  >
                    <delivery.icon className="h-4 w-4 shrink-0 text-ocean" />
                    <span>{delivery.label}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
