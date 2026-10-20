import Link from "next/link";
import { GitHubIcon } from "@/components/ui";

const nav = [
  { href: "/#projects", label: "Projeler" },
  { href: "/#founders", label: "Ekip" },
  { href: "/#contact", label: "İletişim" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-feza-border bg-feza-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr,1fr]">
          <div>
            <p className="display text-lg text-feza-text">Feza&#8209;Co</p>
            <p className="measure mt-3 text-[0.95rem] leading-relaxed text-feza-muted">
              Beş mühendisin kurduğu bağımsız yazılım kolektifi. Yaptığımız
              işlerin çoğu açık kaynak.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="mailto:fezahackathon@gmail.com"
                aria-label="E-posta gönder"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-feza-border
                           bg-feza-card text-feza-secondary transition-colors duration-300
                           hover:border-feza-border-md hover:text-feza-text"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M1 3.5h13M1 3.5l6.5 5L14 3.5M1 3.5V11.5h13V3.5" />
                </svg>
              </a>
              <a
                href="https://github.com/feza-co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub organizasyonu"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-feza-border
                           bg-feza-card text-feza-secondary transition-colors duration-300
                           hover:border-feza-border-md hover:text-feza-text"
              >
                <GitHubIcon size={15} />
              </a>
            </div>
          </div>

          <nav aria-label="Alt menü">
            <p className="text-sm text-feza-muted">Sayfa</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[0.95rem] text-feza-secondary transition-colors duration-300 hover:text-feza-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm text-feza-muted">İletişim</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:fezahackathon@gmail.com"
                  className="break-all text-[0.95rem] text-feza-secondary transition-colors duration-300 hover:text-feza-accent"
                >
                  fezahackathon@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/feza-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  lang="en"
                  className="text-[0.95rem] text-feza-secondary transition-colors duration-300 hover:text-feza-accent"
                >
                  github.com/feza-co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-feza-border pt-6 text-sm text-feza-muted">
          © {year} Feza-Co
        </p>
      </div>
    </footer>
  );
}
