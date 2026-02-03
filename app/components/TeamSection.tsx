"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Linkedin, Shield, Twitter, Users } from "lucide-react";

const ceo = {
  name: "Romel Matsonda",
  title: "CEO & Fondateur",
  bio: "15 ans dans la tech. Il pose les bases, vous avancez.",
  linkedinUrl: "https://linkedin.com/in/thomas-bernard",
  twitterUrl: "#",
  avatarUrl: "/ceo.jpg",
};

const teamGridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const teamCardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const coreTeam = [
  {
    name: "Marie Laurent",
    title: "CTO / Lead Developer",
    focus: "Innovation & Code",
    icon: Code2,
    gradient: "from-ocean/20 to-ocean-light/20",
    linkedinUrl: "#",
    twitterUrl: "#",
    avatarUrl: "https://ui-avatars.com/api/?name=Marie+Laurent&size=128&background=0f172a&color=7dd3fc&bold=true",
  },
  {
    name: "Pierre Dubois",
    title: "Responsable Cybersécurité",
    focus: "Audit & Protection",
    icon: Shield,
    gradient: "from-emerald-500/20 to-teal-500/20",
    linkedinUrl: "#",
    twitterUrl: "#",
    avatarUrl: "https://ui-avatars.com/api/?name=Pierre+Dubois&size=128&background=0f172a&color=2dd4bf&bold=true",
  },
  {
    name: "Felix Ngakosso",
    title: "UI/UX Designer",
    focus: "Expérience utilisateur",
    icon: Layout,
    gradient: "from-ocean/20 to-ocean-light/20",
    linkedinUrl: "#",
    twitterUrl: "#",
    avatarUrl: "/design.jpg",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ceoParallaxY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, -12, 8, 0]);
  const teamParallaxY = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [-6, 6, -4]);

  return (
    <section
      ref={sectionRef}
      id="equipe"
      className="relative scroll-mt-20 border-t border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-[10px] border border-zinc-200 bg-zinc-100 px-4 py-2 shadow-sm">
            <Users className="mr-2 h-5 w-5 text-ocean" aria-hidden />
            <span className="text-sm font-medium text-zinc-700">
              Notre équipe
            </span>
          </div>
          <h2 className="text-section text-zinc-900">
            L&apos;expertise derrière vos projets
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Des gens en face. Du sérieux dans le code. On écoute, on livre.
          </p>
        </motion.div>

        {/* Leader (CEO) — carte mise en avant */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-[4.5rem] flex justify-center"
        >
          <article className="hover-card w-full max-w-2xl rounded-[20px] border border-zinc-200 border-ocean/30 bg-zinc-50/80 p-8 shadow-xl shadow-ocean/10 hover:border-ocean/50 hover:shadow-2xl hover:shadow-ocean/15 sm:p-10">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
              <motion.div
                style={{ y: ceoParallaxY }}
                className="relative mb-6 sm:mb-0 sm:mr-8 shrink-0"
              >
                <div
                  className="absolute -inset-2 rounded-full bg-ocean/25 blur-xl"
                  aria-hidden
                />
                <motion.div
                  className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/10 ring-2 ring-ocean/30 sm:h-44 sm:w-44"
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                >
                  <img
                    src={ceo.avatarUrl}
                    alt={ceo.name}
                    className="h-full w-full object-cover"
                    width={176}
                    height={176}
                  />
                </motion.div>
              </motion.div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-ocean/20 px-3 py-1 text-xs font-semibold text-ocean-light">
                  Leader
                </span>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
                  {ceo.name}
                </h3>
                <p className="mt-1 text-base font-medium text-ocean-light">
                  {ceo.title}
                </p>
                <p className="mt-4 text-zinc-600 leading-relaxed">
                  {ceo.bio}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={ceo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-btn radius-md inline-flex h-10 w-10 items-center justify-center border border-zinc-300 bg-zinc-100 text-zinc-700 hover:border-ocean/50 hover:bg-ocean/10 hover:text-ocean hover:shadow-lg hover:shadow-ocean/10 hover:scale-110 active:scale-100"
                    aria-label={`LinkedIn - ${ceo.name}`}
                  >
                    <Linkedin className="h-5 w-5" aria-hidden />
                  </a>
                  <a
                    href={ceo.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-btn radius-sm inline-flex h-10 w-10 items-center justify-center border border-zinc-300 bg-zinc-100 text-zinc-700 hover:border-ocean/50 hover:bg-ocean/10 hover:text-ocean hover:shadow-lg hover:shadow-ocean/10 hover:scale-110 active:scale-100"
                    aria-label={`Twitter / X - ${ceo.name}`}
                  >
                    <Twitter className="h-5 w-5 text-ocean" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-[4.25rem]"
        >
          <h3 className="mb-9 text-center text-lg font-semibold uppercase tracking-wider text-zinc-600">
            L&apos;équipe core
          </h3>
          <motion.div
            variants={teamGridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {coreTeam.map((teammate, idx) => {
              const RoleIcon = teammate.icon;
              return (
              <motion.article
                key={teammate.title}
                variants={teamCardReveal}
                className={`hover-card group relative border border-zinc-200 bg-zinc-50/80 p-6 hover:border-ocean/40 hover:shadow-xl hover:shadow-ocean/5 ${
                  idx === 0 ? "rounded-[16px]" : idx === 1 ? "rounded-2xl" : "rounded-[18px]"
                }`}
              >
                <motion.div
                  style={idx === 1 ? { y: teamParallaxY } : undefined}
                  className="mb-5 flex justify-center"
                >
                  <motion.div
                    className="relative h-28 w-28 overflow-hidden rounded-full border border-zinc-200 ring-1 ring-zinc-200/80 sm:h-32 sm:w-32"
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                  >
                    <img
                      src={teammate.avatarUrl}
                      alt={teammate.name}
                      className="h-full w-full object-cover"
                      width={128}
                      height={128}
                    />
                  </motion.div>
                </motion.div>
                <div
                  className={`mb-3 inline-flex rounded-[10px] border border-zinc-200 bg-gradient-to-br ${teammate.gradient} p-2.5`}
                >
                  <RoleIcon className="h-5 w-5 text-ocean" aria-hidden />
                </div>
                <h4 className="text-card-title text-zinc-900">
                  {teammate.name}
                </h4>
                <p className="mt-1 text-sm font-medium text-ocean">
                  {teammate.title}
                </p>
                <p className="mt-2 text-xs text-zinc-600">
                  Focus : {teammate.focus}
                </p>
                {/* Icônes sociales au survol — transition fluide */}
                <div className="mt-4 flex translate-y-1 items-center gap-2 opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={teammate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-btn radius-sm inline-flex h-9 w-9 items-center justify-center border border-zinc-300 bg-zinc-100 text-zinc-700 hover:border-ocean/50 hover:bg-ocean/10 hover:text-ocean hover:shadow-md hover:scale-110 active:scale-100"
                    aria-label={`LinkedIn - ${teammate.name}`}
                  >
                    <Linkedin className="h-4 w-4 text-ocean" aria-hidden />
                  </a>
                  <a
                    href={teammate.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-btn radius-md inline-flex h-9 w-9 items-center justify-center border border-zinc-300 bg-zinc-100 text-zinc-700 hover:border-ocean/50 hover:bg-ocean/10 hover:text-ocean hover:shadow-md hover:scale-110 active:scale-100"
                    aria-label={`Twitter / X - ${teammate.name}`}
                  >
                    <Twitter className="h-4 w-4 text-ocean" aria-hidden />
                  </a>
                </div>
              </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
