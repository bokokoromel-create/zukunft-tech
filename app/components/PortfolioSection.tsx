"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { memo, useState, useCallback } from "react";

const projects = [
  {
    id: "1",
    title: "Plateforme SaaS FinTech",
    category: "Dev & UX",
    description: "Dashboard complet pour la gestion de portefeuilles clients avec analytics temps réel.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Dashboard FinTech",
    color: "from-glacier/80 to-glacier-dark/80",
  },
  {
    id: "2",
    title: "Sécurisation Infrastructure Hôpital",
    category: "Cybersécurité",
    description: "Audit complet et mise en conformité RGPD avec monitoring 24/7.",
    tech: ["Firewall", "SIEM", "VPN"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    alt: "Infrastructure sécurisée",
    color: "from-[#9DD8C8]/80 to-[#7AB8A8]/80",
  },
  {
    id: "3",
    title: "App Mobile Logistique",
    category: "iOS / Android",
    description: "Suivi en temps réel des livraisons avec notifications push.",
    tech: ["React Native", "Firebase", "Maps API"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    alt: "Application mobile",
    color: "from-[#D4C5F9]/80 to-[#B4A5D8]/80",
  },
  {
    id: "4",
    title: "Dashboard IA Prédictif",
    category: "Data Science",
    description: "Modèles ML pour prédiction de maintenance avec réduction des coûts de 40%.",
    tech: ["Python", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Dashboard IA",
    color: "from-peach/80 to-peach-dark/80",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const ProjectCard = memo(function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.article
      variants={fadeInUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-glacier/30 bg-white shadow-sm">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-90" : "opacity-40"
          }`}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-95" : "opacity-60"
          }`}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-xs">
              {project.category}
            </span>

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition-all duration-300 ${
                isHovered ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
              }`}
            >
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-2xl">
              {project.title}
            </h3>

            <p
              className={`text-sm leading-relaxed text-white/90 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {project.description}
            </p>

            <div
              className={`flex flex-wrap gap-2 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-glacier transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </motion.article>
  );
});

function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-20 overflow-hidden border-t border-glacier/20 bg-gradient-to-b from-white via-[#FEFDFB] to-white py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-slow absolute right-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-glacier/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center lg:mb-20"
        >
          <h2 className="font-display text-[clamp(1.75rem,4vw+0.5rem,3rem)] font-normal leading-[1.15] tracking-tight text-foreground">
            Nos{" "}
            <span className="bg-gradient-to-r from-glacier-dark via-glacier to-peach bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Des solutions concrètes pour des défis complexes.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-4 text-center lg:mt-16"
        >
          <p className="text-sm text-zinc-500">
            Chaque projet est unique. Le vôtre aussi.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-glacier/30 bg-glacier/10 px-5 py-2.5 text-sm font-medium text-glacier-dark backdrop-blur-sm transition-all hover:border-glacier/50 hover:bg-glacier/20"
          >
            <span>Voir plus de projets</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(PortfolioSection);
