"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const heroStaggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// Composant stat card
const StatCard = memo(function StatCard({
  icon: Icon,
  label,
  value,
  gradient,
  position,
  delay,
}: {
  icon: typeof BadgeCheck;
  label: string;
  value: string;
  gradient: string;
  position: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`absolute ${position}`}
    >
      <div className="rounded-2xl border border-white/30 bg-white/40 px-4 py-3 shadow-xl shadow-black/5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-md`}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-wider text-zinc-600">
              {label}
            </p>
            <p className="text-xl font-bold text-foreground">{value}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8F5F0] via-[#FFF] to-[#F5F0E8]"
      aria-label="Accueil"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lune.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F0]/60 via-[#FFFFFF]/50 to-[#F8F5F0]/70" />
      </div>

      {/* Ambient lights pastel */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="animate-pulse-slow absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-glacier/20 blur-[120px]" />
        <div className="animate-pulse-slow animation-delay-2000 absolute bottom-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-peach/20 blur-[120px]" />
      </div>

      {/* Floating stat cards */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
        <StatCard
          icon={BadgeCheck}
          label="Projets s&#233;curis&#233;s"
          value="100+"
          gradient="from-glacier to-glacier-dark"
          position="left-[5%] top-[55%] lg:left-[10%] lg:top-[50%]"
          delay={0.8}
        />
        <StatCard
          icon={Heart}
          label="Satisfaction"
          value="99%"
          gradient="from-[#FFB4A2] to-peach-dark"
          position="right-[5%] top-[62%] lg:right-[12%] lg:top-[58%]"
          delay={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col items-center gap-5"
        >
          {/* Titre */}
          <motion.h1
            variants={heroStaggerItem}
            className="font-display text-[clamp(2.5rem,6vw+1rem,5rem)] font-normal leading-[1.08] tracking-tight"
          >
            <span className="block text-foreground">&#201;levez votre</span>
            <span className="mt-1 block bg-gradient-to-r from-glacier-dark via-glacier to-peach bg-clip-text text-transparent sm:mt-2">
              Infrastructure Digitale
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={heroStaggerItem}
            className="max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg"
          >
            Sites, apps et r&#233;seaux con&#231;us pour performer. S&#233;curis&#233;s pour durer.
            <span className="font-medium text-glacier-dark"> Propuls&#233; par ZUKUNFT TECH.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={heroStaggerItem}
            className="mt-4 flex w-full flex-col items-stretch gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:justify-center"
          >
            <Link href="#contact" className="w-full sm:w-auto">
              <span className="group relative inline-flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-glacier to-glacier-dark px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,213,226,0.5)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-glacier/50 focus:ring-offset-2 focus:ring-offset-white sm:w-auto">
                <span className="relative z-10">Parler &#224; un expert</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-[#F8F5F0] to-transparent" />
    </section>
  );
}

export default memo(HeroSection);
