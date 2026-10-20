import Link from "next/link";
import { members, projects } from "@/lib/data";
import { personalProjects } from "@/lib/personal-projects";

const hackathonCount = new Set(members.flatMap((m) => m.hackathons ?? [])).size;

// No tagline and no descriptor sentence — the numbers carry the orientation.
const evidence = [
  { value: String(projects.length + personalProjects.length), label: "proje" },
  { value: String(members.length), label: "kurucu ortak" },
  { value: String(hackathonCount), label: "yarışma" },
  { value: "2026", label: "kuruluş" },
];

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[86svh] flex-col justify-center overflow-hidden grain"
      aria-labelledby="hero-title"
    >
      <div className="atmosphere" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-32 pt-28 text-center sm:px-6 md:px-10">
        <h1
          id="hero-title"
          className="rise display display-tight wordmark text-[clamp(4.5rem,21vw,15rem)] tracking-[-0.045em]"
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          FEZA
        </h1>

        <div
          className="rise mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ "--d": "300ms" } as React.CSSProperties}
        >
          <Link href="#projects" className="btn btn-primary w-full sm:w-auto">
            Projeleri gör
          </Link>
          <Link href="#founders" className="btn btn-ghost w-full sm:w-auto">
            Ekibi tanı
          </Link>
        </div>
      </div>

      <div
        className="rise absolute inset-x-0 bottom-0 z-10 border-t border-feza-border/70 backdrop-blur-sm"
        style={{ "--d": "460ms" } as React.CSSProperties}
      >
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-5 px-5 py-5 sm:grid-cols-4 sm:px-6 md:px-10">
          {evidence.map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <dt className="sr-only">{label}</dt>
              <dd className="m-0 flex items-baseline gap-2">
                <span className="display text-2xl text-feza-text sm:text-3xl">
                  {value}
                </span>
                <span className="text-sm text-feza-muted">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
