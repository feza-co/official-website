// app/page.tsx
import HeroCinematic from "@/components/HeroCinematic";
import MemberCard from "@/components/MemberCard";
import MagazineProjectGrid from "@/components/MagazineProjectGrid";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import { members, projects } from "@/lib/data";

// ─── Derived data ─────────────────────────────────────────────────────────────

const uniqueHackathons = Array.from(
  new Set(members.flatMap((m) => m.hackathons ?? []))
);

const tickerItems = [
  ...uniqueHackathons,
  ...Array.from(new Set(projects.flatMap((p) => p.tags.slice(0, 3)))),
].filter((s): s is string => typeof s === "string");

const activeProjectCount    = projects.filter((p) => p.status === "active").length;
const completedProjectCount = projects.filter((p) => p.status === "completed").length;

// ─── Ticker ───────────────────────────────────────────────────────────────────

function TickerSection() {
  return (
    <section
      className="relative py-6 sm:py-8 border-y border-feza-border bg-feza-surface-2"
      aria-label="Hackathon ve teknoloji seridi"
    >
      <div className="max-w-[100vw] overflow-hidden">
        <div aria-hidden="true">
          <Marquee items={tickerItems} />
        </div>
      </div>
    </section>
  );
}

// ─── Stat Bar ─────────────────────────────────────────────────────────────────

function StatBar() {
  return (
    <div className="border-b border-feza-border bg-feza-surface-2">
      <dl className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { value: members.length,          label: "Kurucu Ortak" },
          { value: projects.length,         label: "Toplam Proje" },
          { value: uniqueHackathons.length, label: "Hackathon" },
          { value: 2026,                    label: "Kuruluş Yılı" },
        ].map(({ value, label }) => (
          <div key={label} className="space-y-1">
            <dt className="font-mono text-[9px] tracking-[3px] uppercase text-feza-faint">
              {label}
            </dt>
            <dd className="font-orbitron font-bold text-xl sm:text-2xl text-indigo-500 dark:text-indigo-400 m-0">
              <CountUp end={value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16 space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-indigo-400" aria-hidden />
        <span className="font-mono text-[11px] tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
          {label}
        </span>
        <div className="h-px w-10 bg-indigo-200 dark:bg-indigo-800" aria-hidden />
      </div>
      <h2
        className="font-orbitron font-bold text-feza-text text-balance"
        style={{ fontSize: "clamp(1.6rem, 4vw, 2.75rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-outfit text-base text-feza-secondary leading-relaxed text-balance max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* 1. Sinematik Hero */}
      <HeroCinematic />

      {/* 2. Stat Bar */}
      <StatBar />

      {/* 3. Ticker */}
      <TickerSection />

      {/* 4. Ekip — Terminal Roster */}
      <section
        id="founders"
        className="relative py-16 sm:py-20 md:py-28 scroll-mt-20 bg-feza-card overflow-hidden"
        aria-label="Kurucu Ortaklar"
      >
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <SectionHeader
            label="// Ekip"
            title="Beş Kurucu Ortak"
            subtitle="Bağımsız zihinler, ortak bir çatı altında. Her ortak eşit düzeyde kurucu; hiyerarşi yok, sadece vizyon ve yetkinlik."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {members.map((member, i) => (
              <MemberCard key={member.slug} member={member} index={i} />
            ))}
          </div>

          {/* Manifesto */}
          <div
            className="mt-10 sm:mt-12 relative overflow-hidden flex flex-col sm:flex-row
                       items-start gap-3 sm:gap-5 px-5 sm:px-7 py-6 rounded-xl
                       bg-feza-surface-2 border border-feza-border"
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
              style={{ background: "linear-gradient(180deg, #6366f1 0%, #06b6d4 100%)" }}
              aria-hidden
            />
            <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500 dark:text-indigo-400 shrink-0 sm:mt-1 pl-2 sm:pl-3">
              Manifesto
            </span>
            <p className="font-mono text-xs text-feza-muted leading-[1.9] pl-2 sm:pl-0">
              <span className="text-indigo-500 dark:text-indigo-400">{"//"}</span>{" "}
              {'Bu kolektifte hiç kimse "Lead", "Senior" veya "Manager" değildir.'}
              <br />
              <span className="text-indigo-500 dark:text-indigo-400">{"//"}</span>{" "}
              {"Her üye eşit düzeyde Kurucu Ortak'tır."}
              <br />
              <span className="text-indigo-500 dark:text-indigo-400">{"//"}</span>{" "}
              {"Fikirler, unvandan değil — üretimden değer kazanır."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Projeler — Magazine Grid */}
      <section
        id="projects"
        className="relative py-16 sm:py-20 md:py-28 scroll-mt-20 bg-feza-bg overflow-hidden"
        aria-label="Projeler"
      >
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
            <SectionHeader
              label="// Projeler"
              title="Üretilenler"
              subtitle="Kolektif olarak geliştirdiğimiz, geliştirmeye devam ettiğimiz çalışmalar."
            />
            <div className="flex shrink-0 items-center gap-4 font-mono text-[10px] tracking-widest uppercase mb-2 sm:mb-6">
              <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden />
                {activeProjectCount} Aktif
              </span>
              <span className="flex items-center gap-2 text-feza-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden />
                {completedProjectCount} Tamamlandı
              </span>
            </div>
          </div>

          <MagazineProjectGrid />
        </div>
      </section>

      {/* 6. İletişim */}
      <section
        id="contact"
        className="relative py-16 sm:py-20 md:py-28 scroll-mt-20 bg-feza-card overflow-hidden"
        aria-label="İletişim"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <div
            className="relative rounded-2xl overflow-hidden px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20
                       border border-feza-border bg-feza-bg"
          >
            <div
              className="absolute -top-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-50 pointer-events-none bg-indigo-500/20"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-40 pointer-events-none bg-cyan-500/15"
              aria-hidden
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 items-center">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-indigo-400" aria-hidden />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
                    {"// İletişim"}
                  </span>
                </div>
                <h2
                  className="font-orbitron font-bold text-feza-text leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
                >
                  Birlikte bir şeyler{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">üretelim.</span>
                </h2>
                <p className="font-outfit text-base sm:text-lg text-feza-secondary leading-relaxed max-w-lg">
                  Bir fikriniz, bir projeniz veya sadece selamlaşmak için bize ulaşın.
                  Kolektifin kapıları her zaman açık.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:fezahackathon@gmail.com"
                  title="E-posta uygulaması açar"
                  className="group/c flex items-center justify-between gap-4 rounded-xl px-5 py-4
                             bg-feza-text text-feza-bg
                             transition-all duration-300
                             hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/20
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                             focus-visible:ring-offset-2 focus-visible:ring-offset-feza-bg cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-feza-bg/15">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <path d="M1.5 4h15M1.5 4l7.5 6 7.5-6M1.5 4v10h15V4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">E-posta</p>
                      <p className="font-outfit text-sm font-medium truncate">fezahackathon@gmail.com</p>
                    </div>
                  </div>
                  <span className="shrink-0 opacity-60 group-hover/c:opacity-100 group-hover/c:translate-x-0.5 transition-all duration-300" aria-hidden>
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/feza-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/c flex items-center justify-between gap-4 rounded-xl px-5 py-4
                             border border-feza-border bg-feza-card text-feza-text
                             transition-all duration-300
                             hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                             focus-visible:ring-offset-2 focus-visible:ring-offset-feza-bg cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-feza-surface-2 text-feza-secondary">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p lang="en" className="font-mono text-[10px] tracking-widest uppercase text-feza-muted">GitHub</p>
                      <p className="font-outfit text-sm font-medium truncate">@feza-co</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-feza-muted group-hover/c:text-indigo-600 group-hover/c:translate-x-0.5 transition-all duration-300" aria-hidden>
                    ↗
                  </span>
                </a>

                <p className="font-mono text-[10px] tracking-widest uppercase text-feza-muted pt-1">
                  <span className="text-indigo-400">{"//"}</span>{" "}
                  E-postalarınızı genellikle 2 iş günü içinde yanıtlıyoruz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
