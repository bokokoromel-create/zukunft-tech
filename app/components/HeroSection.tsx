"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

function HeroSection() {
  return (
    <LazyMotion features={domAnimation} strict>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F8F5F0] via-[#FFF] to-[#F5F0E8]"
        aria-label="Accueil"
      >
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

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="animate-pulse-slow absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-glacier/20 blur-[120px]" />
          <div className="animate-pulse-slow animation-delay-2000 absolute bottom-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-peach/20 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
          <m.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex w-full max-w-4xl flex-col items-center gap-4 min-[480px]:gap-5"
          >
            <m.h1
              variants={heroStaggerItem}
              className="font-display text-[clamp(1.75rem,5vw+0.5rem,4rem)] font-normal leading-[1.1] tracking-tight break-words"
            >
              <span className="block text-foreground">L&apos;excellence technologique</span>
              <span className="mt-1 block text-foreground sm:mt-2">
                Au service de votre Business.
              </span>
            </m.h1>

            <m.p
              variants={heroStaggerItem}
              className="max-w-xl text-[0.9375rem] leading-relaxed text-zinc-700 min-[480px]:text-base sm:text-lg"
            >
              Sites, applications et r&#233;seaux con&#231;us pour performer. S&#233;curis&#233;s pour durer.
              <span className="font-medium text-glacier-dark"> Propuls&#233; par ZUKUNFT TECH.</span>
            </m.p>

            <m.div
              variants={heroStaggerItem}
              className="mt-4 flex w-full flex-col items-stretch gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:justify-center"
            >
              <Link href="#contact" className="w-full sm:w-auto touch-manipulation">
                <span className="group relative inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-glacier to-glacier-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,213,226,0.5)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-glacier/50 focus:ring-offset-2 focus:ring-offset-white sm:min-h-[56px] sm:px-8 sm:py-4 sm:w-auto sm:hover:scale-[1.02]">
                  <span className="relative z-10">Parler &#224; un expert</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </m.div>
          </m.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-32 bg-gradient-to-t from-[#F8F5F0] to-transparent" />
      </section>
    </LazyMotion>
  );
}

export default memo(HeroSection);
