import Link from "next/link";
import type { Project } from "@/lib/data";
import { ExternalLinkIcon, GitHubIcon, StatusDot } from "@/components/ui";

// ─── Icons ────────────────────────────────────────────────────────────────────

// ─── Status config ────────────────────────────────────────────────────────────

const statusConfig: Record<
  Project["status"],
  { label: string; tone: "active" | "planning" | "completed" }
> = {
  active:    { label: "Aktif",       tone: "active" },
  planning:  { label: "Planlamada",  tone: "planning" },
  completed: { label: "Tamamlandı",  tone: "completed" },
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
    <article className="card-base group relative rounded-lg overflow-hidden bg-white">
      {/* ── Left indigo accent bar ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
        style={{
          background:
            "linear-gradient(180deg, #06b6d4 0%, #4f46e5 52%, #10b981 100%)",
        }}
        aria-hidden
      />

      {/* ── Corner radial on hover ── */}
      <div
        className="absolute top-0 right-0 w-56 h-56 opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(6,182,212,0.07) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <div className="pl-8 pr-7 py-7 md:py-8 space-y-5">
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            {/* Number + status + year */}
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[10px] tracking-widest text-slate-300"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="font-mono text-[10px] tracking-wider uppercase
                           flex items-center gap-2 text-slate-500"
              >
                <StatusDot tone={status.tone} pulse={project.status === "active"} className="h-1.5 w-1.5" />
                {status.label}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-slate-300">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-orbitron font-bold text-xl md:text-2xl text-slate-900
                         group-hover:text-cyan-900 transition-colors duration-300 leading-tight"
            >
              {project.title}
            </h3>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0 mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-mono text-[10px] tracking-widest uppercase
                           transition-all duration-200
                           text-slate-500 border border-slate-200 bg-white
                           hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50"
              >
                <GitHubIcon size={13} />
                <span>Repo</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-mono text-[10px] tracking-widest uppercase
                           transition-all duration-200
                           text-indigo-600 border border-indigo-200 bg-indigo-50
                           hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-sm"
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
            className="flex items-start gap-3 px-4 py-3 rounded-lg
                        bg-cyan-50/70 border border-cyan-100"
            style={{ borderLeft: "3px solid #06b6d4" }}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-500 mt-0.5 shrink-0">
              {"//"}
            </span>
            <p className="font-mono text-xs text-slate-600 leading-[1.75]">
              {project.highlight}
            </p>
          </div>
        )}

        {/* ── Description ── */}
        <p className="font-outfit text-base text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-light">
              {tag}
            </span>
          ))}
        </div>

        {/* ── Contributing members ── */}
        {members.length > 0 && (
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400">
              Katkıda Bulunanlar
            </span>
            <div className="flex items-center gap-3">
              {members.map((m) => (
                <Link
                  key={m.slug}
                  href={`/members/${m.slug}`}
                  className="font-outfit text-sm text-slate-500
                             hover:text-indigo-600 transition-colors duration-200"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
