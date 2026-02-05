"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, UserCog, UserRoundCheck, UserRoundPen } from "lucide-react";
import { memo } from "react";

const ceo = {
  name: "Romel Matsonda",
  title: "CEO & Fondateur",
  bio: "15 ans dans la tech. Il pose les bases, vous avancez.",
  linkedinUrl: "https://linkedin.com/in/thomas-bernard",
  twitterUrl: "#",
  avatarUrl: "/ceo.jpg",
};

const coreTeam = [
  {
    name: "Marie Laurent",
    title: "CTO / Lead Developer",
    focus: "Innovation & Code",
    icon: UserCog,
    gradient: "from-glacier to-glacier-dark",
    linkedinUrl: "#",
    twitterUrl: "#",
    avatarUrl: "https://ui-avatars.com/api/?name=Marie+Laurent&size=128&background=A8D5E2&color=2D3142&bold=true",
  },
  {
    name: "Pierre Dubois",
    title: "Responsable Cybersécurité",
    focus: "Audit & Protection",
    icon: UserRoundCheck,
    gradient: "from-[#9DD8C8] to-[#7AB8A8]",
    linkedinUrl: "#",
    twitterUrl: "#",
    avatarUrl: "https://ui-avatars.com/api/?name=Pierre+Dubois&size=128&background=9DD8C8&color=2D3142&bold=true",
  },
  {
    name: "Felix Ngakosso",
    title: "UI/UX Designer",
    focus: "Expérience utilisateur",
    icon: UserRoundPen,
    gradient: "from-peach to-peach-dark",
    linkedinUrl: "#",
    twitterUrl: "#",
    avatarUrl: "/design.jpg",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const TeamMemberCard = memo(function TeamMemberCard({
  member,
}: {
  member: (typeof coreTeam)[number];
}) {
  const Icon = member.icon;

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-glacier/20 bg-white/90 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-glacier/40 hover:shadow-md sm:p-8"
    >
      <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-2 border-glacier/30 sm:h-28 sm:w-28">
        <img
          src={member.avatarUrl}
          alt={member.name}
          className="h-full w-full object-cover"
          width={128}
          height={128}
          loading="lazy"
        />
      </div>

      <div
        className={`mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${member.gradient} shadow-md`}
      >
        <Icon className="h-5 w-5 text-white" aria-hidden />
      </div>

      <h4 className="text-lg font-semibold tracking-tight text-foreground">
        {member.name}
      </h4>
      <p className="mt-1 text-sm font-medium text-glacier-dark">{member.title}</p>
      <p className="mt-2 text-xs text-zinc-500">{member.focus}</p>

      <div className="mt-5 flex items-center justify-center gap-2">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-glacier/30 bg-glacier/10 text-glacier-dark transition-all hover:border-glacier/50 hover:bg-glacier/20"
          aria-label={`LinkedIn - ${member.name}`}
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={member.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-glacier/30 bg-glacier/10 text-glacier-dark transition-all hover:border-glacier/50 hover:bg-glacier/20"
          aria-label={`Twitter - ${member.name}`}
        >
          <Twitter className="h-4 w-4" />
        </a>
      </div>

      <div
        className={`mx-auto mt-6 h-1 w-[30%] rounded-full bg-gradient-to-r ${member.gradient} transition-all duration-500 group-hover:w-[50%]`}
      />
    </motion.article>
  );
});

function TeamSection() {
  return (
    <section
      id="equipe"
      className="relative scroll-mt-20 overflow-hidden border-t border-glacier/20 bg-gradient-to-b from-white via-[#FEFDFB] to-white py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-slow absolute left-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-glacier/15 blur-[120px]" />
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
            L&apos;expertise derrière{" "}
            <span className="bg-gradient-to-r from-glacier-dark via-glacier to-peach bg-clip-text text-transparent">
              vos projets
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Des gens en face. Du sérieux dans le code. On écoute, on livre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <article className="group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-glacier/30 bg-white/90 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-glacier/50 hover:shadow-lg sm:p-8 lg:p-10">
            <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
              <div className="relative mb-6 shrink-0 sm:mb-0 sm:mr-8">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-glacier/30 ring-4 ring-glacier/10 sm:h-44 sm:w-44">
                  <img
                    src={ceo.avatarUrl}
                    alt={ceo.name}
                    className="h-full w-full object-cover"
                    width={176}
                    height={176}
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {ceo.name}
                </h3>
                <p className="mt-1.5 text-base font-medium text-glacier-dark">{ceo.title}</p>
                <p className="mt-4 leading-relaxed text-zinc-600">{ceo.bio}</p>

                <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
                  <a
                    href={ceo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-glacier/30 bg-glacier/10 text-glacier-dark transition-all hover:border-glacier/50 hover:bg-glacier/20"
                    aria-label={`LinkedIn - ${ceo.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={ceo.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-glacier/30 bg-glacier/10 text-glacier-dark transition-all hover:border-glacier/50 hover:bg-glacier/20"
                    aria-label={`Twitter - ${ceo.name}`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <h3 className="mb-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            L&apos;équipe core
          </h3>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {coreTeam.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(TeamSection);
