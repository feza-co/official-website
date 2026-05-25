// components/HeroCinematic.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  fadeIn,
  scaleReveal,
  dividerReveal,
  useMotionSafe,
} from "@/lib/motion";

export default function HeroCinematic() {
  const container = useMotionSafe(staggerContainer(0.12));
  const inUp    = useMotionSafe(fadeInUp);
  const inFade  = useMotionSafe(fadeIn);
  const inScale = useMotionSafe(scaleReveal);
  const inDiv   = useMotionSafe(dividerReveal);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16"
      aria-label="Ana başlık"
    >
      {/* ── Zemin katmanları ── */}

      {/* 1) Yatay çizgi dokusu */}
      <div
        className="absolute inset-0 horizontal-lines pointer-events-none"
        aria-hidden
      />

      {/* 2) Merkez radial glow */}
      <div className="cinematic-glow" aria-hidden />

      {/* 3) Sağ üst köşe indigo orb */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
          filter: "blur(40px)",
          opacity: 0.4,
          transform: "translate(30%, -30%)",
        }}
        aria-hidden
      />

      {/* 4) Sol alt cyan orb */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 65%)",
          filter: "blur(40px)",
          opacity: 0.3,
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden
      />

      {/* ── İçerik ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-5 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={inUp}
          className="font-mono text-[9px] tracking-[5px] uppercase text-indigo-400 mb-8 sm:mb-10"
        >
          Yazılım Kolektifi · Est. 2026
        </motion.p>

        {/* FEZA — iki katmanlı stroke + fill */}
        <motion.div variants={inScale} className="relative select-none" aria-label="FEZA">
          {/* Stroke katmanı (arka) */}
          <span
            className="font-orbitron font-black leading-none pointer-events-none"
            style={{
              fontSize: "clamp(5rem, 22vw, 14rem)",
              letterSpacing: "-0.05em",
              WebkitTextStroke: "1px rgba(99,102,241,0.35)",
              color: "transparent",
              display: "block",
            }}
            aria-hidden
          >
            FEZA
          </span>
          {/* Fill katmanı (üst — yarı görünür clip) */}
          <span
            className="font-orbitron font-black leading-none absolute inset-0 pointer-events-none"
            style={{
              fontSize: "clamp(5rem, 22vw, 14rem)",
              letterSpacing: "-0.05em",
              background:
                "linear-gradient(180deg, #f4f4f5 0%, rgba(99,102,241,0.55) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              clipPath: "inset(0 0 38% 0)",
              display: "block",
            }}
            aria-hidden
          >
            FEZA
          </span>
        </motion.div>

        {/* Ayırıcı çizgi */}
        <motion.div
          variants={inDiv}
          className="w-full max-w-xs h-px my-4 origin-left"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6366f1 30%, #22d3ee 70%, transparent)",
          }}
          aria-hidden
        />

        {/* —CO */}
        <motion.p
          variants={inUp}
          className="font-mono font-bold tracking-[8px] text-indigo-400 mb-6"
          style={{ fontSize: "clamp(1rem, 3vw, 1.75rem)" }}
        >
          —CO
        </motion.p>

        {/* Alt yazı */}
        <motion.p
          variants={inFade}
          className="font-mono text-[10px] tracking-[2px] uppercase text-feza-faint mb-10"
        >
          Beş kurucu · Sınırsız vizyon
        </motion.p>

        {/* CTA */}
        <motion.div variants={inUp} className="flex flex-col sm:flex-row gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm
                       font-mono text-xs tracking-[3px] uppercase text-indigo-300
                       border border-indigo-500/30
                       transition-all duration-300
                       hover:border-indigo-400 hover:text-feza-text hover:bg-indigo-500/5
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                       focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
          >
            Projeleri Keşfet
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M2 9L9 2M9 2H4M9 2V7" />
            </svg>
          </Link>

          <Link
            href="#founders"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm
                       font-mono text-xs tracking-[3px] uppercase text-feza-faint
                       border border-feza-border
                       transition-all duration-300
                       hover:border-feza-border-md hover:text-feza-secondary
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                       focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
          >
            Ekibi Tanı
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-[8px] tracking-[3px] uppercase text-feza-faint">
          Aşağı kaydır
        </span>
        <div className="relative h-9 w-5 rounded-full border border-feza-border">
          <div className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-indigo-500 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
