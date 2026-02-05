"use client";

import { motion, useInView, useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { useRef, useEffect, useState, memo } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 1.5,
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
        ease: [0.22, 0.61, 0.36, 1] as const,
      });
    }, staggerDelay * 1000);
    return () => clearTimeout(id);
  }, [inView, value, duration, motionValue, staggerDelay]);

  useMotionValueEvent(motionValue, "change", (v) => setDisplay(Math.round(v)));

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold tracking-tight text-glacier-dark sm:text-4xl">
        {prefix}
        <span className="tabular-nums">{display}</span>
        {suffix}
      </div>
      <p className="mt-1.5 text-sm text-zinc-600">{label}</p>
    </div>
  );
});

function AboutSection() {
  return (
    <section
      id="a-propos"
      className="relative scroll-mt-20 overflow-hidden border-t border-glacier/20 bg-gradient-to-b from-white via-[#FEFDFB] to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-2 flex min-h-[240px] items-center justify-center sm:min-h-[280px] lg:order-1 lg:min-h-[360px]"
          >
            <div className="relative aspect-square w-full max-w-[min(320px,85vw)] lg:max-w-[380px]">
              <div
                className="animate-pulse-slow absolute inset-0 rounded-full bg-gradient-to-br from-glacier/40 via-glacier/20 to-transparent opacity-90"
                style={{
                  boxShadow: "0 0 80px 40px rgb(168 213 226 / 0.15), inset -20px -20px 40px rgba(168, 213, 226, 0.1)",
                }}
              />
              <div className="animate-spin-slow absolute inset-[15%] rounded-full bg-gradient-to-tr from-peach/20 to-transparent" />
              <div className="animate-spin-reverse absolute inset-[-5%] rounded-full border border-glacier/30" />
              <div className="animate-spin-slow absolute inset-[8%] rounded-full border border-glacier/15" />
              <div className="absolute left-1/2 top-[20%] h-2 w-2 rounded-full bg-glacier shadow-[0_0_12px_4px_rgb(168_213_226/0.6)]" />
              <div className="absolute bottom-[28%] left-[18%] h-1.5 w-1.5 rounded-full bg-glacier-dark shadow-[0_0_8px_2px_rgb(127_179_196/0.5)]" />
              <div className="absolute right-[22%] top-[35%] h-1 w-1 rounded-full bg-peach shadow-[0_0_6px_2px_rgb(245_213_184/0.4)]" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgb(168_213_226/0.15),transparent_60%)]"
              aria-hidden
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-glacier-dark">
              Pourquoi ils nous choisissent
            </span>
            <motion.h2 variants={fadeInUp} className="text-section text-title-gradient mt-5">
              Une équipe qui tient la route quand tout s&apos;accélère.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 leading-relaxed text-zinc-600">
              La plupart de nos clients arrivent après une première expérience compliquée :
              retards, promesses vagues, personne quand ça casse. Avec ZUKUNFT TECH, vous avez
              des interlocuteurs identifiés, des décisions claires et une technique qui suit sans drama.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-1 gap-8 border-t border-glacier/20 pt-10 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatedCounter
                value={99}
                suffix="%"
                label="de clients qui restent après le premier projet."
                duration={1.5}
                staggerDelay={0}
              />
              <AnimatedCounter
                value={24}
                suffix="/7"
                label="surveillance et support quand ça compte."
                duration={1.5}
                staggerDelay={0.1}
              />
              <AnimatedCounter
                value={100}
                prefix="+"
                label="projets sécurisés mis en production."
                duration={1.5}
                staggerDelay={0.2}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
