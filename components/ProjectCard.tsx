"use client";

import Link from "next/link";
import type { Project } from "@/lib/data";

// ─── Icons ───────────────────────────────────────────────────────────────────

function ExternalLinkIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" />
    </svg>
  );
}

function GitHubSmallIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// ─── Status label helper ──────────────────────────────────────────────────────

const statusConfig: Record<
  Project["status"],
  { label: string; className: string }
> = {
  active: { label: "Aktif", className: "status-active" },
  planning: { label: "Planlamada", className: "status-planning" },
  completed: { label: "Tamamlandı", className: "status-completed" },
};

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index?: number;
  members?: { name: string; slug: string; initials: string }[];
}

export default function ProjectCard({
  project,
  index = 0,
  members = [],
}: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <article
      className="card-base group relative rounded-xl overflow-hidden"
      style={{ background: "var(--card)" }}
    >
      {/* ── Left accent bar ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--cyan), transparent)",
          opacity: 0.6,
        }}
        aria-hidden
      />

      {/* ── Top-right corner mesh ── */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,200,255,0.2) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="p-7 md:p-8 space-y-6">
        {/* ── Header row ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {/* Project number + status */}
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: "rgba(0,200,255,0.35)" }}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-mono text-[10px] tracking-wider uppercase flex items-center ${status.className}`}
                style={{ color: "var(--muted)" }}
              >
                {status.label}
              </span>
              <span
                className="font-mono text-[10px] tracking-widest"
                style={{ color: "var(--muted-2)" }}
              >
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-orbitron font-bold text-xl md:text-2xl text-feza-text
                         group-hover:text-white transition-colors duration-300 leading-tight"
            >
              {project.title}
            </h3>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2 shrink-0 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-[10px]
                           tracking-widest uppercase transition-all duration-200
                           hover:border-[#00c8ff]/40"
                style={{
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--cyan)";
                  e.currentTarget.style.borderColor = "rgba(0,200,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <GitHubSmallIcon />
                <span>Repo</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-[10px]
                           tracking-widest uppercase transition-all duration-200"
                style={{
                  color: "var(--cyan)",
                  border: "1px solid rgba(0,200,255,0.3)",
                  background: "rgba(0,200,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,200,255,0.1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(0,200,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,200,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span>Demo</span>
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        {/* ── Highlight callout ── */}
        {project.highlight && (
          <div
            className="flex items-start gap-3 px-4 py-3 rounded-sm"
            style={{
              background: "rgba(0,200,255,0.04)",
              border: "1px solid rgba(0,200,255,0.12)",
              borderLeft: "3px solid rgba(0,200,255,0.5)",
            }}
          >
            <span
              className="font-mono text-[10px] tracking-widest uppercase mt-0.5 shrink-0"
              style={{ color: "rgba(0,200,255,0.6)" }}
            >
              {"//"}
            </span>
            <p
              className="font-mono text-xs leading-relaxed"
              style={{ color: "var(--muted)", lineHeight: 1.7 }}
            >
              {project.highlight}
            </p>
          </div>
        )}

        {/* ── Description ── */}
        <p
          className="font-rajdhani text-base leading-relaxed"
          style={{ color: "var(--muted)", lineHeight: 1.75 }}
        >
          {project.description}
        </p>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-cyan">
              {tag}
            </span>
          ))}
        </div>

        {/* ── Footer: contributing members ── */}
        {members.length > 0 && (
          <div
            className="flex items-center gap-3 pt-4"
            style={{ borderTop: "1px solid rgba(25,40,64,0.6)" }}
          >
            <span
              className="font-mono text-[10px] tracking-widest uppercase"
              style={{ color: "var(--muted-2)" }}
            >
              Katkıda Bulunanlar
            </span>
            <div className="flex items-center gap-2">
              {members.map((m) => (
                <Link
                  key={m.slug}
                  href={`/members/${m.slug}`}
                  className="flex items-center gap-1.5 group/member"
                >
                  <span
                    className="font-mono text-[10px] tracking-wide transition-colors duration-200
                               group-hover/member:text-[#00c8ff]"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
