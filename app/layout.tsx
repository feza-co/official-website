import type { Metadata, Viewport } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

// ─── Display ────────────────────────────────────────────────────────────────
// Syne is wide, slightly architectural and unmistakable at large sizes — it
// carries the wordmark. latin-ext covers ş ğ ı İ ö ü ç.
const syne = Syne({
  subsets: ["latin", "latin-ext"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

// ─── Body / UI ──────────────────────────────────────────────────────────────
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ─── Data ───────────────────────────────────────────────────────────────────
// Reserved for things that really are machine values: years, counts, repo
// handles. Not used as decoration.
const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono-feza",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feza-co.dev"),
  title: {
    default: "Feza-Co — Yazılım Kolektifi",
    template: "%s · Feza-Co",
  },
  description:
    "Beş mühendis, dokuz ürün. Ay yüzeyinde rover rotası planlayan algoritmadan afet anında ayakta kalan iletişim ağına kadar.",
  keywords: [
    "Feza-Co",
    "yazılım kolektifi",
    "dijital ikiz",
    "yapay zeka",
    "hackathon",
    "Türkiye",
  ],
  authors: [{ name: "Feza-Co" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Feza-Co",
    title: "Feza-Co — Yazılım Kolektifi",
    description:
      "Beş mühendis, dokuz ürün. Ay yüzeyinde rover rotası planlayan algoritmadan afet anında ayakta kalan iletişim ağına kadar.",
    url: "https://feza-co.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Feza-Co yazılım kolektifi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feza-Co — Yazılım Kolektifi",
    description:
      "Beş mühendis, dokuz ürün. Ay yüzeyinde rover rotası planlayan algoritmadan afet anında ayakta kalan iletişim ağına kadar.",
    images: ["/og-image.png"],
  },
};

// Matches the two --bg tokens so the browser chrome never flashes the wrong side
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf0f8" },
    { media: "(prefers-color-scheme: dark)", color: "#06080f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-feza-bg text-feza-text">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                       focus:rounded-lg focus:bg-feza-card focus:px-4 focus:py-2.5
                       focus:text-sm focus:font-semibold focus:text-feza-text
                       focus:shadow-lg focus:ring-2 focus:ring-[var(--accent)]"
          >
            İçeriğe geç
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
