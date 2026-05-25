// components/TerminalRoster.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { members } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/ui";
import { staggerContainer, slideInLeft, useMotionSafe } from "@/lib/motion";

// Accent color per member (matches their avatarGradient hue)
const MEMBER_ACCENTS: Record<string, string> = {
  "ahmet-karakoyun":    "text-cyan-400",
  "tuna-deniz":         "text-violet-400",
  "nedim-goktug-tabak": "text-emerald-400",
  "izzettin-berke-kus": "text-orange-400",
  "oguzhan-tarhan":     "text-sky-400",
};

export default function TerminalRoster() {
  const container = useMotionSafe(staggerContainer(0.07));
  const rowVariant = useMotionSafe(slideInLeft);

  return (
    <div className="terminal-window w-full max-w-3xl mx-auto">
      {/* ── Terminal header ── */}
      <div className="terminal-header" aria-hidden>
        {/* macOS traffic lights */}
        <div className="w-[7px] h-[7px] rounded-full bg-[#ef4444]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[#f59e0b]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[#22c55e]" />
        <span className="ml-3 font-mono text-[8px] tracking-[2px] uppercase text-feza-faint">
          feza-co — roster.sh
        </span>
      </div>

      {/* ── Terminal body ── */}
      <div className="terminal-body">
        {/* Prompt line */}
        <p className="font-mono text-[10px] text-feza-faint mb-5" aria-hidden>
          <span className="text-emerald-400">$</span>{" "}
          cat collective/members.json
        </p>

        {/* Member rows */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-2"
          role="list"
          aria-label="Kurucu ortaklar"
        >
          {members.map((member) => {
            const accentClass = MEMBER_ACCENTS[member.slug] ?? "text-indigo-400";
            const skillSlugs = member.skills
              .slice(0, 3)
              .map((s) => s.toLowerCase().replace(/[\s/]+/g, "-"));

            return (
              <motion.li
                key={member.slug}
                variants={rowVariant}
                className="group/row relative"
              >
                {/* Full-row overlay link */}
                <Link
                  href={`/members/${member.slug}`}
                  className="absolute inset-0 z-10 rounded-md focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-indigo-400
                             focus-visible:ring-offset-1 focus-visible:ring-offset-[#0d0d10]"
                  aria-label={`${member.name} profiline git`}
                >
                  <span className="sr-only">{member.name} profiline git</span>
                </Link>

                <div
                  className="relative flex items-center gap-3 px-3 py-2.5 rounded-md
                             border border-transparent
                             transition-all duration-200
                             group-hover/row:bg-indigo-500/[0.06]
                             group-hover/row:border-indigo-500/20"
                >
                  {/* Avatar */}
                  <div
                    className={`relative w-8 h-8 rounded-full flex-shrink-0 overflow-hidden
                               bg-gradient-to-br ${member.avatarGradient}
                               flex items-center justify-center
                               ring-1 ring-white/10`}
                  >
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    ) : (
                      <span className="w-full h-full flex items-center justify-center font-mono text-[9px] font-bold text-white">
                        {member.initials}
                      </span>
                    )}
                  </div>

                  {/* Name + skills */}
                  <div className="flex-1 min-w-0">
                    <p className="font-grotesk text-[13px] font-semibold text-feza-text leading-none mb-1">
                      {member.name}
                    </p>
                    <p className={`font-mono text-[10px] truncate ${accentClass}`}>
                      {skillSlugs.join(" · ")}
                    </p>
                  </div>

                  {/* Active badge */}
                  <span
                    className="flex-shrink-0 flex items-center gap-1.5 font-mono text-[9px] tracking-[1px] uppercase text-emerald-400"
                    aria-label="aktif"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden />
                    aktif
                  </span>

                  {/* Social icons — z-20 stays above the overlay link */}
                  <div className="relative z-20 flex items-center gap-1 opacity-0 group-hover/row:opacity-100 transition-opacity duration-200">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 flex items-center justify-center rounded
                                   text-feza-faint hover:text-indigo-400 hover:bg-indigo-500/10
                                   transition-colors duration-150
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        aria-label={`${member.name} LinkedIn`}
                        title={`${member.name} — LinkedIn`}
                      >
                        <LinkedInIcon size={13} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 flex items-center justify-center rounded
                                   text-feza-faint hover:text-feza-text hover:bg-feza-surface-2
                                   transition-colors duration-150
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        aria-label={`${member.name} GitHub`}
                        title={`${member.name} — GitHub`}
                      >
                        <GitHubIcon size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Footer comment */}
        <p className="font-mono text-[10px] text-feza-faint mt-5" aria-hidden>
          <span className="text-indigo-400">//</span>{" "}
          5 kurucu ortak · hiyerarşisiz · est. 2026
        </p>
      </div>
    </div>
  );
}
