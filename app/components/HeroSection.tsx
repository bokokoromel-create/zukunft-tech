"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const heroStaggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const ctaStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.35, duration: 0.48 },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background via-zinc-950/80 to-background bg-pattern-z"
      aria-label="Accueil"
    >
      {/* Métallique / reflets subtils */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_20%,rgba(251,146,60,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_70%,rgb(32_240_255/0.06),transparent_50%)]" />

      {/* Éléments décoratifs type "pièces" / 3D */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[15%] top-[25%] h-32 w-32 rounded-full bg-gradient-to-br from-zinc-600/40 to-zinc-800/30 blur-2xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[40%] h-24 w-24 rounded-full border border-zinc-600/30 bg-zinc-700/20"
          style={{ borderRadius: "40% 60% 50% 50%" }}
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[25%] h-20 w-20 rounded-full bg-gradient-to-br from-zinc-500/20 to-zinc-700/20"
          style={{ borderRadius: "60% 40% 50% 50%" }}
          animate={{ y: [0, 6, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[30%] bottom-[25%] h-16 w-16 rounded-full border border-zinc-600/20"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col items-center gap-7"
        >
          <motion.h1
            variants={heroStaggerItem}
            className="text-hero"
          >
            <span className="block text-title-gradient">Du site au réseau.</span>
            <span className="mt-3 block text-title-gradient">
              Fait. Sécurisé.
            </span>
          </motion.h1>

          <motion.p
            variants={heroStaggerItem}
            className="max-w-2xl text-lg text-zinc-300 sm:text-xl leading-relaxed"
          >
            Sites, apps, réseaux. Conçus pour durer. Protégés pour de bon.
          </motion.p>

          <motion.div variants={ctaStagger} className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="#tarifs">
              <motion.span
                className="hover-btn btn-cta radius-2xl inline-flex items-center gap-2 px-6 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-zinc-950"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                Découvrir nos packs
                <ArrowRight className="h-5 w-5 text-white" aria-hidden />
              </motion.span>
            </Link>
            <motion.a
              href="#contact"
              className="hover-btn radius-2xl inline-flex items-center gap-2 border border-zinc-600 bg-zinc-900/80 px-6 py-3.5 text-base font-semibold text-white hover:border-ocean/40 hover:bg-zinc-800 hover:shadow-lg hover:shadow-ocean/10 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            >
              <MessageCircle className="h-5 w-5 text-ocean" aria-hidden />
              Parler à un humain
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
