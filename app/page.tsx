import Link from "next/link";
import Image from "next/image";
import MemberCard from "@/components/MemberCard";
import ProjectCard from "@/components/ProjectCard";
import { members, projects, getMembersForProject } from "@/lib/data";

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-[88svh] md:min-h-[92svh] flex flex-col justify-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16"
      aria-label="Ana başlık"
    >
      <Image
        src="/hero-feza-visual.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center opacity-80"
        aria-hidden
      />

      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-50 via-slate-50/90 to-slate-50/15"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/65 via-transparent to-slate-50"
        aria-hidden
      />

      {/* ── Radial gradient: very subtle indigo tint ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 78% 62% at 50% 36%, rgba(99,102,241,0.07) 0%, rgba(14,165,233,0.03) 45%, transparent 70%)",
        }}
      />

      {/* ── Ultra-faint grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10">

        {/* ── Decorative status bar ── */}
        <div
          className="flex items-center gap-3 mb-14
                     animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-indigo-500">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              style={{
                animation: "statusPulse 2.5s ease-in-out infinite",
                boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
              }}
            />
            Kolektif · Aktif
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-200/60 to-transparent" />
          <span className="font-mono text-[10px] tracking-widest text-slate-400">
            EST. 2024
          </span>
        </div>

        {/* ── Main title ── */}
        <div className="space-y-2 md:space-y-1">
          {/* FEZA — monumental black lettering */}
          <div className="overflow-hidden">
            <h1
              className="font-orbitron font-black text-slate-900 tracking-tight leading-none
                         animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]"
              style={{
                fontSize: "clamp(4.5rem, 14vw, 12rem)",
                letterSpacing: "-0.025em",
              }}
            >
              FEZA
            </h1>
          </div>

          {/* ── Divider rule + CO ── */}
          <div
            className="flex items-center gap-4 md:gap-6
                       animate-fade-in-up opacity-0 [animation-delay:360ms] [animation-fill-mode:forwards]"
          >
            <div className="flex-1 h-px max-w-sm bg-gradient-to-r from-indigo-400 via-indigo-300 to-transparent" />
            <span
              className="font-orbitron font-bold text-indigo-600 tracking-widest"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
            >
              — CO
            </span>
          </div>
        </div>

        {/* ── Tagline ── */}
        <div
          className="mt-10 md:mt-12 max-w-2xl
                     animate-fade-in-up opacity-0 [animation-delay:520ms] [animation-fill-mode:forwards]"
        >
          <p
            className="font-outfit font-light text-slate-700 leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)", lineHeight: 1.65 }}
          >
            Teknolojinin sınırlarını birlikte zorluyoruz.
            <br />
            <span className="font-outfit font-normal text-slate-500">
              Hiyerarşisiz bir yapıda, beş kurucu ortak — sınırsız vizyon.
            </span>
          </p>
        </div>

        {/* ── CTA Buttons ── */}
        <div
          className="mt-10 flex flex-wrap items-center gap-4
                     animate-fade-in-up opacity-0 [animation-delay:680ms] [animation-fill-mode:forwards]"
        >
          <Link
            href="#founders"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-lg
                       font-mono text-sm tracking-widest uppercase transition-all duration-300
                       bg-indigo-600 text-white border border-indigo-600
                       hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-0.5"
          >
            <span>Ekibi Keşfet</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" />
            </svg>
          </Link>

          <Link
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg
                       font-mono text-sm tracking-widest uppercase transition-all duration-300
                       text-slate-700 border border-slate-300 bg-white
                       hover:border-cyan-300 hover:text-cyan-700 hover:bg-cyan-50
                       hover:-translate-y-0.5"
          >
            <span>Projeler</span>
          </Link>
        </div>

        {/* ── Stats row ── */}
        <div
          className="mt-14 md:mt-16
                     animate-fade-in opacity-0 [animation-delay:920ms] [animation-fill-mode:forwards]"
        >
          <div className="h-px mb-6 bg-gradient-to-r from-indigo-200/60 via-slate-200 to-transparent" />
          <div className="flex flex-wrap gap-10 md:gap-16">
            {[
              { value: "5",    label: "Kurucu Ortak" },
              { value: "1",    label: "Aktif Proje" },
              { value: "2024", label: "Kuruluş Yılı" },
              { value: "∞",    label: "Vizyon" },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-1">
                <p className="font-orbitron font-bold text-2xl md:text-3xl text-indigo-600">
                  {value}
                </p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 animate-float-slow sm:flex">
        <span className="font-mono text-[9px] tracking-widest uppercase text-slate-400">
          Keşfet
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-indigo-400/50 to-transparent" />
      </div>
    </section>
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
        <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
          {label}
        </span>
        <div className="h-px w-20 bg-indigo-200" />
      </div>
      <h2
        className="font-orbitron font-bold text-slate-900"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-outfit text-base text-slate-600 max-w-2xl leading-relaxed">
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
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Founders Section ── */}
      <section
        id="founders"
        className="py-20 md:py-28 scroll-mt-16 bg-slate-50"
        aria-label="Kurucu Ortaklar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            label="// Ekip"
            title="The Founders"
            subtitle="Beş bağımsız zihin, tek bir kolektif çatı altında. Her ortak eşit düzeyde kurucu; hiyerarşi yok, sadece vizyon ve yetkinlik var."
          />

          {/* 5-card responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {members.map((member, i) => (
              <MemberCard key={member.slug} member={member} index={i} />
            ))}
          </div>

          {/* Manifesto callout */}
          <div className="mt-10 flex items-start gap-4 px-6 py-5 rounded-lg bg-white border border-slate-200/80">
            <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-400 shrink-0 mt-1">
              Manifesto
            </span>
            <p className="font-mono text-xs text-slate-500 leading-[1.9]">
              {'// Bu kolektifte hiç kimse "Lead", "Senior" veya "Manager" değildir.'}
              {"  "}
              {"// Her üye eşit düzeyde Kurucu Ortak'tır."}
              {"  "}
              {"// Fikirler, unvandan değil — üretimden değer kazanır."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Thin divider ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10" aria-hidden>
        <div className="divider-light" />
      </div>

      {/* ── Projects Section ── */}
      <section
        id="projects"
        className="py-20 md:py-28 scroll-mt-16 bg-slate-50"
        aria-label="Projeler"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            label="// Projeler"
            title="Ortak Çalışmalar"
            subtitle="Kolektif olarak geliştirdiğimiz ve geliştireceğimiz projeler. Her proje, farklı uzmanlıkların kesişim noktasında doğar."
          />

          <div className="space-y-6">
            {projects.map((project, i) => {
              const projectMembers = getMembersForProject(project.id).map(
                (m) => ({ name: m.name, slug: m.slug, initials: m.initials })
              );
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  members={projectMembers}
                />
              );
            })}
          </div>

          {/* Coming soon placeholder */}
          <div
            className="mt-6 flex flex-col items-center justify-center py-12 rounded-lg
                        border-2 border-dashed border-slate-200 bg-white"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400 mb-3">
              Yakında
            </span>
            <p className="font-outfit text-sm text-center text-slate-500 max-w-xs">
              Yeni projeler hazırlanıyor. Kolektifin bir sonraki büyük adımı geliyor.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA Section ── */}
      <section
        id="contact"
        className="py-20 md:py-28 scroll-mt-16 bg-white"
        aria-label="İletişim"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            className="relative rounded-lg overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center
                        border border-cyan-100"
            style={{
              background:
                "linear-gradient(135deg, #ecfeff 0%, #ffffff 46%, #eef2ff 100%)",
            }}
          >
            {/* Soft radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="flex justify-center mb-2">
                <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-500">
                  {"// İletişim"}
                </span>
              </div>

              <h2
                className="font-orbitron font-bold text-slate-900"
                style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
              >
                Birlikte bir şeyler üretelim
              </h2>

              <p
                className="font-outfit text-base text-slate-600 leading-relaxed"
                style={{ lineHeight: 1.8 }}
              >
                Bir fikriniz, bir projeniz veya sadece selamlaşmak için bize ulaşın.
                Kolektifin kapıları her zaman açık.
              </p>

              <a
                href="mailto:info@feza-co.dev"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg
                           font-mono text-sm tracking-widest uppercase transition-all duration-300
                           bg-indigo-600 text-white border border-indigo-600
                           hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/25
                           hover:-translate-y-0.5"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 3.5h13M1 3.5l6.5 5L14 3.5M1 3.5V11.5h13V3.5" />
                </svg>
                <span>info@feza-co.dev</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
