import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Brand / display font ──────────────────────────────────────────────────
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ─── Primary UI font ───────────────────────────────────────────────────────
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ─── Monospace / tag font ──────────────────────────────────────────────────
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://feza-co.dev"),
  title: {
    default: "Feza-Co | Teknoloji Kolektifi",
    template: "%s | Feza-Co",
  },
  description:
    "Feza-Co — Beş kurucu ortak, sınırsız vizyon. Geleceğin teknolojisini birlikte inşa eden bağımsız yazılım kolektifi.",
  keywords: [
    "Feza-Co",
    "kolektif",
    "yazılım",
    "teknoloji",
    "startup",
    "digital twin",
    "yapay zeka",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Feza-Co",
    title: "Feza-Co | Teknoloji Kolektifi",
    description:
      "Beş kurucu ortak, sınırsız vizyon. Geleceğin teknolojisini birlikte inşa eden bağımsız yazılım kolektifi.",
    url: "https://feza-co.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Feza-Co teknoloji kolektifi sosyal paylaşım görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feza-Co | Teknoloji Kolektifi",
    description:
      "Beş kurucu ortak, sınırsız vizyon. Geleceğin teknolojisini birlikte inşa eden bağımsız yazılım kolektifi.",
    images: ["/og-image.png"],
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="font-outfit antialiased min-h-screen flex flex-col bg-feza-bg text-feza-text">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
