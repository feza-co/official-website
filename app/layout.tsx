import type { Metadata } from "next";
import { Orbitron, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Feza-Co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable}`}
    >
      <body className="font-rajdhani antialiased min-h-screen flex flex-col bg-feza-bg text-feza-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
