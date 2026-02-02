"use client";

import { motion, useInView, useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const contentStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 1.8,
  staggerDelay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => {
      animate(motionValue, value, {
        duration,
        ease: [0.22, 0.61, 0.36, 1],
      });
    }, staggerDelay * 1000);
    return () => clearTimeout(id);
  }, [inView, value, duration, motionValue, staggerDelay]);

  useMotionValueEvent(motionValue, "change", (v) => setDisplay(Math.round(v)));

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold tracking-tight text-ocean sm:text-4xl [contain:layout]">
        {prefix}
        <span className="tabular-nums">{display}</span>
        {suffix}
      </div>
      <p className="mt-1.5 text-sm text-zinc-400">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="relative scroll-mt-20 overflow-hidden border-t border-zinc-800 bg-zinc-950 py-20 sm:py-24 lg:py-28 bg-pattern-z"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* 1 colonne mobile, 2 colonnes desktop */}
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche — visuel abstrait (sphère / innovation) + léger motion blur */}
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(2px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 flex min-h-[280px] items-center justify-center lg:order-1 lg:min-h-[360px]"
          >
            <div className="relative aspect-square w-full max-w-[320px] lg:max-w-[380px] will-change-transform">
              {/* Sphère principale — gradient 3D / néon */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-ocean/40 via-ocean/20 to-transparent opacity-90"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.85, 0.95, 0.85],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  boxShadow:
                    "0 0 80px 40px rgb(32 240 255 / 0.12), inset -20px -20px 40px rgba(0,0,0,0.3)",
                }}
              />
              <motion.div
                className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-white/10 to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Anneau externe / orbite */}
              <motion.div
                className="absolute inset-[-5%] rounded-full border border-ocean/30"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[8%] rounded-full border border-white/5"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              {/* Points lumineux type données */}
              <div className="absolute left-1/2 top-[20%] h-2 w-2 rounded-full bg-ocean shadow-[0_0_12px_4px_rgb(32_240_255/0.6)]" />
              <div className="absolute bottom-[28%] left-[18%] h-1.5 w-1.5 rounded-full bg-ocean-light/80 shadow-[0_0_8px_2px_rgb(32_240_255/0.5)]" />
              <div className="absolute right-[22%] top-[35%] h-1 w-1 rounded-full bg-white/60 shadow-[0_0_6px_2px_rgba(255,255,255,0.4)]" />
              <div className="absolute bottom-[35%] right-[15%] h-1.5 w-1.5 rounded-full bg-ocean/70 shadow-[0_0_8px_2px_rgb(32_240_255/0.4)]" />
            </div>
            {/* Lueur de fond */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgb(32_240_255/0.1),transparent_60%)]"
              aria-hidden
            />
          </motion.div>

          {/* Colonne droite — contenu textuel */}
          <motion.div
            variants={contentStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="order-1 lg:order-2"
          >
            <span
              className="inline-block text-xs font-medium tracking-widest text-ocean [font-variant:small-caps]"
              style={{ fontVariant: "small-caps" }}
            >
              Notre ADN
            </span>
            <motion.h2
              variants={contentItem}
              className="text-section text-title-gradient mt-5"
            >
              L'humain au service de la performance technologique.
            </motion.h2>
            <motion.p
              variants={contentItem}
              className="mt-4 text-zinc-400 leading-relaxed"
            >
              On ne fait pas que du code ou des infra : on pose les bases de
              votre croissance. Notre job ? Rendre la technique simple pour que
              vous puissiez vous concentrer sur ce qui compte — votre métier.
              Une équipe passionnée derrière chaque projet.
            </motion.p>

            {/* Chiffres clés — 1 col mobile, 2 cols tablet, 3 cols desktop */}
            <motion.div
              variants={contentItem}
              className="mt-10 grid grid-cols-1 gap-8 border-t border-zinc-800 pt-10 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatedCounter
                value={99}
                suffix="%"
                label="de satisfaction client."
                duration={1.6}
                staggerDelay={0}
              />
              <AnimatedCounter
                value={24}
                suffix="/7"
                label="Monitoring & Support."
                duration={1.6}
                staggerDelay={0.12}
              />
              <AnimatedCounter
                value={100}
                prefix="+"
                label="Projets sécurisés et déployés."
                duration={1.6}
                staggerDelay={0.24}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
