"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "1",
    title: "Plateforme SaaS FinTech",
    category: "Dev & UX",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90",
    alt: "Dashboard FinTech et interfaces utilisateur",
  },
  {
    id: "2",
    title: "Sécurisation Infrastructure Hôpital",
    category: "Cybersécurité",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=90",
    alt: "Réseau et infrastructure sécurisée",
  },
  {
    id: "3",
    title: "App Mobile Logistique",
    category: "iOS / Android",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=90",
    alt: "Application mobile logistique",
  },
  {
    id: "4",
    title: "Dashboard IA Prédictif",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90",
    alt: "Visualisation données et IA prédictive",
  },
];

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-section text-zinc-900">Nos Réalisations</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 leading-relaxed">
            Des solutions concrètes pour des défis complexes.
          </p>
        </motion.div>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardReveal}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200"
            >
              <a href="#" className="block h-full w-full">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out group-hover:opacity-100"
                    style={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={false}
                    animate={{
                      y: hoveredId === project.id ? 0 : 24,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.33, 1, 0.68, 1] as const,
                    }}
                    className="flex flex-col gap-2"
                  >
                    <span className="inline-block w-fit rounded-lg bg-white/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
