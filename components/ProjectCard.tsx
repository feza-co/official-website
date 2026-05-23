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
  teamSize?: number;
}

export default function ProjectCard({
  project,
  index = 0,
  teamSize = project.members.length,
}: ProjectCardProps) {
  const status = statusConfig[project.status];
  const projectFacts = [
    { label: "Odak", value: project.tags[0] },
    { label: "Ekip", value: `${teamSize} ortak` },
    { label: "Yıl", value: String(project.year) },
  ];

  return (
    <article className="card-base group relative h-full rounded-lg overflow-hidden bg-white">
      {/* ── Left indigo accent bar ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
        style={{
          background:
            "linear-gradient(180deg, #06b6d4 0%, #2563eb 52%, #10b981 100%)",
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
                className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-mono text-[10px] tracking-widest uppercase
                           transition-all duration-200
                           text-slate-500 border border-slate-200 bg-white
                           hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
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
                className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-mono text-[10px] tracking-widest uppercase
                           transition-all duration-200
                           text-blue-600 border border-blue-200 bg-blue-50
                           hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
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

        {/* ── Case study snapshot ── */}
        {project.caseStudy && (
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-3">
            {[
              { label: "Problem", value: project.caseStudy.problem },
              { label: "Yaklaşım", value: project.caseStudy.approach },
              { label: "Çıktı", value: project.caseStudy.outcome },
            ].map((item) => (
              <div key={item.label} className="bg-white px-4 py-4">
                <p className="font-mono text-[10px] tracking-widest uppercase text-cyan-600">
                  {item.label}
                </p>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-slate-600">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {projectFacts.map((fact) => (
            <div key={fact.label} className="bg-slate-50 px-4 py-3">
              <p className="font-mono text-[9px] tracking-widest uppercase text-slate-400">
                {fact.label}
              </p>
              <p className="mt-1 truncate font-outfit text-sm font-semibold text-slate-700">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-light">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}
