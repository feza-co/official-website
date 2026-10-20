import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMemberBySlug, getProjectsForMember, members } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, StatusDot } from "@/components/ui";
import BackButton from "@/components/BackButton";

const PROJECT_STATUS = {
  active: "geliştiriliyor",
  planning: "planlamada",
  completed: "tamamlandı",
} as const;

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Üye bulunamadı" };
  return { title: member.name, description: member.bio };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const memberProjects = getProjectsForMember(member.slug);
  const others = members.filter((m) => m.slug !== member.slug);

  return (
    <article className="relative isolate overflow-hidden pb-20 pt-28">
      <div
        className="atmosphere atmosphere-fade"
        style={{ height: "70vh", bottom: "auto" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 md:px-10">
        <BackButton fallbackHref="/#founders" label="Ekibe dön" />

        <header className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-feza-border bg-feza-surface-2 sm:h-40 sm:w-40">
            {member.avatar ? (
              <Image
                src={member.avatar}
                alt=""
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover"
                priority
              />
            ) : (
              <span
                className="display absolute inset-0 flex items-center justify-center text-3xl text-feza-accent"
                style={{ background: "var(--accent-soft)" }}
                aria-hidden
              >
                {member.initials}
              </span>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <h1 className="display text-[clamp(2rem,5vw,3.25rem)] text-feza-text">
                {member.name}
              </h1>
              <p className="mt-2 text-lg text-feza-muted">{member.role}</p>
            </div>

            <p className="measure text-[1.0625rem] leading-[1.75] text-feza-secondary">
              {member.bio}
            </p>

            {(member.linkedin || member.github) && (
              <div className="flex flex-wrap gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <LinkedInIcon size={15} />
                    <span lang="en">LinkedIn</span>
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
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
          </div>
        </header>

        {member.quote && (
          <blockquote className="panel mt-14 p-6 sm:p-8">
            <p className="measure display text-lg leading-[1.5] text-feza-text sm:text-xl">
              {member.quote}
            </p>
          </blockquote>
        )}

        {member.skills.length > 0 && (
          <section className="mt-16" aria-labelledby="skills">
            <h2 id="skills" className="display text-xl text-feza-text">
              Uzmanlık alanları
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <li key={skill} className="tag" lang="en">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}

        {memberProjects.length > 0 && (
          <section className="mt-16" aria-labelledby="member-projects">
            <h2 id="member-projects" className="display text-xl text-feza-text">
              Çalıştığı projeler
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {memberProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/projects/${project.id}`}
                    className="panel panel-interactive group flex h-full flex-col gap-3 p-5"
                  >
                    <div className="flex items-center gap-2">
                      <StatusDot
                        tone={project.status}
                        pulse={project.status === "active"}
                      />
                      <span className="text-sm text-feza-muted">
                        {PROJECT_STATUS[project.status]}
                      </span>
                      <span className="ml-auto font-mono text-sm text-feza-muted">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="display text-xl text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
                      {project.title}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.65] text-feza-secondary">
                      {project.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {member.hackathons && member.hackathons.length > 0 && (
          <section className="mt-16" aria-labelledby="events">
            <h2 id="events" className="display text-xl text-feza-text">
              Katıldığı yarışmalar ve programlar
            </h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {member.hackathons.map((event) => (
                <li
                  key={event}
                  className="border-t border-feza-border pt-3 text-[0.95rem] leading-snug text-feza-secondary"
                >
                  {event}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 border-t border-feza-border pt-10" aria-labelledby="other-founders">
          <h2 id="other-founders" className="display text-xl text-feza-text">
            Diğer kurucu ortaklar
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {others.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/members/${m.slug}`}
                  className="inline-flex items-center gap-2.5 rounded-md border border-feza-border
                             bg-feza-card px-3.5 py-2.5 text-[0.9375rem] text-feza-secondary
                             transition-colors duration-300 hover:border-feza-border-md hover:text-feza-accent"
                >
                  <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-feza-surface-2">
                    {m.avatar ? (
                      <Image src={m.avatar} alt="" fill sizes="24px" className="object-cover" />
                    ) : (
                      <span
                        className="display absolute inset-0 flex items-center justify-center text-[0.5rem] text-feza-accent"
                        style={{ background: "var(--accent-soft)" }}
                        aria-hidden
                      >
                        {m.initials}
                      </span>
                    )}
                  </span>
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
