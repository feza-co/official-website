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

          <blockquote className="mt-16 border-t border-feza-border pt-8">
            <p className="measure display text-[1.375rem] leading-[1.45] text-feza-text sm:text-[1.75rem]">
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

            <div className="rows">
              <a
                href="mailto:fezahackathon@gmail.com"
                className="row group flex items-baseline justify-between gap-6 py-5"
              >
                <span className="row-meta shrink-0">E-posta</span>
                <span className="text-right text-[1.0625rem] text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
                  fezahackathon@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/feza-co"
                target="_blank"
                rel="noopener noreferrer"
                className="row group flex items-baseline justify-between gap-6 py-5"
              >
                <span className="row-meta shrink-0" lang="en">GitHub</span>
                <span className="text-right text-[1.0625rem] text-feza-text transition-colors duration-300 group-hover:text-feza-accent">
                  github.com/feza-co
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
