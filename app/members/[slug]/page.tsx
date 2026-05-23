import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getMemberBySlug, getProjectsForMember, members } from "@/lib/data";

// ─── Static Params ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Üye Bulunamadı" };
  return {
    title: `${member.name} | Kurucu Ortak`,
    description: member.bio,
  };
}

// ─── Icons ────────────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="GitHub">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] tracking-widest uppercase text-[rgba(0,200,255,0.55)]">
        {label}
      </span>
      <div className="flex-1 h-px bg-[rgba(0,200,255,0.12)]" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const memberProjects = getProjectsForMember(member.slug);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* BG radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 30% 30%, rgba(0,200,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">

        {/* ── Back nav ── */}
        <Link
          href="/#founders"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase
                     mb-12 transition-colors duration-300 text-feza-muted hover:text-[#00c8ff] group"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10.5 7H3.5M3.5 7L7 3.5M3.5 7L7 10.5" />
          </svg>
          <span className="group-hover:-translate-x-0.5 transition-transform duration-300">
            Kolektife Dön
          </span>
        </Link>

        {/* ══════════════════════════════════════════════════════════
            PROFILE HEADER
        ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 md:gap-16 mb-16">

          {/* Left: Avatar + social links */}
          <div className="flex flex-col items-center md:items-start gap-5">

            {/* Avatar */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-full blur-xl opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,200,255,0.4) 0%, transparent 70%)" }}
                aria-hidden
              />
              <div
                className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full
                            bg-gradient-to-br ${member.avatarGradient}
                            flex items-center justify-center
                            shadow-[0_0_40px_rgba(0,200,255,0.2)]`}
              >
                <span className="font-orbitron font-black text-white text-3xl md:text-4xl tracking-wide drop-shadow-lg">
                  {member.initials}
                </span>
              </div>
              <div
                className="absolute -inset-1 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(0,200,255,0.3)" }}
                aria-hidden
              />
              <div
                className="absolute -inset-3 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(0,200,255,0.08)" }}
                aria-hidden
              />
            </div>

            {/* Social links */}
            <div className="flex md:flex-col gap-3 mt-1">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm
                             font-mono text-[10px] tracking-widest uppercase transition-all duration-200
                             text-feza-muted border border-feza-border
                             hover:text-[#00c8ff] hover:border-[rgba(0,200,255,0.4)] hover:bg-[rgba(0,200,255,0.05)]"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm
                             font-mono text-[10px] tracking-widest uppercase transition-all duration-200
                             text-feza-muted border border-feza-border
                             hover:text-[#00c8ff] hover:border-[rgba(0,200,255,0.4)] hover:bg-[rgba(0,200,255,0.05)]"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: Name, bio, quote */}
          <div className="space-y-6 md:pt-2">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[rgba(0,200,255,0.6)]">
                {member.role}
              </span>
            </div>

            <h1
              className="font-orbitron font-bold text-white leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                textShadow: "0 0 30px rgba(0,200,255,0.1)",
              }}
            >
              {member.name}
            </h1>

            <div
              className="h-px max-w-sm"
              style={{ background: "linear-gradient(90deg, rgba(0,200,255,0.4), transparent)" }}
            />

            <p
              className="font-rajdhani text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(218,228,240,0.7)", lineHeight: 1.85 }}
            >
              {member.bio}
            </p>

            {member.quote && (
              <blockquote
                className="relative pl-5 py-1"
                style={{ borderLeft: "2px solid rgba(0,200,255,0.35)" }}
              >
                <p
                  className="font-mono text-sm italic leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  &ldquo;{member.quote}&rdquo;
                </p>
              </blockquote>
            )}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SKILLS
        ══════════════════════════════════════════════════════════ */}
        <section className="mb-14" aria-label="Teknik Yetkinlikler">
          <SectionLabel label="// Teknik Yetkinlikler" />
          <div className="mt-6 flex flex-wrap gap-3">
            {member.skills.map((skill, i) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all duration-200
                           cursor-default border border-[rgba(0,200,255,0.15)] bg-[rgba(0,200,255,0.04)]
                           hover:border-[rgba(0,200,255,0.4)] hover:bg-[rgba(0,200,255,0.08)]
                           hover:shadow-[0_0_12px_rgba(0,200,255,0.1)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background:
                      i % 3 === 0 ? "#00c8ff" : i % 3 === 1 ? "#818cf8" : "#34d399",
                  }}
                  aria-hidden
                />
                <span
                  className="font-rajdhani font-medium text-sm"
                  style={{ color: "rgba(218,228,240,0.85)" }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════════════════════ */}
        {memberProjects.length > 0 && (
          <section className="mb-14" aria-label="Katıldığı Projeler">
            <SectionLabel label="// Katıldığı Projeler" />
            <div className="mt-6 space-y-4">
              {memberProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative flex items-start gap-5 px-6 py-5 rounded-xl
                             transition-all duration-200
                             border border-feza-border bg-feza-card
                             hover:border-[rgba(0,200,255,0.3)] hover:shadow-[0_0_20px_rgba(0,200,255,0.08)]"
                >
                  {/* status dot */}
                  <div className="mt-1.5 shrink-0">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: project.status === "active" ? "#00c8ff" : "#10b981",
                        boxShadow: `0 0 8px ${project.status === "active" ? "#00c8ff" : "#10b981"}`,
                        animation:
                          project.status === "active"
                            ? "statusPulse 2s ease-in-out infinite"
                            : "none",
                      }}
                      aria-hidden
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="font-orbitron font-bold text-white text-base md:text-lg"
                        style={{ textShadow: "0 0 20px rgba(0,200,255,0.1)" }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="shrink-0 font-mono text-[10px] tracking-wider uppercase"
                        style={{ color: "var(--muted-2)" }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <p
                      className="font-rajdhani text-sm"
                      style={{ color: "var(--muted)", lineHeight: 1.75 }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className="tag-cyan">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            HACKATHONS
        ══════════════════════════════════════════════════════════ */}
        {member.hackathons && member.hackathons.length > 0 && (
          <section className="mb-14" aria-label="Hackathon & Etkinlikler">
            <SectionLabel label="// Hackathon & Etkinlikler" />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {member.hackathons.map((event, i) => (
                <div
                  key={event}
                  className="flex items-center gap-3 px-5 py-4 rounded-sm
                             border border-feza-border bg-feza-card"
                >
                  <span
                    className="font-mono text-[10px] opacity-30"
                    style={{ color: "var(--cyan)" }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-rajdhani font-medium text-sm"
                    style={{ color: "var(--text)" }}
                  >
                    {event}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Other members ── */}
        <div
          className="mt-16 pt-12"
          style={{ borderTop: "1px solid rgba(25,40,64,0.6)" }}
        >
          <p
            className="font-mono text-[10px] tracking-widest uppercase mb-6"
            style={{ color: "var(--muted-2)" }}
          >
            Diğer Kurucu Ortaklar
          </p>
          <div className="flex flex-wrap gap-3">
            {members
              .filter((m) => m.slug !== member.slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/members/${m.slug}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm
                             font-rajdhani text-sm font-medium transition-all duration-200
                             text-feza-muted border border-feza-border
                             hover:border-[rgba(0,200,255,0.35)] hover:text-feza-text
                             hover:bg-[rgba(0,200,255,0.04)]"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${m.avatarGradient}
                                flex items-center justify-center shrink-0`}
                  >
                    <span className="font-orbitron font-bold text-white text-[8px]">
                      {m.initials[0]}
                    </span>
                  </div>
                  <span>{m.name}</span>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
