import Link from "next/link";
import { projects, type Project } from "@/lib/data";

// LunaPath leads: first place at TUA Astro Hackathon 2026, and the one the
// collective is named after — feza, the old Turkish word for outer space.
const FEATURED_ID = "astro-hackathon";

const featured = projects.find((p) => p.id === FEATURED_ID) ?? projects[0];
const rest = projects.filter((p) => p.id !== featured.id);

const STATUS: Record<Project["status"], string> = {
  active: "geliştiriliyor",
  completed: "tamamlandı",
  planning: "planlamada",
};

function AwardMark({ award }: { award: string }) {
  return (
    <p className="flex items-center gap-2 text-[0.9375rem] font-semibold text-feza-accent">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="7" cy="5.2" r="3.6" />
        <path d="M4.6 8.4L3.6 13l3.4-1.8L10.4 13l-1-4.6" />
      </svg>
      {award}
    </p>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <div className="row-meta flex flex-wrap items-center gap-x-3 gap-y-1 md:block md:space-y-1.5">
      <span className="font-mono">{project.year}</span>
      <span className="inline-flex items-center gap-1.5 md:flex">
        {project.status === "active" && <span className="live-dot" aria-hidden />}
        <span className={project.status === "active" ? "text-feza-signal" : undefined}>
          {STATUS[project.status]}
        </span>
      </span>
      {project.demo && <span className="md:block">canlı demo</span>}
      {project.privateRepo && <span className="md:block">kaynak özel</span>}
    </div>
  );
}

function Tags({ tags, limit }: { tags: string[]; limit: number }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
      {tags.slice(0, limit).map((tag) => (
        <li key={tag} className="font-mono text-[0.8125rem] text-feza-muted" lang="en">
          {tag}
        </li>
      ))}
      {tags.length > limit && (
        <li className="font-mono text-[0.8125rem] text-feza-muted">
          +{tags.length - limit}
        </li>
      )}
    </ul>
  );
}

export default function ProjectGrid() {
  return (
    <div className="rows">
      {/* ── Featured: same row grammar, more vertical room and a bigger title ── */}
      <Link
        href={`/projects/${featured.id}`}
        className="row group grid gap-x-10 gap-y-4 py-10 md:grid-cols-[132px,1fr] md:py-14"
      >
        <Meta project={featured} />

        <div className="space-y-4">
          <h3 className="display text-[clamp(2rem,5vw,3.5rem)] text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
            {featured.title}
          </h3>

          {featured.award && <AwardMark award={featured.award} />}

          <p className="measure text-[1.0625rem] leading-[1.7] text-feza-secondary">
            {featured.description}
          </p>

          <Tags tags={featured.tags} limit={8} />
        </div>
      </Link>

      {/* ── The rest ────────────────────────────────────────────────────── */}
      {rest.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="row group grid gap-x-10 gap-y-3 py-8 md:grid-cols-[132px,1fr]"
        >
          <Meta project={project} />

          <div className="space-y-3">
            <h3 className="display text-[1.5rem] text-feza-text transition-colors duration-300 group-hover:text-feza-accent sm:text-[1.75rem]">
              {project.title}
            </h3>

            {project.award && <AwardMark award={project.award} />}

            <p className="measure text-[0.9875rem] leading-[1.7] text-feza-secondary">
              {project.description}
            </p>

            <Tags tags={project.tags} limit={6} />
          </div>
        </Link>
      ))}
    </div>
  );
}
