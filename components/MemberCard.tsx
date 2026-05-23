"use client";

import Link from "next/link";
import type { Member } from "@/lib/data";

// ─── Icon Components ──────────────────────────────────────────────────────────

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="LinkedIn"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="GitHub"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
    </svg>
  );
}

// ─── Member Card ──────────────────────────────────────────────────────────────

interface MemberCardProps {
  member: Member;
  index?: number;
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  const animationDelay = `${index * 100}ms`;

  return (
    <Link href={`/members/${member.slug}`} className="block group">
      <article
        className="card-base relative flex flex-col items-center gap-5 p-6 rounded-xl
                   cursor-pointer overflow-hidden select-none"
        style={{
          animationDelay,
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {/* ── Corner accent ── */}
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-0
                     group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
        >
          <div
            className="absolute top-3 right-3 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(0,200,255,0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ── Sequential number ── */}
        <span
          className="absolute top-3 left-4 font-mono text-[10px] tracking-widest opacity-30"
          style={{ color: "var(--cyan)" }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ── Avatar ── */}
        <div className="relative mt-3">
          {/* Outer glow ring - visible on hover */}
          <div
            className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100
                       transition-opacity duration-400 blur-sm"
            style={{ background: "rgba(0,200,255,0.15)" }}
            aria-hidden
          />

          {/* Avatar circle */}
          <div
            className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${member.avatarGradient}
                        flex items-center justify-center shadow-lg
                        group-hover:shadow-[0_0_20px_rgba(0,200,255,0.25)]
                        transition-shadow duration-400`}
          >
            <span className="font-orbitron font-bold text-white text-base tracking-wide drop-shadow">
              {member.initials}
            </span>
          </div>

          {/* Cyan ring border on hover */}
          <div
            className="absolute inset-0 rounded-full border border-[#00c8ff]/0
                       group-hover:border-[#00c8ff]/50 scale-110
                       transition-all duration-400"
            aria-hidden
          />
        </div>

        {/* ── Name & Role ── */}
        <div className="text-center space-y-1.5">
          <h3
            className="font-rajdhani font-bold text-lg text-feza-text leading-tight
                       group-hover:text-white transition-colors duration-300"
          >
            {member.name}
          </h3>
          <p
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: "rgba(0,200,255,0.7)" }}
          >
            {member.role}
          </p>
        </div>

        {/* ── Skills preview (top 3) ── */}
        <div className="flex flex-wrap justify-center gap-1.5 px-2">
          {member.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="tag-cyan">
              {skill}
            </span>
          ))}
        </div>

        {/* ── Social links ── */}
        <div className="flex items-center gap-4 mt-1">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="transition-colors duration-200 hover:scale-110 transition-transform"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
              aria-label={`${member.name} - LinkedIn`}
            >
              <LinkedInIcon />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="transition-colors duration-200 hover:scale-110 transition-transform"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
              aria-label={`${member.name} - GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
        </div>

        {/* ── View profile CTA ── */}
        <div
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest
                     opacity-0 group-hover:opacity-100 -mt-1 mb-1
                     transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{ color: "rgba(0,200,255,0.8)" }}
        >
          <span>PROFİLİ GÖR</span>
          <ArrowIcon />
        </div>

        {/* ── Bottom border glow line ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0
                     group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,200,255,0.5), transparent)",
          }}
          aria-hidden
        />
      </article>
    </Link>
  );
}
