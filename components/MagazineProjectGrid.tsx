// components/MagazineProjectGrid.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
  staggerContainer,
  slideInUp,
  slideInLeft,
  fadeIn,
  useMotionSafe,
} from "@/lib/motion";

type ProjectStatus = "active" | "completed" | "planning";

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; tone: "active" | "completed" | "planning"; accent: string; numColor: string }
> = {
  active:    { label: "Aktif",      tone: "active",    accent: "border-l-indigo-500",  numColor: "rgba(99,102,241,0.22)"  },
  completed: { label: "Tamamlandı", tone: "completed", accent: "border-l-emerald-500", numColor: "rgba(16,185,129,0.22)" },
  planning:  { label: "Planlamada", tone: "planning",  accent: "border-l-amber-500",   numColor: "rgba(245,158,11,0.22)" },
};

// ─── Featured Row (Proje 01 — full width) ─────────────────────────────────────

function FeaturedRow({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const config = STATUS_CONFIG[project.status as ProjectStatus] ?? STATUS_CONFIG.active;
  const num = String(index + 1).padStart(2, "0");
  const inLeft = useMotionSafe(slideInLeft);
  const borderLeftColor =
    project.status === "active" ? "#6366f1" :
    project.status === "completed" ? "#10b981" : "#f59e0b";

  return (
    <motion.article
      variants={inLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group/p relative flex items-stretch gap-0 rounded-xl overflow-hidden
                 border border-feza-border bg-feza-card
                 border-l-[3px]
                 hover:border-feza-border-md
                 hover:shadow-[0_16px_48px_rgba(99,102,241,0.10)]
                 transition-all duration-300"
      style={{ borderLeftColor }}
    >
      {/* Full-card accessible link */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10 rounded-xl focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-indigo-400
                   focus-visible:ring-offset-2 focus-visible:ring-offset-feza-bg"
        aria-label={`${project.title} proje detayına git`}
      />

      {/* Hover glow — top right corner */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover/p:opacity-100
                   transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(99,102,241,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-[1] flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-7 sm:py-8 w-full">
        {/* Large number */}
        <span
          className="font-orbitron font-black leading-none select-none flex-shrink-0 hidden sm:block"
          style={{ fontSize: "clamp(4rem, 6vw, 5rem)", color: config.numColor }}
          aria-hidden
        >
          {num}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-3">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-[9px] tracking-[2px] uppercase text-feza-faint sm:hidden">
              {num}
            </span>
            {/* Status dot */}
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === "active" ? "bg-emerald-500 animate-pulse" :
                project.status === "completed" ? "bg-indigo-500" : "bg-amber-500"
              }`}
              aria-hidden
            />
            <span className="font-mono text-[9px] tracking-[2px] uppercase text-feza-muted">
              {config.label}
            </span>
            <span className="font-mono text-[9px] text-feza-faint">{project.year}</span>
            {project.highlight && (
              <span className="font-mono text-[9px] tracking-[1px] uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded line-clamp-1 max-w-xs">
                {project.highlight}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className="font-orbitron font-bold text-feza-text leading-tight
                       group-hover/p:text-indigo-600 dark:group-hover/p:text-indigo-400
                       transition-colors duration-200"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
          >
            {project.title}
          </h3>

          {/* Description/highlight */}
          <p className="font-mono text-xs text-feza-secondary leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags (first 4) */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tag-light" lang="en">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="relative z-20 flex flex-col sm:flex-row gap-2 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         font-mono text-[10px] tracking-widest uppercase
                         text-feza-muted border border-feza-border bg-feza-card
                         hover:text-feza-text hover:border-feza-border-md hover:bg-feza-surface-2
                         transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={`${project.title} GitHub deposu`}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Repo
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         font-mono text-[10px] tracking-widest uppercase
                         text-white bg-indigo-600 border border-indigo-600
                         hover:bg-indigo-700 hover:border-indigo-700
                         transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={`${project.title} demo`}
            >
              Demo
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M2 9L9 2M9 2H4M9 2V7" />
              </svg>
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase
                       text-indigo-500 hover:text-indigo-400 transition-colors duration-150
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Detay
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M2 8L8 2M8 2H4M8 2V6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Normal Card (Proje 02+) ──────────────────────────────────────────────────

function NormalCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const config = STATUS_CONFIG[project.status as ProjectStatus] ?? STATUS_CONFIG.active;
  const num = String(index + 1).padStart(2, "0");
  const borderLeftColor =
    project.status === "active" ? "#6366f1" :
    project.status === "completed" ? "#10b981" : "#f59e0b";

  return (
    <article
      className="group/p relative h-full flex items-start gap-4 px-5 py-5 rounded-xl
                 border border-feza-border bg-feza-card
                 border-l-[3px] hover:border-feza-border-md
                 hover:shadow-[0_10px_32px_rgba(99,102,241,0.08)]
                 transition-all duration-300"
      style={{ borderLeftColor }}
    >
      {/* Full-card link */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10 rounded-xl focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-indigo-400
                   focus-visible:ring-offset-2 focus-visible:ring-offset-feza-bg"
        aria-label={`${project.title} proje detayına git`}
      />

      {/* Large number */}
      <span
        className="font-orbitron font-black leading-none select-none flex-shrink-0 mt-0.5"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: config.numColor }}
        aria-hidden
      >
        {num}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.status === "active" ? "bg-emerald-500 animate-pulse" :
              project.status === "completed" ? "bg-indigo-500" : "bg-amber-500"
            }`}
            aria-hidden
          />
          <span className="font-mono text-[9px] tracking-[2px] uppercase text-feza-muted">
            {config.label}
          </span>
          <span className="font-mono text-[9px] text-feza-faint">{project.year}</span>
        </div>

        <h3
          className="font-orbitron font-bold text-sm sm:text-base text-feza-text leading-tight
                     group-hover/p:text-indigo-600 dark:group-hover/p:text-indigo-400
                     transition-colors duration-200"
        >
          {project.title}
        </h3>

        <p className="font-mono text-xs text-feza-secondary leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags (first 3) */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-light" lang="en">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="relative z-20 flex items-center gap-2 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded
                         font-mono text-[9px] tracking-widest uppercase
                         text-feza-muted border border-feza-border bg-feza-card
                         hover:text-feza-text hover:border-feza-border-md
                         transition-all duration-150
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={`${project.title} GitHub`}
            >
              <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Repo
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded
                         font-mono text-[9px] tracking-widest uppercase
                         text-white bg-indigo-600 border border-indigo-600
                         hover:bg-indigo-700 transition-all duration-150
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={`${project.title} demo`}
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Main Grid Component ───────────────────────────────────────────────────────

export default function MagazineProjectGrid() {
  const [featured, ...rest] = projects;
  const gridContainer = useMotionSafe(staggerContainer(0.08));
  const cardVariant   = useMotionSafe(slideInUp);
  const inFade        = useMotionSafe(fadeIn);

  return (
    <div className="space-y-4">
      {/* Featured (Project 01) */}
      <FeaturedRow project={featured} index={0} />

      {/* Normal cards — 2 column grid */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {rest.map((project, i) => (
          <motion.div key={project.id} variants={cardVariant}>
            <NormalCard project={project} index={i + 1} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer bar — "coming soon" */}
      <motion.div
        variants={inFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex items-center justify-center py-12 rounded-xl overflow-hidden
                   border-2 border-dashed border-feza-border bg-feza-card/60 backdrop-blur-sm"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.08), transparent 70%)",
          }}
        />
        <div className="relative flex flex-col items-center gap-2 text-center">
          <span className="flex items-center gap-2 font-mono text-[9px] tracking-[3px] uppercase text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" aria-hidden />
            Yakında
          </span>
          <p className="font-mono text-sm text-feza-faint max-w-xs">
            Yeni projeler hazırlanıyor. Kolektifin bir sonraki adımı geliyor.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
