# Feza-Co · Pro Max UI Tasarım Speci

**Tarih:** 2026-05-25  
**Branch:** `feature/pro-max-ui`  
**Durum:** Onaylandı

---

## 1. Genel Bağlam

Feza-Co, 5 kurucu ortak (eşit hiyerarşi) barındıran bir yazılım kolektifidir. Site Next.js 15 (App Router) + Tailwind CSS 3 + TypeScript üzerinde çalışmaktadır. Şu an `main` branch'inde sağlam bir altyapı mevcuttur:

- Dark/light mode token sistemi (`globals.css` CSS variables)
- WCAG AA erişilebilirlik (tüm kontrast oranları doğrulanmış)
- CSS keyframe animasyonları (`fadeInUp`, `glow-pulse`, `scroll-hint`)
- `glass-card`, `card-base`, `lift-on-hover`, `tag-light` utility sınıfları
- `MemberCard`, `ProjectCard`, `MouseGlow`, `CountUp`, `Marquee` bileşenleri
- `lib/data.ts`'de zengin veri katmanı (5 üye, 9 proje, case study'ler)

**Hedef:** Mevcut altyapıya dokunmadan (lib/data.ts, Navbar, Footer, alt sayfalar, tema tokenleri değişmez) `app/page.tsx` ve ilgili section bileşenlerini "Pro Max" seviyeye taşımak.

---

## 2. Kararlaştırılan Tasarım Yönü

Brainstorming oturumunda kullanıcı onayıyla belirlendi:

| Alan | Seçim | Açıklama |
|------|-------|----------|
| Hero Section | **C — Sinematik Merkez** | Merkez hizalı, yatay çizgi dokusu, stroke+fill FEZA efekti, tek güçlü CTA |
| Proje Showcase | **C — Dergi Grid** | Büyük numara + proje adı + meta satırları, Linear/Notion tarzı editorial liste |
| Team Section | **B — Terminal Roster** | `roster.sh` terminal penceresi estetiği, her üye bir satır |
| Animasyon | **B — Framer Motion Seçici** | Sadece 3 kritik noktada; geri kalan CSS |

---

## 3. Tasarım İlkeleri

1. **Derinlik > Parlaklık** — Glow'lar ve grid pattern'ler zemine işlenmiş atmosfer; element değil zemin.
2. **Hiyerarşi Net** — Her section'da tek dominant element. Kullanıcı gözü önce büyüğü görür.
3. **Kimlik Tutarlı** — Monospace font, `//` prefix, satır numaraları Hero'dan Footer'a akar.
4. **Performans Önce** — Framer Motion dynamic import, `prefers-reduced-motion` korunur.
5. **WCAG AA Korunur** — Mevcut kontrast oranları bozulmaz; tüm focus state'ler aktif kalır.

---

## 4. Section Specleri

### 4.1 Hero Section — Sinematik Merkez

**Genel yapı:** Tam ekran, merkez hizalı içerik. Mevcut sol hizalı hero tamamen yeniden yazılır.

**Arka plan katmanları (z-index sırası, arkadan öne):**
1. `#080810` katı zemin
2. Yatay çizgi dokusu — `repeating-linear-gradient` ile 40px aralıklı ince `rgba(99,102,241,0.04)` yatay çizgiler
3. Merkez radial glow — `radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 65%)`, `blur(20px)`
4. İki köşe glow orb — sağ üst indigo, sol alt cyan, `blur(40px)`, `opacity:0.3`

**İçerik bileşenleri (merkez, dikey sıra):**
- Eyebrow: `YAZILIM KOLEKTİFİ · EST. 2026` — Space Mono, 9px, letter-spacing 5px, `#6366f1`
- FEZA başlığı: iki katman — `opacity:0.15` stroke (`-webkit-text-stroke: 1px rgba(99,102,241,0.4)`) + üzerine clip-path ile gradient fill (`linear-gradient(180deg, #f4f4f5 0%, rgba(99,102,241,0.5) 100%)`, `clip-path: inset(0 0 35% 0)` ile yarısı görünür)
- Ayırıcı çizgi: `linear-gradient(90deg, transparent, #6366f1 30%, #22d3ee 70%, transparent)`, 1px yükseklik
- `—CO` suffix: Space Mono, letter-spacing 8px, `#6366f1`
- Alt yazı: `Beş kurucu · Sınırsız vizyon` — Space Grotesk, 10px, letter-spacing 2px, `#52525b`, `text-transform: uppercase`
- CTA: `border:1px solid rgba(99,102,241,0.3)`, padding `8px 28px`, `border-radius:4px`, Space Mono, `#818cf8` — hover'da `border-color: #6366f1`, `color: #f4f4f5`

**Framer Motion animasyonu:**
```
staggerChildren: 0.12s
eyebrow:    fadeInUp, delay 0s
FEZA:       fadeIn (opacity 0→1) + scaleX (0.96→1), delay 0.12s
divider:    scaleX (0→1) + opacity, delay 0.24s
—CO:        fadeInUp, delay 0.32s
alt yazı:   fadeIn, delay 0.44s
CTA:        fadeInUp, delay 0.56s
```

**Mevcut kaldırılanlar:** `MouseGlow`, sol hizalı `max-w-3xl` içerik, stat grid (dl/dt/dd), scroll indicator mouse — bunlar Ticker ve aşağı section'lara taşınır veya kaldırılır.

**Stat grid:** Hero altına değil, Ticker section'ın hemen altına küçük bir "stat bar" olarak taşınır (4 rakam, yatay, tam genişlik).

---

### 4.2 Proje Showcase — Dergi Grid

**Layout mimarisi:**

```
[  Öne Çıkan Proje — tam genişlik, featured row  ]
[  Proje 02  |  Proje 03  ]   ← 2 kolon
[  Proje 04  |  Proje 05  ]   ← 2 kolon
[  Proje 06  |  Proje 07  ]   ← 2 kolon
[  + daha fazla ... footer bar  ]
```

**Featured row (Proje 01):**
- Tam genişlik, `min-height: 140px`
- Sol: büyük numara `01` — Archivo, 64px, `rgba(99,102,241,0.2)`, dekoratif
- Sağ: proje adı (20px bold) + hackathon badge + açıklama (13px, `#71717a`)
- Sol kenarda 3px gradient accent bar (indigo→cyan)
- Hover: `border-color` → `rgba(99,102,241,0.3)`, sağ üstten radial glow

**Normal row (Proje 02–09):**
- `grid-cols-1 md:grid-cols-2`
- Her kart: büyük numara (40px, `rgba(accent,0.2)`) + isim + yıl + status badge + 3 tech tag
- Accent rengi projeden projeden değişir: aktif=indigo, tamamlandı=emerald, planning=amber

**Framer Motion:**
- `whileInView` + `viewport: { once: true, margin: "-60px" }`
- Featured row: `fadeInUp` + `x: -20 → 0`, tek başına
- Normal kartlar: `staggerChildren: 0.08s`, her satır kendi grubu

**Mevcut `ProjectCard.tsx` ile ilişki:**
- `ProjectCard` refactor edilir — case study snapshot ve tags kaldırılır (dergi layout'a uymaz)
- Detay bilgileri `/projects/[id]` sayfasında kalmaya devam eder
- Link, GitHub/Demo butonları korunur

---

### 4.3 Team Section — Terminal Roster

**Terminal pencere yapısı:**
```
┌─────────────────────────────────────────────────────┐
│ ● ● ●  feza-co — roster.sh                          │  ← header bar
├─────────────────────────────────────────────────────┤
│ $ cat collective/members.json                        │  ← prompt satırı
│                                                      │
│ ┌─ AK ─────────────────────────────────── ● aktif ─┐│
│ │ Ahmet Karakoyun · full-stack · ai · architecture  ││
│ └───────────────────────────────────────────────────┘│
│ ┌─ TD ─────────────────────────────────── ● aktif ─┐│
│ │ Tuna Deniz · digital-twin · iot · 3d              ││
│ └───────────────────────────────────────────────────┘│
│  ... (5 satır toplam)                                │
│                                                      │
│ // 5 kurucu ortak · hiyerarşisiz · est. 2026        │  ← footer comment
└─────────────────────────────────────────────────────┘
```

**Bileşen adı:** `TerminalRoster` (`components/TerminalRoster.tsx`)

**Her üye satırı:**
- Gradient avatar circle (32px, mevcut `member.avatarGradient` kullanılır)
- İsim: Space Grotesk 13px, bold, `#f4f4f5`
- Skill slug'ları: `member.skills` array'inden ilk 3 slug, lowercase, `·` ayraçlı, monospace, accent renk
- `● aktif` badge: `#34d399`
- LinkedIn + GitHub ikonları: hover'da renklenir, `z-20` ile link overlay'in üstünde

**Seçilen satır hover efekti:**
- `background: rgba(99,102,241,0.06)`
- `border-color: rgba(99,102,241,0.2)`
- Avatar'da conic-gradient ring görünür (mevcut `MemberCard` altyapısından alınır)

**Framer Motion:**
- `staggerChildren: 0.07s`
- Her satır: `x: -16 → 0`, `opacity: 0 → 1`
- `whileInView`, `once: true`

**Terminal pencere header:**
- macOS trafik ışığı: `#ef4444`, `#f59e0b`, `#22c55e` (7px circles)
- `feza-co — roster.sh` — Space Mono 8px, `#52525b`
- Tüm pencere: `background: #0d0d10`, `border: 1px solid rgba(99,102,241,0.15)`, `border-radius: 10px`

---

## 5. Animasyon Sistemi

### 5.1 Framer Motion kurulumu

```bash
npm install framer-motion
```

**Dynamic import stratejisi:** Her animasyonlu bileşen `"use client"` directive alır. `app/page.tsx` server component olarak kalır; section bileşenleri client'a taşınır.

### 5.2 Shared motion variants (`lib/motion.ts` — yeni dosya)

```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const staggerContainer = (stagger = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } }
})

export const slideInLeft = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}
```

### 5.3 `prefers-reduced-motion` koruması

```typescript
// lib/motion.ts içine eklenecek
import { useReducedMotion } from 'framer-motion'

export function useMotionVariants(variants: Variants) {
  const reduce = useReducedMotion()
  return reduce ? {} : variants
}
```

---

## 6. Dosya Değişiklik Listesi

| Dosya | İşlem | Açıklama |
|-------|-------|----------|
| `package.json` | güncelle | `framer-motion` ekle |
| `lib/motion.ts` | **yeni** | Shared motion variants |
| `app/page.tsx` | refactor | HeroSection, ProjectSection, FoundersSection yeniden yaz |
| `components/HeroCinematic.tsx` | **yeni** | Sinematik hero bileşeni |
| `components/MagazineProjectGrid.tsx` | **yeni** | Dergi grid proje showcase |
| `components/TerminalRoster.tsx` | **yeni** | Terminal roster ekip bileşeni |
| `components/ProjectCard.tsx` | güncelle | Dergi layout için sadeleştir |
| `app/globals.css` | güncelle | Yatay çizgi doku keyframe'i + yeni utility |

### Dokunulmayan dosyalar
- `lib/data.ts` — veri katmanı değişmez
- `components/Navbar.tsx` — değişmez
- `components/Footer.tsx` — değişmez
- `components/MemberCard.tsx` — değişmez (sadece TerminalRoster'ın avatar mantığı referans alır)
- `app/members/[slug]/page.tsx` — değişmez
- `app/projects/[id]/page.tsx` — değişmez
- `tailwind.config.ts` — küçük ekleme hariç değişmez

---

## 7. Kapsam Dışı

- Yeni sayfa eklenmez
- Tema token sistemi (CSS variables) değişmez
- Tailwind dark/light config değişmez
- `lib/data.ts` veri modeli değişmez
- Navbar ve Footer layout değişmez

---

## 8. Başarı Kriterleri

- [ ] Hero Section merkez hizalı, sinematik atmosfer, Framer Motion stagger çalışıyor
- [ ] Proje Section dergi formatında, featured + normal row'lar, scroll reveal çalışıyor
- [ ] Team Section terminal penceresi görünümünde, 5 üye listeliyor, hover efektleri çalışıyor
- [ ] `npm run build` hatasız tamamlanıyor
- [ ] WCAG AA kontrast oranları korunuyor (mevcut `--text-muted` vb. token değerleri bozulmaz)
- [ ] `prefers-reduced-motion` medya sorgusu animasyonları devre dışı bırakıyor
- [ ] Mobil (375px) ve masaüstü (1440px) breakpoint'lerde layout bozulmaz
