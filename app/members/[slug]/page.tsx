import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getMemberBySlug, getProjectsForMember, members } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, SectionLabel, StatusDot } from "@/components/ui";
import BackButton from "@/components/BackButton";

// ─── Static Params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

// ─── Dynamic Metadata ──────────────────────────────────────────────────────────

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

// ─── Page ──────────────────────────────────────────────────────────────────────

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
    <div className="min-h-screen bg-feza-bg pt-24 pb-16 sm:pb-20">
      {/* Very subtle indigo tint at top */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 30% 25%, rgba(99,102,241,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-10">

        {/* F09+F10: history.back() + hover rengi indigo ile hizalandı */}
        <BackButton fallbackHref="/#founders" label="Kolektife Dön" />

        {/* ══════════════════════════════════════════════════════════
            PROFILE HEADER
        ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 sm:gap-10 md:gap-16 mb-12 sm:mb-16">

          {/* ── Left: Avatar + social links ── */}
          <div className="flex flex-col items-center md:items-start gap-5">

            {/* Avatar */}
            <div className="relative">
              <div
                className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden
                            bg-gradient-to-br ${member.avatarGradient}
                            flex items-center justify-center
                            shadow-xl shadow-black/20`}
              >
                {member.avatar ? (
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 144px, 176px"
                    priority
                  />
                ) : (
                  <span className="font-orbitron font-black text-white text-3xl md:text-4xl tracking-wide drop-shadow-lg">
                    {member.initials}
                  </span>
                )}
              </div>
              <div
                className="absolute -inset-2 rounded-full border border-indigo-200/60 dark:border-indigo-700/40 pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute -inset-4 rounded-full border border-feza-border/50 pointer-events-none"
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
                  className="flex cursor-pointer items-center gap-2.5 px-4 py-2.5 rounded-lg
                             font-mono text-[10px] tracking-widest uppercase transition-all duration-200
                             text-feza-muted-xs border border-feza-border bg-feza-card
                             hover:text-cyan-700 hover:border-cyan-200 hover:bg-cyan-50
                             dark:hover:text-cyan-400 dark:hover:border-cyan-900 dark:hover:bg-cyan-950/30
                             hover:shadow-sm focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <LinkedInIcon />
                  <span lang="en">LinkedIn</span>
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2.5 px-4 py-2.5 rounded-lg
                             font-mono text-[10px] tracking-widest uppercase transition-all duration-200
                             text-feza-muted-xs border border-feza-border bg-feza-card
                             hover:text-cyan-700 hover:border-cyan-200 hover:bg-cyan-50
                             dark:hover:text-cyan-400 dark:hover:border-cyan-900 dark:hover:bg-cyan-950/30
                             hover:shadow-sm focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <GitHubIcon />
                  <span lang="en">GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* ── Right: Name, bio, quote ── */}
          <div className="space-y-6 md:pt-2">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#2563eb] dark:text-indigo-400">
                {member.role}
              </span>
            </div>

            <h1
              className="font-orbitron font-bold text-feza-text leading-tight break-words"
              style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
            >
              {member.name}
            </h1>

            {/* Accent rule */}
            <div className="h-px max-w-sm bg-gradient-to-r from-indigo-400 via-indigo-200 to-transparent" />

            <p className="font-outfit text-base md:text-lg text-feza-secondary leading-[1.85]">
              {member.bio}
            </p>

            {member.quote && (
              <blockquote className="relative pl-5 py-1 border-l-2 border-indigo-400">
                <p className="font-mono text-sm italic text-feza-muted-xs leading-relaxed">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </blockquote>
            )}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SKILLS
        ══════════════════════════════════════════════════════════ */}
        {member.skills.length > 0 && (
          <section className="mb-14" aria-label="Uzmanlık Alanları">
            <SectionLabel label="// Uzmanlık Alanları" />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  lang="en"
                  className="inline-flex items-center gap-2 rounded-lg border border-feza-border bg-feza-card px-4 py-2
                             font-mono text-xs tracking-wider text-feza-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden />
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════════════════════ */}
        {memberProjects.length > 0 && (
          <section className="mb-14" aria-label="Katıldığı Projeler">
            <SectionLabel label="// Katıldığı Projeler" />
            <div className="mt-6 space-y-4">
              {memberProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group relative flex items-start gap-4 sm:gap-5 px-4 sm:px-6 py-5 rounded-lg
                             transition-all duration-200
                             border border-feza-border bg-feza-card
                             hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-sm
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  {/* Status dot */}
                  <div className="mt-1.5 shrink-0">
                    {/* F05: planning dahil tüm durumlar doğru tone ile iletiliyor */}
                  <StatusDot
                      tone={project.status}
                      pulse={project.status === "active"}
                    />
                  </div>

                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-orbitron font-bold text-feza-text text-base md:text-lg group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[10px] tracking-wider uppercase text-feza-muted-xs">
                        {project.year}
                      </span>
                    </div>
                    <p className="font-outfit text-sm text-feza-secondary leading-[1.75]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span key={tag} lang="en" className="tag-light">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            HACKATHONS & EVENTS
        ══════════════════════════════════════════════════════════ */}
        {member.hackathons && member.hackathons.length > 0 && (
          <section className="mb-14" aria-label="Hackathon & Etkinlikler">
            <SectionLabel label="// Hackathon & Etkinlikler" />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {member.hackathons.map((event, i) => (
                <div
                  key={event}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg
                             border border-feza-border bg-feza-card"
                >
                  <span
                    className="font-mono text-[10px] text-feza-faint"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-outfit font-medium text-sm text-feza-secondary">
                    {event}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Other founders ── */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-feza-border">
          <p className="font-mono text-[10px] tracking-widest uppercase text-feza-muted mb-6">
            Diğer Kurucu Ortaklar
          </p>
          <div className="flex flex-wrap gap-3">
            {members
              .filter((m) => m.slug !== member.slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/members/${m.slug}`}
                  className="flex cursor-pointer items-center gap-2.5 px-4 py-2.5 rounded-lg
                             font-outfit text-sm font-medium transition-all duration-200
                             text-feza-secondary border border-feza-border bg-feza-card
                             hover:border-cyan-200 hover:text-cyan-700 hover:bg-cyan-50
                             dark:hover:border-cyan-900 dark:hover:text-cyan-400 dark:hover:bg-cyan-950/30
                             hover:shadow-sm focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <div
                    className={`relative w-5 h-5 rounded-full overflow-hidden bg-gradient-to-br ${m.avatarGradient}
                                flex items-center justify-center shrink-0`}
                  >
                    {m.avatar ? (
                      <Image
                        src={m.avatar}
                        alt={m.name}
                        fill
                        className="object-cover"
                        sizes="20px"
                      />
                    ) : (
                      <span className="font-orbitron font-bold text-white text-[8px]">
                        {m.initials[0]}
                      </span>
                    )}
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
