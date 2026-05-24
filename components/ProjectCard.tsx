import type { Project } from "@/lib/data";
import { getMembersForProject } from "@/lib/data";
import { ExternalLinkIcon, GitHubIcon, StatusDot } from "@/components/ui";
import TeamPopover from "@/components/TeamPopover";

const statusConfig: Record<
  Project["status"],
  { label: string; tone: "active" | "planning" | "completed" }
> = {
  active:    { label: "Aktif",       tone: "active" },
  planning:  { label: "Planlamada",  tone: "planning" },
  completed: { label: "Tamamlandı",  tone: "completed" },
};

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
  const teamMembers = getMembersForProject(project.id);

  return (
    <article
      className="group/p lift-on-hover relative h-full rounded-xl overflow-hidden
                 bg-feza-card border border-feza-border
                 shadow-[0_1px_2px_rgba(0,0,0,0.04)]
                 hover:border-indigo-200 dark:hover:border-indigo-800
                 hover:shadow-[0_22px_50px_rgba(99,102,241,0.10)]"
    >
      {/* ── Left accent bar ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
        style={{
          background:
            "linear-gradient(180deg, #06b6d4 0%, #2563eb 52%, #10b981 100%)",
        }}
        aria-hidden
      />

      {/* ── Subtle corner glow on hover ── */}
      <div
        className="absolute top-0 right-0 w-72 h-72 opacity-0 group-hover/p:opacity-100
                   transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(99,102,241,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* ── Subtle grid texture on hover ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover/p:opacity-100 transition-opacity duration-700 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 50% 80% at 100% 0%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 80% at 100% 0%, black, transparent 70%)",
        }}
      />

      <div className="relative pl-5 pr-4 sm:pl-8 sm:pr-7 py-6 sm:py-7 md:py-8 space-y-5">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div className="space-y-2.5 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span
                className="font-mono text-[10px] tracking-widest text-feza-faint
                           group-hover/p:text-indigo-400 transition-colors duration-300"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="font-mono text-[10px] tracking-wider uppercase
                           flex items-center gap-2 text-feza-muted-xs"
              >
                <StatusDot tone={status.tone} pulse={project.status === "active"} className="h-1.5 w-1.5" />
                {status.label}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-feza-faint">
                {project.year}
              </span>
            </div>

            <h3
              className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-feza-text
                         group-hover/p:text-indigo-700 dark:group-hover/p:text-indigo-400
                         transition-colors duration-300 leading-tight break-words"
            >
              {project.title}
            </h3>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0 sm:mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 rounded-lg
                           font-mono text-[10px] tracking-widest uppercase
                           transition-all duration-200
                           text-feza-muted-xs border border-feza-border bg-feza-card
                           hover:text-feza-text hover:border-feza-border-md hover:bg-feza-surface-2
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30"
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
                           text-white border bg-indigo-600 border-indigo-600
                           hover:bg-indigo-700 hover:border-indigo-700 hover:shadow-md hover:shadow-indigo-500/20
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/35"
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
            className="relative flex items-start gap-3 px-4 py-3 rounded-lg overflow-hidden
                        bg-indigo-50/60 border border-indigo-100
                        dark:bg-indigo-950/30 dark:border-indigo-900/50"
            style={{ borderLeft: "3px solid #6366f1" }}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500 mt-0.5 shrink-0">
              {"//"}
            </span>
            <p className="font-mono text-xs text-feza-secondary leading-[1.75]">
              {project.highlight}
            </p>
          </div>
        )}

        {/* ── Description ── */}
        <p className="font-outfit text-base text-feza-secondary leading-relaxed">
          {project.description}
        </p>

        {/* ── Case study snapshot ── */}
        {project.caseStudy && (
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-feza-border bg-feza-border sm:grid-cols-3">
            {[
              { label: "Problem",  value: project.caseStudy.problem,  accent: "text-rose-500"   },
              { label: "Yaklaşım", value: project.caseStudy.approach, accent: "text-indigo-500" },
              { label: "Çıktı",    value: project.caseStudy.outcome,  accent: "text-emerald-500"},
            ].map((item) => (
              <div key={item.label} className="bg-feza-card px-4 py-4">
                <p className={`font-mono text-[10px] tracking-widest uppercase ${item.accent}`}>
                  {item.label}
                </p>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-feza-secondary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ── Meta strip ── */}
        <div className="grid grid-cols-1 gap-px rounded-lg border border-feza-border bg-feza-border sm:grid-cols-3">
          <div className="bg-feza-surface-2 px-4 py-3 rounded-tl-lg rounded-bl-lg sm:rounded-bl-none sm:rounded-tr-none">
            <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
              Odak
            </p>
            <p className="mt-1 truncate font-outfit text-sm font-semibold text-feza-secondary">
              {project.tags[0]}
            </p>
          </div>

          <TeamPopover
            members={teamMembers}
            label="Ekip"
            value={`${teamSize} ortak`}
          />

          <div className="bg-feza-surface-2 px-4 py-3 rounded-br-lg rounded-tr-lg sm:rounded-tl-none sm:rounded-bl-none">
            <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
              Yıl
            </p>
            <p className="mt-1 truncate font-outfit text-sm font-semibold text-feza-secondary">
              {project.year}
            </p>
          </div>
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

      {/* ── Bottom shimmer line on hover ── */}
      <div
        className="absolute bottom-0 left-1 right-0 h-px opacity-0 group-hover/p:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, #6366f1 40%, #06b6d4 60%, transparent)",
        }}
        aria-hidden
      />
    </article>
  );
}
