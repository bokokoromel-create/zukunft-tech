"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const sectionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const sectionItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-zinc-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={sectionItem} className="mb-12 text-center">
            <h2 className="text-section text-zinc-900">
              Contact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 leading-relaxed">
              Écrivez. On répond sous 48 h.
            </p>
          </motion.div>

          <motion.div variants={sectionItem} className="mx-auto max-w-xl">
          <form
            action="#"
            method="POST"
            className="radius-lg border border-zinc-200 bg-zinc-50/80 p-6 shadow-lg sm:p-8"
          >
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-zinc-700">
                    Nom / Société
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre nom ou société"
                    className="radius-sm w-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 transition-all duration-200 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-zinc-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="vous@exemple.com"
                    className="radius-md w-full border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 transition-all duration-200 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-zinc-700">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Votre projet, votre question..."
                  className="radius-lg w-full resize-none border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-500 transition-all duration-200 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                />
              </label>
              <div className="pt-2">
                <button
                  type="submit"
                  className="hover-btn btn-cta radius-2xl inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-white active:translate-y-0 sm:w-auto sm:px-6"
                >
                  Envoyer
                  <Send className="h-4 w-4 text-white" aria-hidden />
                </button>
              </div>
            </div>
          </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
