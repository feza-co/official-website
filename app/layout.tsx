import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

// ─── Display ────────────────────────────────────────────────────────────────
// Space Grotesk: at the same size its width/height ratio is 2.86 against
// Syne's 5.64 — upright instead of squat, which was the whole complaint about
// the previous lockup. Enough character to avoid feeling generic, without
// reading as costume. latin-ext covers ş ğ ı İ ö ü ç.
// Swapping the display face later means changing only this block.
const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
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
    default: "FEZA — Yazılım Kolektifi",
    template: "%s · FEZA",
  },
  description:
    "Beş kurucu ortağın yürüttüğü bağımsız yazılım kolektifi. Ondört kolektif, yirmiiki kişisel proje.",
  keywords: [
    "FEZA",
    "Feza-Co",
    "yazılım kolektifi",
    "dijital ikiz",
    "yapay zeka",
    "hackathon",
    "Türkiye",
  ],
  authors: [{ name: "FEZA" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "FEZA",
    title: "FEZA — Yazılım Kolektifi",
    description:
      "Beş kurucu ortağın yürüttüğü bağımsız yazılım kolektifi. Ondört kolektif, yirmiiki kişisel proje.",
    url: "https://feza-co.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FEZA yazılım kolektifi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FEZA — Yazılım Kolektifi",
    description:
      "Beş kurucu ortağın yürüttüğü bağımsız yazılım kolektifi. Ondört kolektif, yirmiiki kişisel proje.",
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
      className={`${display.variable} ${manrope.variable} ${jetbrains.variable}`}
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
