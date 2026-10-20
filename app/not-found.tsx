import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa bu sitede yok.",
};

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[80svh] items-center justify-center overflow-hidden px-5 py-20 grain sm:px-6">
      <div className="atmosphere" aria-hidden />

      <div className="relative z-10 max-w-xl text-center">
        <p className="display wordmark text-[clamp(4.5rem,16vw,9rem)] display-tight">
          404
        </p>

        <h1 className="display mt-6 text-[clamp(1.5rem,4vw,2.25rem)] text-feza-text">
          Bu sayfa yok
        </h1>

        <p className="mx-auto mt-4 max-w-md text-[1.0625rem] leading-relaxed text-feza-secondary">
          Adres yanlış yazılmış ya da sayfa kaldırılmış olabilir. Aşağıdan
          devam edebilirsiniz.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link href="/" className="btn btn-primary">
            Ana sayfa
          </Link>
          <Link href="/#projects" className="btn btn-ghost">
            Projeler
          </Link>
        </div>
      </div>
    </div>
  );
}
