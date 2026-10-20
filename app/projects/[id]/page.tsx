import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectById, getMembersForProject, projects } from "@/lib/data";
import { ExternalLinkIcon, GitHubIcon, StatusDot } from "@/components/ui";
import BackButton from "@/components/BackButton";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Proje bulunamadı" };
  return { title: project.title, description: project.description };
}

const STATUS = {
  active: "geliştiriliyor",
  planning: "planlamada",
  completed: "tamamlandı",
} as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const team = getMembersForProject(project.id);
  const others = projects.filter((p) => p.id !== project.id);

  return (
    <article className="relative isolate overflow-hidden pb-20 pt-28">
      <div
        className="atmosphere atmosphere-fade"
        style={{ height: "70vh", bottom: "auto" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 md:px-10">
        <BackButton fallbackHref="/#projects" label="Projelere dön" />

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2 text-[0.9375rem] text-feza-secondary">
              <StatusDot
                tone={project.status}
                pulse={project.status === "active"}
              />
              {STATUS[project.status]}
            </span>
            <span className="font-mono text-[0.9375rem] text-feza-muted">
              {project.year}
            </span>
            {project.demo && (
              <span className="text-[0.9375rem] text-feza-muted">
                canlı demo var
              </span>
            )}
          </div>

          <h1 className="display text-[clamp(2.25rem,6vw,4rem)] text-feza-text">
            {project.title}
          </h1>

          {project.highlight && (
            <p className="measure text-lg leading-relaxed text-feza-accent">
              {project.highlight}
            </p>
          )}

          <p className="measure text-[1.0625rem] leading-[1.75] text-feza-secondary">
            {project.longDescription}
          </p>

          {(project.github || project.demo) && (
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Canlı demoyu aç
                  <ExternalLinkIcon size={13} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <GitHubIcon size={15} />
                  <span lang="en">GitHub</span>
                </a>
              )}
            </div>
          )}
        </header>

        {project.caseStudy && (
          <section className="mt-16" aria-labelledby="case-study">
            <h2 id="case-study" className="display text-xl text-feza-text">
              Vaka çalışması
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { label: "Problem", value: project.caseStudy.problem },
                { label: "Yaklaşım", value: project.caseStudy.approach },
                { label: "Çıktı", value: project.caseStudy.outcome },
              ].map((item) => (
                <div key={item.label} className="panel p-5">
                  <h3 className="text-sm font-semibold text-feza-accent">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.7] text-feza-secondary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16" aria-labelledby="stack">
          <h2 id="stack" className="display text-xl text-feza-text">
            Teknoloji yığını
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="tag" lang="en">
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {team.length > 0 && (
          <section className="mt-16" aria-labelledby="team">
            <h2 id="team" className="display text-xl text-feza-text">
              Bu projede çalışanlar
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/members/${m.slug}`}
                    className="panel panel-interactive group flex items-center gap-3 p-4"
                  >
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-feza-border bg-feza-surface-2">
                      {m.avatar ? (
                        <Image
                          src={m.avatar}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      ) : (
                        <span
                          className="display absolute inset-0 flex items-center justify-center text-[0.7rem] text-feza-accent"
                          style={{ background: "var(--accent-soft)" }}
                          aria-hidden
                        >
                          {m.initials}
                        </span>
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
                        {m.name}
                      </span>
                      <span className="block truncate text-sm text-feza-muted">
                        {m.role}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 border-t border-feza-border pt-10" aria-labelledby="others">
          <h2 id="others" className="display text-xl text-feza-text">
            Diğer projeler
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {others.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/projects/${p.id}`}
                  className="inline-flex items-center rounded-md border border-feza-border bg-feza-card
                             px-4 py-2.5 text-[0.9375rem] text-feza-secondary transition-colors duration-300
                             hover:border-feza-border-md hover:text-feza-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
