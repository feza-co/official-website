import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import FounderGrid from "@/components/FounderGrid";
import { members, projects } from "@/lib/data";

const demoCount = projects.filter((p) => p.demo).length;
const activeCount = projects.filter((p) => p.status === "active").length;
const hackathons = Array.from(
  new Set(members.flatMap((m) => m.hackathons ?? []))
);

function SectionHeader({
  title,
  lead,
  id,
}: {
  title: string;
  lead: string;
  id: string;
}) {
  return (
    <header className="mb-12 md:mb-16">
      <h2
        id={id}
        className="display text-[clamp(2rem,5vw,3.25rem)] text-feza-text"
      >
        {title}
      </h2>
      <p className="measure mt-4 text-lg leading-[1.65] text-feza-secondary">
        {lead}
      </p>
    </header>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Projects — the evidence comes before the people ──────────────── */}
      <section
        id="projects"
        className="scroll-mt-20 border-t border-feza-border bg-feza-bg py-24 md:py-32"
        aria-labelledby="projects-title"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <SectionHeader
            id="projects-title"
            title="Üretilenler"
            lead={`Hackathon gecelerinde başlayıp sonrasında bırakılmayan işler. ${activeCount} tanesi hâlâ geliştiriliyor, ${demoCount} tanesi canlı demo ile yayında.`}
          />
          <ProjectGrid />
        </div>
      </section>

      {/* ── Where the work was made ──────────────────────────────────────── */}
      <section
        className="border-t border-feza-border bg-feza-surface py-20 md:py-24"
        aria-labelledby="events-title"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <h2
            id="events-title"
            className="display text-xl text-feza-text sm:text-2xl"
          >
            Katıldığımız yarışmalar ve programlar
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {hackathons.map((event) => (
              <li
                key={event}
                className="flex items-start gap-3 border-t border-feza-border pt-3 text-[0.95rem] leading-snug text-feza-secondary"
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Founders ─────────────────────────────────────────────────────── */}
      <section
        id="founders"
        className="scroll-mt-20 border-t border-feza-border bg-feza-bg py-24 md:py-32"
        aria-labelledby="founders-title"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <SectionHeader
            id="founders-title"
            title="Beş kurucu ortak"
            lead="Hiyerarşi yok. Herkes eşit düzeyde kurucu ortak; işler unvana göre değil, kimin neyi üstlendiğine göre dağılır."
          />

          <FounderGrid />

          <blockquote className="panel mt-8 p-7 sm:p-9">
            <p className="measure display text-xl leading-[1.45] text-feza-text sm:text-2xl">
              Bu kolektifte kimse &ldquo;lead&rdquo;, &ldquo;senior&rdquo; ya da
              &ldquo;manager&rdquo; değil. Fikirler unvandan değil, üretimden
              değer kazanır.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative isolate scroll-mt-20 overflow-hidden border-t border-feza-border bg-feza-bg py-24 grain md:py-32"
        aria-labelledby="contact-title"
      >
        <div className="atmosphere" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.25fr,1fr] lg:gap-16">
            <div>
              <h2
                id="contact-title"
                className="display text-[clamp(2rem,5vw,3.25rem)] text-feza-text"
              >
                Birlikte bir şeyler üretelim
              </h2>
              <p className="measure mt-4 text-lg leading-[1.65] text-feza-secondary">
                Bir fikriniz, bir projeniz ya da sadece bir sorunuz varsa yazın.
                E-postaları genellikle iki iş günü içinde yanıtlıyoruz.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:fezahackathon@gmail.com"
                className="panel panel-interactive flex items-center gap-4 p-5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  aria-hidden
                >
                  <svg width="19" height="19" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1.5 4h15M1.5 4l7.5 6 7.5-6M1.5 4v10h15V4" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-feza-muted">E-posta</span>
                  <span className="block truncate font-medium text-feza-text">
                    fezahackathon@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://github.com/feza-co"
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-interactive flex items-center gap-4 p-5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md
                             bg-feza-surface-2 text-feza-secondary"
                  aria-hidden
                >
                  <svg width="19" height="19" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-feza-muted" lang="en">
                    GitHub
                  </span>
                  <span className="block truncate font-medium text-feza-text">
                    github.com/feza-co
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
