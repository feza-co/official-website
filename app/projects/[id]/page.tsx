import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectById,
  getMembersForProject,
  projects,
} from "@/lib/data";
import {
  ExternalLinkIcon,
  GitHubIcon,
  SectionLabel,
  StatusDot,
} from "@/components/ui";
import BackButton from "@/components/BackButton";

// ─── Static Params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// ─── Dynamic Metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Proje Bulunamadı" };
  return {
    title: project.title,
    description: project.description,
  };
}

const statusConfig: Record<
  "active" | "planning" | "completed",
  { label: string; tone: "active" | "planning" | "completed" }
> = {
  active:    { label: "Aktif",       tone: "active"    },
  planning:  { label: "Planlamada",  tone: "planning"  },
  completed: { label: "Tamamlandı",  tone: "completed" },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const teamMembers = getMembersForProject(project.id);
  const status = statusConfig[project.status];

  return (
    <div className="min-h-screen bg-feza-bg pt-24 pb-16 sm:pb-20">
      {/* Subtle top tint */}
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 70% 25%, rgba(99,102,241,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-10">

        {/* F09: history.back() — kaydırdığı konumu korur; fallback /#projects */}
        <BackButton fallbackHref="/#projects" label="Projelere Dön" />

        {/* ══════════════════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════════════════ */}
        <header className="space-y-6 mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] tracking-widest uppercase">
            <span className="text-[#2563eb] dark:text-indigo-400">{"// Proje"}</span>
            <span
              className="flex items-center gap-2 text-feza-muted-xs"
            >
              <StatusDot tone={status.tone} pulse={project.status === "active"} className="h-1.5 w-1.5" />
              {status.label}
            </span>
            <span className="text-feza-faint">{project.year}</span>
          </div>

          <h1
            className="font-orbitron font-bold text-feza-text leading-tight break-words"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            {project.title}
          </h1>

          {/* Accent rule */}
          <div className="h-px max-w-md bg-gradient-to-r from-indigo-400 via-cyan-300 to-transparent" />

          {project.highlight && (
            <p className="font-mono text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed max-w-2xl">
              <span className="text-[#2563eb] dark:text-indigo-400 mr-2">{"//"}</span>
              {project.highlight}
            </p>
          )}

          <p className="font-outfit text-base sm:text-lg text-feza-secondary leading-relaxed max-w-2xl">
            {project.longDescription}
          </p>

          {/* Action buttons */}
          {(project.github || project.demo) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 px-5 py-3 rounded-lg
                             font-mono text-xs tracking-widest uppercase transition-all duration-300
                             text-feza-text border border-feza-border bg-feza-card
                             hover:border-feza-border-md hover:bg-feza-surface-2 hover:-translate-y-0.5
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <GitHubIcon size={14} />
                  <span>GitHub Repo</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 px-5 py-3 rounded-lg
                             font-mono text-xs tracking-widest uppercase transition-all duration-300
                             text-white bg-indigo-600 border border-indigo-600
                             hover:bg-indigo-700 hover:border-indigo-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <span>Canlı Demo</span>
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          )}
        </header>

        {/* ══════════════════════════════════════════════════════════
            CASE STUDY
        ══════════════════════════════════════════════════════════ */}
        {project.caseStudy && (
          <section className="mb-14" aria-label="Vaka Çalışması">
            <SectionLabel label="// Vaka Çalışması" />
            <div className="mt-6 grid grid-cols-1 gap-px rounded-xl border border-feza-border bg-feza-border overflow-hidden md:grid-cols-3">
              {[
                { label: "Problem",  value: project.caseStudy.problem,  accent: "text-rose-700 dark:text-rose-400"    },
                { label: "Yaklaşım", value: project.caseStudy.approach, accent: "text-[#2563eb] dark:text-indigo-400"  },
                { label: "Çıktı",    value: project.caseStudy.outcome,  accent: "text-emerald-700 dark:text-emerald-400" },
              ].map((item) => (
                <div key={item.label} className="bg-feza-card px-5 py-5">
                  <p className={`font-mono text-[10px] tracking-widest uppercase ${item.accent}`}>
                    {item.label}
                  </p>
                  <p className="mt-2 font-outfit text-sm leading-relaxed text-feza-secondary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            TECH STACK
        ══════════════════════════════════════════════════════════ */}
        <section className="mb-14" aria-label="Teknoloji Yığını">
          <SectionLabel label="// Teknoloji Yığını" />
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-light" lang="en">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            TEAM
        ══════════════════════════════════════════════════════════ */}
        {teamMembers.length > 0 && (
          <section className="mb-14" aria-label="Ekip">
            <SectionLabel label={`// Ekip · ${teamMembers.length} ortak`} />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {teamMembers.map((m) => (
                <Link
                  key={m.slug}
                  href={`/members/${m.slug}`}
                  className="group flex cursor-pointer items-center gap-3 px-4 py-3.5 rounded-lg
                             border border-feza-border bg-feza-card
                             transition-all duration-200
                             hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-sm
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <div
                    className={`relative w-9 h-9 shrink-0 rounded-full overflow-hidden bg-gradient-to-br ${m.avatarGradient}
                                flex items-center justify-center`}
                  >
                    {m.avatar ? (
                      <Image src={m.avatar} alt={m.name} fill sizes="36px" className="object-cover" />
                    ) : (
                      <span className="font-orbitron font-bold text-white text-[11px]">
                        {m.initials}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-outfit text-sm font-medium text-feza-text truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {m.name}
                    </p>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-feza-muted-xs truncate">
                      {m.role}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════════
            OTHER PROJECTS
        ══════════════════════════════════════════════════════════ */}
        <div className="mt-16 pt-12 border-t border-feza-border">
          <p className="font-mono text-[10px] tracking-widest uppercase text-feza-muted-xs mb-6">
            Diğer Projeler
          </p>
          <div className="flex flex-wrap gap-2.5">
            {projects
              .filter((p) => p.id !== project.id)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-lg
                             font-outfit text-sm font-medium transition-all duration-200
                             text-feza-secondary border border-feza-border bg-feza-card
                             hover:border-indigo-200 hover:text-indigo-700 dark:hover:border-indigo-800 dark:hover:text-indigo-400
                             hover:shadow-sm focus:outline-none
                             focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0b]"
                >
                  <span className="font-mono text-[10px] text-feza-faint">
                    {String(projects.findIndex((x) => x.id === p.id) + 1).padStart(2, "0")}
                  </span>
                  <span>{p.title}</span>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
