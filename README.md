<div align="center">

```
███████╗███████╗███████╗ █████╗      ██████╗ ██████╗
██╔════╝██╔════╝╚══███╔╝██╔══██╗    ██╔════╝██╔═══██╗
█████╗  █████╗    ███╔╝ ███████║    ██║     ██║   ██║
██╔══╝  ██╔══╝   ███╔╝  ██╔══██║    ██║     ██║   ██║
██║     ███████╗███████╗██║  ██║    ╚██████╗╚██████╔╝
╚═╝     ╚══════╝╚══════╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝
```

**Beş kurucu ortak · Sınırsız vizyon · Hiyerarşisiz yapı**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-6366f1?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Aktif-22c55e?style=flat-square)]()
[![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-0057b7?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)

</div>

---

## Proje Hakkında

**Feza-Co**, beş bağımsız yazılım mühendisinin oluşturduğu hiyerarşisiz bir teknoloji kolektifinin resmi web sitesidir. Site; kolektif tanıtımı, kurucu ortak profillerini ve ortak proje portföyünü modern, minimal ve erişilebilir bir tasarımla sunar.

> *"Bu kolektifte hiç kimse 'Lead', 'Senior' veya 'Manager' değildir. Her üye eşit düzeyde Kurucu Ortak'tır. Fikirler, unvandan değil — üretimden değer kazanır."*

---

## Özellikler

| | Özellik | Detay |
|---|---|---|
| 🎨 | **Dark / Light Mode** | `next-themes` ile sistem tercihi uyumlu tam tema desteği |
| ♿ | **WCAG 2.1 AA Uyumu** | Renk kontrastı, semantik HTML (`dl/dt/dd`), `focus-visible` ring-offset |
| 👤 | **Dinamik Üye Profilleri** | Her kurucu için ayrı portföy sayfası (`/members/[slug]`) |
| 📁 | **Proje Detay Sayfaları** | Her proje için ayrı detay sayfası (`/projects/[id]`) |
| ⚡ | **Statik Site Üretimi (SSG)** | `generateStaticParams` ile tüm sayfalar build anında üretilir |
| 🚀 | **Turbopack** | Geliştirme ortamında Next.js 15 Turbopack ile hızlı HMR |
| 🅰️ | **Performanslı Fontlar** | Orbitron · Outfit · Space Mono — `display: swap` ile optimize |
| 🏗️ | **Hiyerarşisiz Yapı** | Tasarım sistemi düzeyinde eşitlik; hiçbir üyeye unvan atanmaz |

---

## Teknoloji Yığını

| Katman | Teknoloji | Sürüm |
|---|---|---|
| Framework | [Next.js](https://nextjs.org/) — App Router, SSG, Turbopack | `^15.1.0` |
| UI Kütüphanesi | [React](https://react.dev/) | `^19.0.0` |
| Dil | [TypeScript](https://www.typescriptlang.org/) | `^5` |
| Stil | [Tailwind CSS](https://tailwindcss.com/) | `^3.4.1` |
| Tema | [next-themes](https://github.com/pacocoursey/next-themes) | `^0.4.6` |
| Fontlar | Orbitron · Outfit · Space Mono | Google Fonts |
| Linter | ESLint + eslint-config-next | `^9` |

---

## Kurulum

### Gereksinimler

- Node.js `18+`
- npm / yarn / pnpm

### Adımlar

```bash
# Repoyu klonla
git clone https://github.com/feza-co/official-website.git
cd official-website

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (Turbopack)
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

### Kullanılabilir Komutlar

```bash
npm run dev     # Geliştirme sunucusu (Turbopack ile)
npm run build   # Production build
npm run start   # Production sunucusunu başlat
npm run lint    # ESLint kontrolü
```

---

## Proje Yapısı

```
official-website/
├── app/
│   ├── globals.css              # Design system & CSS custom properties
│   ├── layout.tsx               # Root layout (ThemeProvider · Navbar · Footer)
│   ├── page.tsx                 # Ana sayfa (Hero · Ekip · Projeler · İletişim)
│   ├── not-found.tsx            # 404 sayfası
│   ├── members/
│   │   └── [slug]/
│   │       └── page.tsx         # Dinamik üye profil sayfası (SSG)
│   └── projects/
│       └── [id]/
│           └── page.tsx         # Dinamik proje detay sayfası (SSG)
├── components/
│   ├── Navbar.tsx               # Sabit üst navigasyon
│   ├── Footer.tsx               # Alt bilgi
│   ├── MemberCard.tsx           # Kurucu ortak kartı
│   ├── ProjectCard.tsx          # Proje kartı
│   ├── TeamPopover.tsx          # Ekip üyesi popover bileşeni
│   ├── Marquee.tsx              # Kayan teknoloji bantı
│   ├── BackButton.tsx           # Geri dön butonu
│   ├── CopyEmail.tsx            # E-posta kopyalama bileşeni
│   ├── CountUp.tsx              # Animasyonlu sayaç
│   ├── MouseGlow.tsx            # İmleç ışıma efekti
│   ├── ThemeProvider.tsx        # next-themes sağlayıcısı
│   └── ui.tsx                   # Paylaşımlı UI primitifleri
├── lib/
│   └── data.ts                  # Üye & proje veri katmanı (type-safe)
├── tailwind.config.ts           # Tailwind tema & renk paleti
└── next.config.ts
```

---

## Veri Katmanı

Tüm içerik [`lib/data.ts`](lib/data.ts) dosyasında TypeScript ile tanımlanmıştır. Veritabanı bağımlılığı yoktur; yeni üye veya proje eklemek için yalnızca bu dosyayı düzenlemek yeterlidir.

### Yeni Üye Eklemek

```ts
export const members: Member[] = [
  {
    name: "Ad Soyad",
    slug: "ad-soyad",              // URL: /members/ad-soyad
    role: "Kurucu Ortak",
    initials: "AS",
    avatarGradient: "from-indigo-500 via-purple-500 to-pink-500",
    linkedin: "https://linkedin.com/in/...",
    github: "https://github.com/...",
    bio: "...",
    skills: ["TypeScript", "React"],
    projects: [],
  },
];
```

### Yeni Proje Eklemek

```ts
export const projects: Project[] = [
  {
    id: "proje-slug",              // URL: /projects/proje-slug
    title: "Proje Adı",
    description: "Kısa açıklama",
    tags: ["Next.js", "TypeScript"],
    members: ["ad-soyad"],
    year: 2025,
    link: "https://...",
  },
];
```

---

## Sayfalar & Rotalar

| Rota | Açıklama | Render |
|---|---|---|
| `/` | Ana sayfa — Hero, İstatistikler, Ekip, Projeler, İletişim | Static |
| `/members/[slug]` | Kurucu ortak profil sayfası | SSG |
| `/projects/[id]` | Proje detay sayfası | SSG |
| `*` | 404 — Sayfa bulunamadı | Static |

---

## Kurucu Ortaklar

| | İsim | GitHub | LinkedIn |
|---|---|---|---|
| 🔵 | Ahmet Karakoyun | [@ahmetkrkyn0](https://github.com/ahmetkrkyn0) | [/ahmetkrkyn0](https://www.linkedin.com/in/ahmetkrkyn0/) |
| 🟣 | Tuna Deniz | [@tunadeniz1304](https://github.com/tunadeniz1304) | [/tuna-deniz1304](https://www.linkedin.com/in/tuna-deniz1304/) |
| 🟢 | Nedim Göktuğ Tabak | [@goktugtabak](https://github.com/goktugtabak) | [/goktug-tabak](https://www.linkedin.com/in/goktug-tabak/) |
| 🟠 | İzzettin Berke Kuş | [@berkekus](https://github.com/berkekus) | [/berke-kuş](https://www.linkedin.com/in/berke-ku%C5%9F-464837272/) |
| 🔷 | Oğuzhan Tarhan | [@OgzhnTarhn](https://github.com/OgzhnTarhn) | [/oğuzhan-tarhan](https://www.linkedin.com/in/o%C4%9Fuzhan-tarhan-6a8299357/) |

---

## Tasarım Sistemi

Proje, CSS custom property tabanlı bir token sistemi kullanır. Tüm renkler `globals.css` içinde `--feza-*` ön ekiyle tanımlanmış olup Tailwind tema ile eşleştirilmiştir.

```
Mod          Token               Light              Dark
──────────────────────────────────────────────────────────
Arka Plan    --feza-bg           #f8fafc            #0a0a0b
Kart         --feza-card         #ffffff            #111113
Başlık       --feza-text         #0f172a            #f1f5f9
Gövde        --feza-secondary    #475569            #94a3b8
Aksan        —                   #2563eb            #818cf8 (indigo-400)
Bordür       --feza-border       #e2e8f0            #1e1e24

Fontlar
  Marka  →  Orbitron    (logo, büyük başlıklar)
  UI     →  Outfit      (tüm metin, başlıklar)
  Mono   →  Space Mono  (etiketler, kod, meta)
```

---

## Katkıda Bulunmak

Bu repo Feza-Co kolektifine özeldir. Katkı için bir kurucu ortakla iletişime geçin.

---

## Lisans

Bu proje [MIT](LICENSE) lisansı ile dağıtılmaktadır.

---

<div align="center">

**EST. 2026 · FEZA—CO KOLEKTİFİ**

*Hiyerarşisiz · Vizyon odaklı · Açık kaynak*

</div>
