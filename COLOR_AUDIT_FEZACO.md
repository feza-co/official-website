# Color Audit — Feza-Co Resmi Web Sitesi

**Tarih:** 2026-05-24  
**Değerlendirici:** Claude (sevgi-ai:color-audit)  
**Kapsam:** Tüm site — Light & Dark mode  
**Kaynaklar:** `app/globals.css` (CSS custom properties), `tailwind.config.ts`, tüm `.tsx` bileşenler  
**Referans:** WCAG 2.1 AA (metin: 4.5:1, büyük metin: 3:1, UI bileşen: 3:1) + WCAG 2.2 (2.4.11 Focus Appearance)

---

## Gri Noktalar

| # | Gri Nokta | Değerlendirme |
|---|-----------|---------------|
| 1 | Marka kısıtı | **Sabit primary:** `--indigo: #2563eb` (light), `#3b82f6` (dark). Bu renkler değiştirilemez; öneriler bunun üzerine kurulu. |
| 2 | Hedef hassasiyet | Genel yazılım/tech kitlesi. Erkeklerde ~%8 renk körlüğü görülür; deuteranopia/protanopia öncelikli. |
| 3 | Dark mode hedefi | **Zorunlu** — `.dark` sınıfı ile tam destek var. Her renk çifti her iki mod için ayrı değerlendirildi. |

---

## 1. Mevcut Palet Tablosu

### Light Mode (`#fafafa` zemin)

| Token / Sınıf | Hex | Rol | CR vs #fafafa | CR vs #ffffff |
|---------------|-----|-----|--------------|--------------|
| `--text` | `#09090b` | Body metin | **19.06 ✓ AAA** | 19.77 |
| `--text-secondary` | `#3f3f46` | İkincil metin | **10.01 ✓ AAA** | 10.37 |
| `--text-muted` | `#52525b` | Soluk metin | **7.41 ✓ AAA** | 7.67 |
| `--text-xs` | `#64748b` | Küçük başlık/caption | **4.56 ✓ AA** | 4.72 |
| `--text-faint` | `#94a3b8` | Dekoratif (aria-hidden) | 2.46 ✗ (dekoratif) | 2.55 |
| `--indigo` (brand) | `#2563eb` | Marka rengi, CTA | **4.95 ✓ AA** | 5.17 |
| `indigo-500` (Tailwind) | `#6366f1` | Etiket metni | **4.28 ✗ FAIL** | 4.47 ✗ FAIL |
| `indigo-700` (Tailwind) | `#4338ca` | Hover metin | **7.57 ✓ AAA** | 7.82 |
| `cyan-600` (Tailwind) | `#0891b2` | Logo aksan "—CO" | **3.53 ✗ FAIL** | 3.68 ✗ FAIL |
| `cyan-700` / `--cyan-strong` | `#0e7490` | Güvenli cyan metin | **5.13 ✓ AA** | 5.36 ✓ |
| `emerald-700` | `#047857` | Badge metin (Aktif) | **5.25 ✓ AA** | 5.48 ✓ |
| `rose-500` | `#f43f5e` | "Problem" etiketi | **3.52 ✗ FAIL** | 3.67 ✗ FAIL |
| `white` on `indigo-600` | `#fff / #4f46e5` | Demo butonu | — | **6.29 ✓ AA** |
| `white` on brand indigo | `#fff / #2563eb` | CTA butonu | — | **5.17 ✓ AA** |

### Dark Mode (`#0a0a0b` zemin / `#161618` kart)

| Token / Sınıf | Hex | Rol | CR vs #0a0a0b | CR vs #161618 |
|---------------|-----|-----|--------------|--------------|
| `--text` | `#f4f4f5` | Body metin | **18.00 ✓ AAA** | 15.32 |
| `--text-secondary` | `#d4d4d8` | İkincil metin | **13.39 ✓ AAA** | 11.38 |
| `--text-muted` | `#a1a1aa` | Soluk metin | **7.72 ✓ AAA** | 6.57 |
| `--text-xs` | `#94949c` | Caption | **6.57 ✓ AA** | 5.58 |
| `--text-faint` | `#71717a` | Dekoratif | 4.09 AA-Large | 3.48 |
| `--indigo` dark | `#3b82f6` | Aksan metin | **6.63 ✓ AA** | 5.63 |
| `indigo-400` dark | `#818cf8` | Label metin | **5.63 ✓ AA** | **6.06 ✓ AA** |
| `indigo-300` dark | `#a5b4fc` | Hover/marquee | 8.02 ✓ AAA | — |
| `cyan-400` dark | `#22d3ee` | Aksan | 10.00 ✓ AAA | — |
| `--cyan-strong` dark | `#67e8f9` | Güvenli cyan | **13.65 ✓ AAA** | — |
| `emerald-400` dark | `#34d399` | Başarı | **10.29 ✓ AAA** | 9.40 |
| `rose-500` dark | `#f43f5e` | Problem etiketi | **5.39 ✓ AA** | 4.58 ✓ |

---

## 2. Color Harmony Tespiti

**Tespit edilen harmoni: Analogous + Monochromatic iç içe geçmiş**

```
Renk tekerleği konumları (yaklaşık HSL):
  Indigo: 231°  (marka primary)
  Cyan:   192°  (secondary/aksan)
  Emerald: 160° (başarı/aktif)
  Rose:   350°  (uyarı/problem)

Dominant grup → Indigo + Cyan: ~39° arayla ANALOGOUS (soğuk/teknolojik his)
Rose → split-complementary konumunda (indigo'nun ~120° karşısı)
Emerald → üçüncü nokta, triadic'e yakın
```

**Değerlendirme:**  
Analogous mavi/cyan grubu tech kolektif kimliğiyle mükemmel örtüşüyor — soğuk, güvenilir, minimal. Emerald "aktif/başarı" anlamını taşıyor (iyi seçim). Rose yalnızca "Problem" etiketinde kullanılıyor (sınırlı, işlevsel). Harmoni proje için uygun; ancak tek bir ısı noktası (warm accent) eksik — uzun vadede monoton görünüm riski var.

---

## 3. 60-30-10 Kuralı Kontrolü

| Oran | Renk Grubu | Tahmini Kullanım | Hedef |
|------|-----------|-----------------|-------|
| **~62%** | Nötr (feza-bg, card, surface, text) | Yüzey + gövde metin | 60% ✓ |
| **~27%** | Indigo (tüm varyantlar) | Etiket, vurgu, CTA, hover | 30% ≈✓ |
| **~8%** | Cyan + Emerald (aksan çifti) | Logo, badge, başarı durumu | 10% ≈✓ |
| **~3%** | Rose | Problem etiketi (çok sınırlı) | — |

**Sonuç:** 60-30-10 oranı **kabul edilebilir** — sapma minimal. Indigo dominant'ın biraz üzerinde (%27 vs %30 hedef); ancak karanlık/nötr yüzeylerin ağırlığı bunu dengeler.

---

## 4. WCAG 2.1 AA Kontrast Tablosu (Tam Liste)

### ✗ FAIL olan kombinasyonlar

| # | Metin / UI | Arka Plan | Kontrast | AA Normal (4.5) | AA Large (3.0) | Açıklama |
|---|-----------|-----------|----------|-----------------|----------------|----------|
| F1 | `indigo-500` `#6366f1` | `#fafafa` | **4.28** | ✗ FAIL | ✓ | Etiket metni (küçük, 10-11px); tüm bileşenlerde yaygın |
| F2 | `indigo-500` `#6366f1` | `#ffffff` | **4.47** | ✗ FAIL | ✓ | Kart üzerindeki etiket |
| F3 | `cyan-600` `#0891b2` | `#fafafa` | **3.53** | ✗ FAIL | ✓ | "—CO" logo aksan metni (navbar + footer) |
| F4 | `cyan-600` `#0891b2` | `#ffffff` | **3.68** | ✗ FAIL | ✓ | Kart üzerinde logo |
| F5 | `rose-500` `#f43f5e` | `#ffffff` | **3.67** | ✗ FAIL | ✓ | "Problem" etiketi (kart, proje detay) |
| F6 | `rose-500` `#f43f5e` | `#fafafa` | **3.52** | ✗ FAIL | ✓ | Proje kartı arka plan |
| F7 | Focus ring `indigo-500/35%` | `#ffffff` | **~1.59** | ✗ FAIL | ✗ FAIL | Alfa-blended focus ring — WCAG 2.4.11 ihlali |
| F8 | Gradient metin cyan `#06b6d4` segmenti | `#fafafa` | **2.33** | ✗ FAIL | ✗ FAIL | "FEZA" hero başlığı gradient'ının cyan bölümü |

### ✓ Geçen kombinasyonlar (kritik seçki)

| Metin / UI | Arka Plan | Kontrast | Sonuç |
|-----------|-----------|----------|-------|
| `--text` `#09090b` | `#fafafa` | 19.06 | ✓ AAA |
| `--text-secondary` `#3f3f46` | `#fafafa` | 10.01 | ✓ AAA |
| `--text-muted` `#52525b` | `#fafafa` | 7.41 | ✓ AAA |
| `--text-xs` `#64748b` | `#fafafa` | 4.56 | ✓ AA |
| `--indigo brand` `#2563eb` | `#fafafa` | 4.95 | ✓ AA |
| `indigo-700` `#4338ca` | `#fafafa` | 7.57 | ✓ AAA |
| `cyan-700` `#0e7490` | `#fafafa` | 5.13 | ✓ AA |
| `emerald-700` `#047857` | `#fafafa` | 5.25 | ✓ AA |
| `white` on `indigo-600` Tailwind | `#4f46e5` | 6.29 | ✓ AA |
| `white` on brand indigo | `#2563eb` | 5.17 | ✓ AA |
| Dark: `#f4f4f5` | `#0a0a0b` | 18.00 | ✓ AAA |
| Dark: `indigo-400` `#818cf8` | `#161618` | 6.06 | ✓ AA |
| Dark: `emerald-400` `#34d399` | `#0a0a0b` | 10.29 | ✓ AAA |
| Dark: `cyan-400` `#22d3ee` | `#161618` | 10.00 | ✓ AAA |
| Dark: `rose-500` `#f43f5e` | `#0a0a0b` | 5.39 | ✓ AA |
| `indigo-700` on `indigo-50` (Marquee light) | `#eef2ff` | 7.07 | ✓ AAA |

---

## 5. Color Blindness Simülasyonu

### Protanopia (kırmızı duyarsız, ~erkeklerin %1'i)
- **Etki:** Indigo↔Cyan ayrımı **iyi** (parlaklık farkı büyük). Rose-500 → koyu sarımsı-kahve görünür; "Problem" etiketi anlaşılabilir ama kırmızı uyarı çağrışımı kaybolur.
- **Risk:** Düşük — sadece rose renkli bilgi taşıyan etiketlerde ikon yok.
- **Öneri:** `Problem` etiketine `⚠` ikon ekle; rengin tek iletişim kanalı olmasın.

### Deuteranopia (yeşil duyarsız, ~erkeklerin %5-6'sı — EN YAYGIN)
- **Etki:** Emerald-500 yeşili (`#10b981`) → sarı/bej görünür. "Aktif" rozeti yeşil nokta → sarımsı. Emerald ve indigo'nun parlaklık farkı korunuyor, ancak "yeşil = başarı" semiyotiği bozulur.
- **Risk:** Orta. Status dot'lar yalnızca renkle ayırt edilebilir; "Aktif" vs "Tamamlandı" durumu deuteranopia'da belirsizleşir.
- **Öneri:** Status göstergelerine şekil veya metin etiketi ekle (zaten `label` var — **iyi**). Yeşil nokta `●` → yeşil + dolu daire `●` korunabilir; ancak "Planlamada" için farklı şekil (örn. `◆`) kullan.

### Tritanopia (mavi duyarsız, ~%0.01 — nadir)
- **Etki:** Cyan `#06b6d4` → yeşil/sarı görünür. İndigo mavi `#2563eb` → kırmızı/yeşil karışımı. Marka rengi ciddi biçimde değişir.
- **Risk:** Düşük (çok nadir tip) — yine de logo "FEZA—CO" aksan ayrımı bozulur.
- **Öneri:** Bu nadir senaryoda bile logo metni "FEZA" okunabilir; aksan sadece görsel dekor işlevi görüyor — tolere edilebilir.

---

## 6. Color Coding Denetimi ("Avoid relying solely on color")

| Kullanım | Renk | İkon/Etiket var mı? | Karar |
|----------|------|---------------------|-------|
| Aktif proje durumu | Emerald nokta | ✓ "Aktif" yazısı | **Geçer** |
| Tamamlandı durumu | Indigo nokta | ✓ "Tamamlandı" yazısı | **Geçer** |
| Planlamada durumu | (planning tone) | ✓ "Planlamada" yazısı | **Geçer** |
| "Problem" case study etiketi | Rose-500 metin | ✗ İkon yok — sadece renk + "Problem" kelimesi | **Sınırda** (kelime iletişim kanalını taşıyor, ikon olsa daha güçlü) |
| "Aktif Kolektif" rozeti | Yeşil nokta | ✓ "Aktif Kolektif" yazısı | **Geçer** |
| Marquee: "Yakında" | Indigo nokta | ✓ "Yakında" yazısı | **Geçer** |
| Gradient başlık "FEZA" | Gradient renk | ✓ Metin kendisi taşıyıcı | **Geçer (dekoratif)** |
| Linklerin focus durumu | Renk + ring | ✗ Ring alfa < 3:1 | **FAIL — F7 bkz.** |

**Tek kritik sorun:** Focus ring'ler saydamlıklı (`/35`, `/30`); yüksek kontrastlı bir arka plan üzerinde neredeyse görünmez olabilir.

---

## 7. Dark Mode Kontrolü

| Boyut | Durum |
|-------|-------|
| Tüm token'ların dark karşılığı tanımlı mı? | ✓ `.dark` bloğunda eksiksiz |
| Text token'lar AA geçiyor mu? | ✓ `--text` → `--text-xs` hepsi AA+ |
| `--text-faint` dark `#71717a` | 4.09 AA-Large ✓ (dekoratif, ok) |
| Indigo aksanı dark'ta okunuyor mu? | ✓ `indigo-400` (#818cf8) → 6.06:1 |
| Cyan aksanı dark'ta güvenli mi? | ✓ `cyan-400` → 10.00:1 |
| Emerald dark geçiyor mu? | ✓ 10.29:1 (AAA) |
| Rose dark'ta geçiyor mu? | ✓ 5.39:1 on dark bg |
| Saturation ayarı yapılmış mı? | ✓ Light `#2563eb` → dark `#3b82f6` (daha açık, uygun) |
| Gradient metin dark modda? | `text-gradient-brand` dark'ta — gradyan yeniden hesaplanmadı; dark `--text` ve `--indigo` kullanılıyor. Dark `--indigo` `#3b82f6` → `#0a0a0b` üzerinde 6.63 ✓ |

**Dark mode genel olarak sağlam.** Ana sorunlar yalnızca light mode'da.

---

## 8. Önerilen Düzeltilmiş Palet

### FAIL F1 & F2 — `indigo-500` → `indigo-600 brand`

**Sorun:** Etiket metinleri (`text-indigo-500`) tüm bileşenlerde yaygın kullanılmış; küçük font boyutlarında AA sağlanamıyor (4.28 / 4.47).

**Düzeltme:** Tailwind `text-indigo-500` → marka `text-[#2563eb]` veya Tailwind `text-indigo-600` (4.95 → AA ✓).

> Not: Mevcut `.dark` `text-indigo-400` dark modda 6.06 geçiyor; yalnızca light taraf değişmeli.

```diff
- className="... text-indigo-500 ..."
+ className="... text-[#2563eb] dark:text-indigo-400 ..."
```

Alternatif: Tailwind config'e özel token ekle:
```ts
// tailwind.config.ts
colors: {
  feza: {
    accent: "#2563eb",        // 4.95:1 on #fafafa ✓
    "accent-dark": "#818cf8", // 6.06:1 on #161618 ✓
  }
}
```

---

### FAIL F3 & F4 — `cyan-600` → `cyan-700` (Logo "—CO" aksanı)

**Sorun:** `text-cyan-600` (#0891b2) → 3.53:1 küçük metin için FAIL.

**Düzeltme:** `text-cyan-700` (#0e7490) → 5.13:1 ✓ AA.

```diff
- <span className="text-cyan-600">—CO</span>
+ <span className="text-cyan-700 dark:text-cyan-400">—CO</span>
```

Kontrast: `#0e7490` on `#fafafa` = **5.13 ✓** | `#0e7490` on `#ffffff` = **5.36 ✓**

---

### FAIL F5 & F6 — `rose-500` → `rose-700` (Problem etiketi)

**Sorun:** `text-rose-500` (#f43f5e) → 3.52:1 / 3.67:1 — küçük metin için FAIL.

**Düzeltme:** `text-rose-700` (#be123c) → 6.02:1 ✓ AA (veya `rose-600` → 4.70 AA). Dark modda rose-500 zaten geçiyor (5.39), dark tarafı koru.

```diff
- accent: "text-rose-500"
+ accent: "text-rose-700 dark:text-rose-400"
```

> `rose-400` = `#fb7185` | dark bg `#0a0a0b` üzerinde: ~6.3:1 ✓

---

### FAIL F7 — Focus ring görünürlüğü (`indigo-500/35`, `blue-500/30`)

**Sorun:** Alfa-blended ring `#6366f1` at 35% → composited `#c8c9fa` → `#ffffff` üzerinde sadece **1.59:1** (WCAG 2.4.11: 3:1 minimum).

**Düzeltme A (tercihli):** Solid ring + offset:
```diff
- focus-visible:ring-2 focus-visible:ring-indigo-500/35
+ focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-white
```
`#2563eb` on `#ffffff` = **5.17:1 ✓**

**Düzeltme B:** Double ring (outline on outline):
```
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]
```

---

### FAIL F8 — Gradient metin "FEZA" hero başlığı

**Sorun:** `text-gradient-brand` → cyan `#06b6d4` segmenti → `#fafafa` üzerinde 2.33:1 (büyük metin bile 3:1 eşiğini geçmiyor).

**Bağlam:** "FEZA" başlığı 52px+ (clamp min 3.25rem = 52px bold). WCAG 1.4.3 büyük metin: **3:1** gerekli. 2.33 → FAIL.

**Düzeltme:** Gradyanı `#06b6d4` yerine `#0891b2` (cyan-600) ile başlat veya `#0e7490` (cyan-700):
```diff
  background: linear-gradient(
    120deg,
    var(--text) 0%,
    var(--text) 35%,
    var(--indigo) 55%,
-   var(--cyan) 75%,     /* #06b6d4 → 2.33:1 FAIL */
+   #0891b2 75%,         /* cyan-600 → 3.53:1 ✓ Large */
    var(--text) 100%
  );
```
> Alternatif: `--cyan-strong: #0e7490` → **5.13:1** hem large hem normal text geçer.

---

## 9. Özet FAIL Matrisi

| # | Kombinasyon | Mevcut CR | Durum | Düzeltilmiş Renk | Yeni CR |
|---|------------|-----------|-------|------------------|---------|
| F1 | `indigo-500` on `#fafafa` | 4.28 | ✗ AA FAIL | `#2563eb` (brand) | **4.95 ✓** |
| F2 | `indigo-500` on `#ffffff` | 4.47 | ✗ AA FAIL | `#2563eb` (brand) | **5.17 ✓** |
| F3 | `cyan-600` on `#fafafa` | 3.53 | ✗ AA FAIL | `#0e7490` cyan-700 | **5.13 ✓** |
| F4 | `cyan-600` on `#ffffff` | 3.68 | ✗ AA FAIL | `#0e7490` cyan-700 | **5.36 ✓** |
| F5 | `rose-500` on `#fafafa` | 3.52 | ✗ AA FAIL | `#be123c` rose-700 | **6.02 ✓** |
| F6 | `rose-500` on `#ffffff` | 3.67 | ✗ AA FAIL | `#be123c` rose-700 | **6.29 ✓** |
| F7 | Focus ring `#6366f1/35%` on `#fff` | ~1.59 | ✗ 2.4.11 FAIL | Solid `#2563eb` +offset | **5.17 ✓** |
| F8 | Gradient cyan `#06b6d4` on `#fafafa` | 2.33 | ✗ Large FAIL | `#0e7490` cyan-700 | **5.13 ✓** |

---

## Self-Check

- [x] Tüm metinler için kontrast hesaplandı (light + dark, token + Tailwind sınıfları)
- [x] Color harmony tespit edildi (Analogous indigo-cyan + functional emerald/rose)
- [x] 60-30-10 kontrol edildi (≈62/27/8/3 — kabul edilebilir)
- [x] Color blindness 3 tip için yorumlandı (deuteranopia en kritik)
- [x] FAIL'lar için somut hex önerisi var (F1-F8 her biri)
- [x] Görsel kanal (ikon/şekil) önerileri verildi (status dot + Problem etiketi)
- [x] Dark mode ayrı kontrol edildi; tüm dark token'lar AA+

---

## Sonraki Adımlar

- `/sevgi-ai:hci-review` — Kapsamlı HCI değerlendirmesi (bilişsel yük, görev akışı)
- `/sevgi-ai:heuristic-eval` — Bu bulgularla entegre Nielsen denetimi (zaten tamamlandı: `HEURISTIC_EVAL_FEZACO.md`)
- **Öncelikli düzeltme:** F7 (Focus ring) → WCAG 2.4.11 AA ihlali, klavye erişilebilirliğini doğrudan etkiliyor
- **İkinci öncelik:** F1/F2 → `indigo-500` → `#2563eb` global token değişikliği (113 kullanım yeri)
