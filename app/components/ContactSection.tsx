"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";

const sectionStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
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

const contactInfos = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@zukunft-tech.com",
    href: "mailto:contact@zukunft-tech.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "France",
    href: "#",
  },
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Une erreur est survenue.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Impossible d'envoyer le message. Réessayez plus tard.");
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start"
        >
          {/* En-tête + infos de contact */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div variants={sectionItem} className="mb-10 lg:mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-ocean/30 bg-ocean/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ocean">
                <MessageSquare className="h-3.5 w-3.5" aria-hidden />
                Réponse sous 48 h
              </span>
              <h2 className="mt-5 text-section text-zinc-900">
                Contact
              </h2>
              <p className="mt-4 max-w-sm text-zinc-600 leading-relaxed">
                Un projet, une question ? Écrivez-nous. L&apos;équipe vous répond
                rapidement et en toute simplicité.
              </p>
            </motion.div>

            <motion.div variants={sectionItem} className="space-y-4">
              {contactInfos.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="hover-card flex items-start gap-4 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 transition-all duration-200 hover:border-ocean/30 hover:bg-ocean/5 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ocean/15 text-ocean">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-zinc-900">
                        {item.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Formulaire */}
          <motion.div
            variants={sectionItem}
            className="mt-12 flex justify-center lg:col-span-7 lg:mt-0"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl radius-xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-lg shadow-zinc-200/50 sm:p-8"
            >
              <h3 className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl">
                Envoyez-nous un message
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Remplissez le formulaire, on vous recontacte.
              </p>

              {status === "success" && (
                <div className="mt-4 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  Message envoyé avec succès. Nous vous recontacterons rapidement.
                </div>
              )}
              {status === "error" && errorMessage && (
                <div className="mt-4 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  <span className="shrink-0 font-medium">Erreur</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-zinc-700">
                      Nom / Société
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={status === "loading"}
                      placeholder="Votre nom ou société"
                      className="radius-md w-full min-h-[48px] border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 transition-all duration-200 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20 disabled:opacity-60 [font-size:16px]"
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
                      disabled={status === "loading"}
                      placeholder="vous@exemple.com"
                      className="radius-md w-full min-h-[48px] border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 transition-all duration-200 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20 disabled:opacity-60 [font-size:16px]"
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
                    disabled={status === "loading"}
                    placeholder="Décrivez votre projet ou posez votre question..."
                    className="radius-lg w-full min-h-[120px] resize-none border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 transition-all duration-200 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20 disabled:opacity-60 [font-size:16px]"
                  />
                </label>
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-zinc-500">
                    En soumettant, vous acceptez d&apos;être recontacté par notre équipe.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="hover-btn btn-cta radius-2xl inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-2 focus:ring-offset-white active:translate-y-0 disabled:opacity-70 sm:w-auto"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-white" aria-hidden />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="h-4 w-4 text-white" aria-hidden />
                      </>
                    )}
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
