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
  const odakYilFacts = [
    { label: "Odak", value: project.tags[0] },
    { label: "Yıl", value: String(project.year) },
  ];

  return (
    <article className="card-base group relative h-full rounded-lg overflow-hidden bg-feza-card">
      {/* ── Left accent bar ── */}
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
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[10px] tracking-widest text-feza-faint"
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
              className="font-orbitron font-bold text-xl md:text-2xl text-feza-text
                         group-hover:text-cyan-700 dark:group-hover:text-cyan-400
                         transition-colors duration-300 leading-tight"
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
                           text-feza-muted-xs border border-feza-border bg-feza-card
                           hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50
                           dark:hover:bg-blue-950/40 dark:hover:border-blue-800
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
                           dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-400
                           dark:hover:bg-blue-950/60
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
                        bg-cyan-50/70 border border-cyan-100
                        dark:bg-cyan-950/30 dark:border-cyan-900/50"
            style={{ borderLeft: "3px solid #06b6d4" }}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-500 mt-0.5 shrink-0">
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
              { label: "Problem", value: project.caseStudy.problem },
              { label: "Yaklaşım", value: project.caseStudy.approach },
              { label: "Çıktı", value: project.caseStudy.outcome },
            ].map((item) => (
              <div key={item.label} className="bg-feza-card px-4 py-4">
                <p className="font-mono text-[10px] tracking-widest uppercase text-cyan-600">
                  {item.label}
                </p>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-feza-secondary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-px rounded-lg border border-feza-border bg-feza-border sm:grid-cols-3">
          {/* Odak */}
          <div className="bg-feza-surface-2 px-4 py-3 rounded-tl-lg rounded-bl-lg sm:rounded-bl-none sm:rounded-tr-none">
            <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
              {odakYilFacts[0].label}
            </p>
            <p className="mt-1 truncate font-outfit text-sm font-semibold text-feza-secondary">
              {odakYilFacts[0].value}
            </p>
          </div>

          {/* Ekip — interactive popover */}
          <TeamPopover
            members={teamMembers}
            label="Ekip"
            value={`${teamSize} ortak`}
          />

          {/* Yıl */}
          <div className="bg-feza-surface-2 px-4 py-3 rounded-br-lg rounded-tr-lg sm:rounded-tl-none sm:rounded-bl-none">
            <p className="font-mono text-[9px] tracking-widest uppercase text-feza-muted">
              {odakYilFacts[1].label}
            </p>
            <p className="mt-1 truncate font-outfit text-sm font-semibold text-feza-secondary">
              {odakYilFacts[1].value}
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
    </article>
  );
}
