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

---

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-6366f1?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Aktif-22c55e?style=flat-square)]()

</div>

---

## Proje Hakkında

**Feza-Co**, beş bağımsız yazılım mühendisinin oluşturduğu, hiyerarşisiz bir teknoloji kolektifinin resmi web sitesidir. Site; kolektif tanıtımı, kurucu ortak profillerini ve ortak proje portföyünü modern ve minimal bir tasarımla sunar.

> *"Bu kolektifte hiç kimse 'Lead', 'Senior' veya 'Manager' değildir. Her üye eşit düzeyde Kurucu Ortak'tır. Fikirler, unvandan değil — üretimden değer kazanır."*

---

## Özellikler

- **Premium Aydınlık Tasarım** — `slate-50` taban, `indigo-600` aksan, saf beyaz kartlar
- **Dinamik Üye Profilleri** — Her kurucu ortak için ayrı portfolyo sayfası (`/members/[slug]`)
- **Responsive Grid** — Mobil'den masaüstüne kusursuz uyum
- **Statik Site Üretimi (SSG)** — `generateStaticParams` ile tüm profil sayfaları build anında üretilir
- **Performans Odaklı** — Google Fonts (`Orbitron`, `Outfit`, `Space Mono`) `display: swap` ile optimize
- **Yatay Hiyerarşi** — Tasarım sistemi düzeyinde eşitlik; hiçbir üyeye unvan atanmaz

---

## Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) — App Router, SSG |
| Dil | [TypeScript 5](https://www.typescriptlang.org/) |
| Stil | [Tailwind CSS 3](https://tailwindcss.com/) |
| Fontlar | Orbitron · Outfit · Space Mono (Google Fonts) |
| Linter | ESLint + eslint-config-next |

---

## Kurulum

```bash
# Repoyu klonla
git clone https://github.com/ahmetkrkyn0/official-website.git
cd official-website

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

### Diğer Komutlar

```bash
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
│   ├── layout.tsx               # Root layout (Navbar + Footer)
│   ├── page.tsx                 # Ana sayfa (Hero · Ekip · Projeler · İletişim)
│   └── members/
│       └── [slug]/
│           └── page.tsx         # Dinamik üye profil sayfası
├── components/
│   ├── Navbar.tsx               # Sabit üst navigasyon
│   ├── Footer.tsx               # Alt bilgi
│   ├── MemberCard.tsx           # Kurucu ortak kartı
│   └── ProjectCard.tsx          # Proje kartı
├── lib/
│   └── data.ts                  # Üye & proje veri katmanı (type-safe)
├── tailwind.config.ts           # Tailwind tema & renk paleti
└── next.config.ts
```

---

## Veri Katmanı

Tüm içerik [`lib/data.ts`](lib/data.ts) dosyasında TypeScript ile tanımlanmıştır. Veritabanı bağımlılığı yoktur; yeni üye veya proje eklemek için yalnızca bu dosyayı düzenlemek yeterlidir.

```ts
// Yeni üye eklemek
export const members: Member[] = [
  {
    name: "Ad Soyad",
    slug: "ad-soyad",          // URL: /members/ad-soyad
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

## Sayfalar & Rotalar

| Rota | Açıklama | Render |
|---|---|---|
| `/` | Ana sayfa — Hero, Ekip, Projeler, İletişim | Static |
| `/members/ahmet-karakoyun` | Ahmet Karakoyun profili | SSG |
| `/members/tuna-deniz` | Tuna Deniz profili | SSG |
| `/members/nedim-goktug-tabak` | Nedim Göktuğ Tabak profili | SSG |
| `/members/izzettin-berke-kus` | İzzettin Berke Kuş profili | SSG |
| `/members/oguzhan-tarhan` | Oğuzhan Tarhan profili | SSG |

---

## Tasarım Sistemi

```
Renkler
  Arka Plan   →  slate-50   (#f8fafc)
  Kart        →  white      (#ffffff)
  Başlık      →  slate-900  (#0f172a)
  Gövde       →  slate-600  (#475569)
  Aksan       →  indigo-600 (#4f46e5)
  Bordür      →  slate-200  (#e2e8f0)

Fontlar
  Marka       →  Orbitron   (logo, büyük başlıklar)
  UI          →  Outfit     (tüm metin, başlıklar)
  Mono        →  Space Mono (etiketler, kod, meta)
```

---

## Lisans

Bu proje [MIT](LICENSE) lisansı ile dağıtılmaktadır.

---

<div align="center">

**EST. 2024 · FEZA-CO KOLEKTİFİ**

*Hiyerarşisiz · Vizyon odaklı · Açık kaynak*

</div>
