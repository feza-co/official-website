import Link from "next/link";
import { members, projects } from "@/lib/data";

const hackathonCount = new Set(members.flatMap((m) => m.hackathons ?? [])).size;

const evidence = [
  { value: String(projects.length), label: "ürün" },
  { value: String(members.length), label: "kurucu ortak" },
  { value: String(hackathonCount), label: "hackathon" },
  { value: "2026", label: "kuruluş" },
];

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[92svh] flex-col justify-center overflow-hidden grain"
      aria-labelledby="hero-title"
    >
      {/* Contour field + glow. Decorative; the content reads fine without it. */}
      <div className="atmosphere" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-36 pt-28 text-center sm:px-6 md:px-10">
        <p
          className="rise text-sm text-feza-muted sm:text-base"
          style={{ "--d": "60ms" } as React.CSSProperties}
        >
          Bağımsız yazılım kolektifi
        </p>

        <h1
          id="hero-title"
          className="rise display display-tight wordmark mt-7 text-[clamp(3.25rem,15.5vw,11.5rem)]"
          style={{ "--d": "180ms" } as React.CSSProperties}
        >
          Feza&#8209;Co
        </h1>

        <p
          className="rise measure-tight mx-auto mt-9 text-balance text-lg leading-[1.65] text-feza-secondary sm:text-xl"
          style={{ "--d": "340ms" } as React.CSSProperties}
        >
          Beş mühendis, dokuz ürün. Ay yüzeyinde rover rotası planlayan
          algoritmadan afet anında ayakta kalan iletişim ağına kadar.
        </p>

        <div
          className="rise mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ "--d": "480ms" } as React.CSSProperties}
        >
          <Link href="#projects" className="btn btn-primary w-full sm:w-auto">
            Projeleri gör
          </Link>
          <Link href="#founders" className="btn btn-ghost w-full sm:w-auto">
            Ekibi tanı
          </Link>
        </div>
      </div>

      {/* Evidence, pinned to the base of the first screen */}
      <div
        className="rise absolute inset-x-0 bottom-0 z-10 border-t border-feza-border/70 backdrop-blur-sm"
        style={{ "--d": "640ms" } as React.CSSProperties}
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
