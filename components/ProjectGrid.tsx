import Link from "next/link";
import { projects, type Project } from "@/lib/data";

// LunaPath leads: it is the most ambitious thing here and it is the one the
// collective is named after — feza, the old Turkish word for outer space.
const FEATURED_ID = "astro-hackathon";

const featured = projects.find((p) => p.id === FEATURED_ID) ?? projects[0];
const rest = projects.filter((p) => p.id !== featured.id);

const STATUS: Record<Project["status"], string> = {
  active: "geliştiriliyor",
  completed: "tamamlandı",
  planning: "planlamada",
};

function Status({ status }: { status: Project["status"] }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-medium text-feza-signal">
        <span className="live-dot" aria-hidden />
        {STATUS.active}
      </span>
    );
  }
  return (
    <span className="text-sm text-feza-muted">{STATUS[status]}</span>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-4">
      <Status status={project.status} />
      {project.demo && (
        <span className="text-sm text-feza-muted">canlı demo var</span>
      )}
      <span className="ml-auto font-mono text-sm text-feza-muted">
        {project.year}
      </span>
    </div>
  );
}

function Award({ award }: { award: string }) {
  return (
    <p className="badge-award">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="7" cy="5.2" r="3.6" />
        <path d="M4.6 8.4L3.6 13l3.4-1.8L10.4 13l-1-4.6" />
      </svg>
      {award}
    </p>
  );
}

function Tags({ tags, limit }: { tags: string[]; limit: number }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.slice(0, limit).map((tag) => (
        <li key={tag} className="tag" lang="en">
          {tag}
        </li>
      ))}
      {tags.length > limit && (
        <li className="tag">+{tags.length - limit}</li>
      )}
    </ul>
  );
}

export default function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* ── Featured ────────────────────────────────────────────────────── */}
      <Link
        href={`/projects/${featured.id}`}
        className="panel panel-interactive group relative isolate flex flex-col gap-5
                   overflow-hidden p-7 sm:p-9 md:col-span-2 lg:row-span-2"
      >
        <div
          className="absolute inset-0 -z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 85% 0%, var(--accent-soft), transparent 70%)",
          }}
          aria-hidden
        />

        <Meta project={featured} />

        <h3 className="display text-4xl text-feza-text sm:text-5xl">
          {featured.title}
        </h3>

        {featured.award && <Award award={featured.award} />}

        {featured.highlight && (
          <p className="measure text-base leading-relaxed text-feza-accent">
            {featured.highlight}
          </p>
        )}

        <p className="measure text-base leading-[1.7] text-feza-secondary">
          {featured.description}
        </p>

        <div className="mt-auto pt-2">
          <Tags tags={featured.tags} limit={8} />
        </div>
      </Link>

      {/* ── The rest ────────────────────────────────────────────────────── */}
      {rest.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="panel panel-interactive group flex flex-col gap-4 p-6"
        >
          <Meta project={project} />

          <h3 className="display text-2xl text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
            {project.title}
          </h3>

          {project.award && <Award award={project.award} />}

          <p className="text-[0.95rem] leading-[1.65] text-feza-secondary">
            {project.description}
          </p>

          <div className="mt-auto pt-2">
            <Tags tags={project.tags} limit={4} />
          </div>
        </Link>
      ))}
    </div>
  );
}
