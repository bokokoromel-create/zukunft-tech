"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Headphones,
  KeyRound,
  Monitor,
  PenTool,
  Server,
  Settings,
  Smartphone,
} from "lucide-react";
import { memo } from "react";

const serviceOfferings = [
  {
    title: "Développement & Design",
    icon: PenTool,
    deliverables: [
      { label: "Sites pro", icon: Monitor },
      { label: "Apps mobiles", icon: Smartphone },
      { label: "UI/UX", icon: PenTool },
      { label: "Maintenance", icon: Settings },
    ],
    gradient: "from-glacier to-glacier-dark",
  },
  {
    title: "Réseau & Cybersécurité",
    icon: KeyRound,
    deliverables: [
      { label: "Infrastructure", icon: Server },
      { label: "Audits", icon: KeyRound },
      { label: "Protection", icon: KeyRound },
      { label: "Formations", icon: Headphones },
    ],
    gradient: "from-[#9DD8C8] to-[#7AB8A8]",
  },
  {
    title: "Services Complémentaires",
    icon: Cloud,
    deliverables: [
      { label: "Cloud", icon: Cloud },
      { label: "Data Science & IA", icon: Server },
      { label: "Support technique", icon: Headphones },
    ],
    gradient: "from-peach to-peach-dark",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Carte de service mémorisée
const ServiceCard = memo(function ServiceCard({
  offering,
}: {
  offering: (typeof serviceOfferings)[number];
}) {
  const Icon = offering.icon;
  
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-glacier/20 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-glacier/40 hover:shadow-md"
    >
      <div
        className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${offering.gradient} p-3 text-white shadow-md`}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-foreground">
        {offering.title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {offering.deliverables.map((delivery) => {
          const DeliveryIcon = delivery.icon;
          return (
            <li key={delivery.label} className="flex items-center gap-3 text-zinc-700">
              <DeliveryIcon className="h-4 w-4 shrink-0 text-glacier-dark" />
              <span>{delivery.label}</span>
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
});

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 border-t border-glacier/20 bg-gradient-to-b from-white via-[#FEFDFB] to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-section text-foreground">Nos services</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-600">
            Du dev à la sécurité : tout sous un même toit.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {serviceOfferings.map((offering) => (
            <ServiceCard key={offering.title} offering={offering} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ServicesSection);
