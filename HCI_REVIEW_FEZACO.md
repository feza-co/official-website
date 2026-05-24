# HCI Review — Feza-Co Resmi Web Sitesi

**Tarih:** 2026-05-24  
**Değerlendirici:** Claude (sevgi-ai:hci-review)  
**Kapsam:** Tüm site akışı — Ana Sayfa (Hero, Ticker, Ekip, Projeler, İletişim), Proje Detay, Üye Profil, 404  
**Yöntem:** Alan Dix 3 Ana Çatı (Learnability / Flexibility / Robustness) + ISO 9241-110 + WCAG 2.1 AA  
**Referanslar:** HEURISTIC_EVAL_FEZACO.md · COLOR_AUDIT_FEZACO.md

---

## 1. Bağlam

**Ekran / Akış:** Tek sayfalık kaydırma yapısı; navbar → hero → ticker → ekip → projeler → iletişim zinciri. Proje detay ve üye profil sayfaları ayrı rotalar. 404 kurtarma sayfası.

**Kim için:** İki birincil kullanıcı sınıfı —

| Sınıf | Tanım | Bilişayar Okuryazarlığı |
|-------|-------|------------------------|
| **Potansiyel ortak / işveren** | Kolektifi değerlendiren, özgeçmiş alternatifi olarak kullanan teknik profesyonel | Sufficient |
| **Hackathon / etkinlik gözlemcisi** | Kolektifin projelerini ve kimliklerini tanımak isteyen meraklı ziyaretçi | Partial–Sufficient |

**Birincil görev:** Kolektifin kim olduğunu, ne ürettiklerini ve nasıl iletişime geçileceğini hızla kavramak.

**Cihaz / Bağlam:** Masaüstü ve mobil; olasılıkla dikkat dağıtan bir ortamda (toplantı arası, etkinlik alanı) kısa oturum.

---

## 2. Kullanıcı Modeli

### Bilişsel Kısıtlar
- **Çalışma belleği:** 7±2 bileşen kuralı — Hero'da aynı anda 6+ bilgi öğesi (rozet × 2, tagline, eyebrow, başlık, stats) yükleniyor. Ziyaretçi hangisinden başlayacağını seçememektedir.
- **Tarama örüntüsü (F-pattern):** Teknik kullanıcılar sayfayı dikey tarar; stat rakamlarını önce yatay, ardından aşağı okurlar. Mevcut dl/dt/dd yapısı bu örüntüyle uyumludur ancak `dd` öncesi `dt` okuma sırası semantik değil (HTML sırası `dd → dt`).
- **Priming:** "FEZA — CO" logosunun iki farklı boyutta (navbar küçük, hero büyük) görünmesi marka tanıma açısından olumlu; ancak "—CO" yazım varyasyonu (`— CO` hero'da, `—CO` navbar'da) tutarsızlık yaratıyor.

### Perseptüel Kısıtlar
- Gradient animasyonlu hero başlığı (`gradientShift 9s`) göz hareketini metnin merkezinden çekiyor; kullanıcı tagline'ı okumadan önce gözü başlığa bağlanıyor.
- Ticker bandı sürekli hareket ediyor (40s döngü). Artık hover'da duruyor; bu iyi. Ancak içerik neden gösterildiği hâlâ bağlamdan kopuk.

### Ergonomik Kısıtlar
- Mobilde üye kartları tek sütunda dizilip 5 kart alt alta geliyor. Küçük telefon ekranlarında (360px genişlik) kart içindeki "PROFİLİ GÖR" ifadesi kartın alt kısmından taşabilir.
- İletişim CTA'sındaki buton hedef alanı `py-4` (≈40px) — mobil için WCAG 2.5.8 minimum 24×24px geçiyor ama Apple HIG 44×44px önerisinin altında.

---

## 3. Sezgisel İnceleme — Alan Dix Çatısı

### 3.1 Learnability

**Predictability (Kullanıcı eylemin sonucunu önceden kestirebiliyor mu?)**

| # | Gözlem | Etki |
|---|--------|------|
| L1 | Üye kartları tam kartı tıklanabilir gösteriyor (overlay link) ama kart `cursor-pointer` taşıyor; aynı kart üzerindeki LinkedIn / GitHub ikonları `z-20` ile kartın üstüne çıkıyor. Kullanıcı karta tıklarken hedefinin LinkedIn mi yoksa profil sayfası mı olduğunu kestirmesi zor. | High |
| L2 | "Projeleri Gör" CTA'sı `href="#projects"` → aynı sayfada anchor scroll; "Projelere Dön" (proje detay sayfasında) `href="/#projects"` → sayfayı yeniden yükleyip section'a kaydırıyor. İkisi aynı label'ı aynı yerleşimde kullanıyor; davranış farkı görünmez. | Medium |

**Familiarity (Kullanıcının önceki deneyimiyle örtüşüyor mu?)**

| # | Gözlem | Etki |
|---|--------|------|
| L3 | `//` dekoratif prefix'i bölüm başlıklarında yaygın kullanılmış. Teknik kitleye tanıdık; ancak nav link etiketlerinde (`// Ekip`, `// Projeler`) bu notasyon saf navigasyon bağlamında standart web örüntüsüyle çakışıyor. `SectionHeader` bileşenindeki label prop'una geçilen değerlerde `//` var (`label="// Ekip"`); bu string footer ve navbar'daki sade `"Ekip"` ile tutarsız. | Low |
| L4 | İletişim bölümü standart "iletişim formu" beklentisini karşılamıyor; yalnızca mailto + GitHub linki var. Potansiyel ortak segmentinde form doldurmak e-posta client'ı açmaktan daha az sürtünmeli algılanıyor. | Medium |

**Consistency (Site içinde örüntü tutarlılığı)**

| # | Gözlem | Etki |
|---|--------|------|
| L5 | Üye profil sayfasında geri butonu `←  Kolektife Dön`, proje detay sayfasında `←  Projelere Dön`. İkisi de sol ok + metin; bu tutarlı. Ancak hover efektleri farklı: profil sayfasında `hover:text-blue-600`, proje sayfasında `hover:text-indigo-600`. Marka rengi tutarsızlığı (iki farklı mavi). | Low |

---

### 3.2 Flexibility

**Dialog Initiative (Kullanıcı mı, sistem mi inisiyatif alıyor?)**

| # | Gözlem | Etki |
|---|--------|------|
| F1 | Marquee bandı kullanıcıdan bağımsız sürekli ilerliyor; hover'da duruyor. Ancak kullanıcı içerik öğelerinin hiçbirini tıklayamıyor (tıklanabilir olmadığını gösteren `aria-hidden` veya `pointer-events-none` yok). Kullanıcı "bu öğelere tıklayabilir miyim?" sorusunu aksiyon yapmadan yanıtlayamıyor. | Medium |
| F2 | Proje kartlarında filtreleme / sıralama yok. Şu an 9 proje var; 15+ olduğunda kognitif yük artacak. Kullanıcı dilediği projeye erişmek için tümünü tararken sisteme boyun eğmek zorunda kalıyor. | Low–Medium |

**Substitutivity (Aynı göreve birden fazla yol var mı?)**

| # | Gözlem | Etki |
|---|--------|------|
| F3 | Ekip bölümüne erişim için: navbar "Ekip" linki, hero "Ekibi Tanı" CTA'sı, footer "Ekip" linki. Üç yol mevcut — esneklik açısından iyi. Proje bölümüne de benzer üç yol var. İletişim bölümüne: navbar linki + hero "İletişime geç" + footer. Çoklu erişim yolları doğru kurgulanmış. | ✓ Olumlu |

---

### 3.3 Robustness

**Observability (Kullanıcı sistemin şu anki durumunu görebiliyor mu?)**

| # | Gözlem | Etki |
|---|--------|------|
| R1 | Sticky Navbar sayfadaki aktif bölümü vurgulayan `aria-current` veya görsel işaretçi içermiyor. Uzun scroll'dan sonra kullanıcı hangi bölümde olduğunu anchor URL'e bakarak anlayabiliyor; ancak görsel geri bildirim yok. | Medium |
| R2 | Proje kartlarındaki durum rozeti (Aktif / Tamamlandı / Planlamada) `StatusDot` bileşeni + metin ile gösteriliyor. İyi. Üye profil sayfasındaki proje listesinde ise `"completed"` durumu hem `"active"` hem de diğerleri için aynı `tone="completed"` geçiliyor; `planning` durumu hiç işlenmemiş (`project.status === "active" ? "active" : "completed"` — üçüncü durum yokmuş gibi davranılıyor). | Medium |

**Recoverability (Kullanıcı hatadan ya da yanlış durumdan geri dönebiliyor mu?)**

| # | Gözlem | Etki |
|---|--------|------|
| R3 | 404 sayfası iki CTA sunuyor: "Ana Sayfaya Dön" ve "Projeleri Gör". Kullanıcı nasıl bu sayfaya geldiğini anlayabilecek bir açıklama var (`// URL hatalı olabilir...`). Kurtarma yolları yeterli. Ancak her iki buton da en fazla başa döndürüyor; kullanıcının bir önceki sayfaya gitmesini sağlayan "Geri Git" (`history.back()`) yolu yok. | Low |
| R4 | `TeamPopover` artık `relatedTarget` ile doğru kapatılıyor (H3b fix). Keyboard ile popover içine girince kapanmıyor. Ancak `role="tooltip"` semantiği yanlış: `tooltip` fare/focus açılır pasif bilgi panelini tanımlar; içinde tıklanabilir linkler olan bu popup `role="dialog"` veya `role="listbox"` olmalı. Yardımcı teknolojiler bu popup'ı "bilgi notu" olarak okuyacak, link listesi olarak değil. | High |

**Responsiveness (Sistem zamanında geri bildirim veriyor mu?)**

| # | Gözlem | Etki |
|---|--------|------|
| R5 | Hero stats grid'inde `CountUp` bileşeni animasyonlu sayaç kullanıyor. `prefers-reduced-motion` mekanizması globals.css'te tanımlı ve animasyonu kesiyor. `CountUp` bileşeninin bu tercihe uygun davranıp davranmadığı kodda kontrol edilmeli. | Low |
| R6 | E-posta linki mailto: protokolü açıyor; bu işlem kullanıcıya hiçbir geri bildirim vermeden e-posta client'ını başlatıyor. Kullanıcının e-posta client'ı yoksa veya yapılandırılmamışsa sessiz başarısızlık oluşur; `"E-posta uygulaması açılacak"` ipucu yok. | Low |

---

## 4. Bulgular Tablosu (Öncelik Sıralı)

| # | Bulgu | Etki | Önerilen Aksiyon | Alan Dix Referansı |
|---|-------|------|------------------|--------------------|
| **F01** | `role="tooltip"` içinde tıklanabilir link listesi — yardımcı teknolojiler yanlış semantik alıyor | **Critical** | `role="dialog"` + `aria-label="Ekip üyeleri"` + `aria-modal="true"` yapısına geç; `Escape` ile kapatma zaten mevcut | Robustness — Recoverability |
| **F02** | Üye kartı üzerinde örtüşen tıklanabilir alanlar: overlay link (profil) + sosyal ikon butonları (LinkedIn/GitHub) — kullanıcı hangi hedefe tıkladığını öngöremiyor | **High** | Overlay linkin `z-10`'u alt tutulmalı; sosyal ikonların `z-20` ayrımı doğru. Ancak kartın sınır bölgesindeki tıklama hedefi belirsizliği için `title` veya `aria-label` güçlendirilmeli. Alternatif: sosyal ikonları kart dışına taşı | Learnability — Predictability |
| **F03** | `role="tooltip"` sorunsalının devamı: TeamPopover klavye ile açıldığında focus popup içine taşınmıyor; focus dışarıda kalıyor, kullanıcı Tab ile üyelere ulaşamıyor (popup `tabIndex=-1` item'ları `open` durumunda `0` yapılmış ama focus yönetimi yok) | **High** | Popup açıldığında ilk liste öğesine `focus()` yönlendir; `Escape`'te tetikleyici butona geri dön | Robustness — Recoverability |
| **F04** | Navbar'da aktif bölüm göstergesi yok — uzun scroll'dan sonra kullanıcı konum kaybediyor | **Medium** | `IntersectionObserver` ile aktif bölümü tespit et; ilgili nav linkine `aria-current="page"` + `border-b-2 border-indigo-600` gibi görsel işaret ekle | Robustness — Observability |
| **F05** | Üye profil sayfasında proje durumu `planning` işlenmiyor: `project.status === "active" ? "active" : "completed"` — Planlamada projeler yanlış Tamamlandı gösteriyor | **Medium** | `tone={project.status}` doğrudan geç; StatusDot bileşeni zaten üç durumu destekliyor | Robustness — Observability |
| **F06** | `CountUp` bileşeni `prefers-reduced-motion` tercihine uymayabilir — `globals.css` kapsamı `.animate-*` sınıflarını kesiyor ama CountUp'ın kendi `requestAnimationFrame` döngüsü ayrı | **Medium** | CountUp bileşeninde `window.matchMedia("(prefers-reduced-motion: reduce)")` kontrolü ekle; `true` ise animasyon atlanarak final değer direkt gösterilsin | Robustness — Responsiveness |
| **F07** | Ticker bandındaki öğeler tıklanabilir görünmüyor; `pointer-events-none` veya `aria-hidden` yok — kullanıcı tıklamayı deniyor, yanıt yok | **Medium** | Eğer öğeler tıklanamayacaksa `aria-hidden="true"` ve `pointer-events-none` ekle. Eğer tıklanabilir yapılacaksa her öğeye `href` bağla | Flexibility — Dialog Initiative |
| **F08** | Hero'da `dl` içinde `dd` (rakam) `dt`'den (etiket) önce geliyor — ekran okuyucular rakamı etiket olmadan okuyacak | **Medium** | `dd` ve `dt` sırasını tersine çevir: önce `dt` (etiket), sonra `dd` (değer); görsel sıra `order` ile korunabilir | Learnability — Familiarity |
| **F09** | "Projeleri Gör" CTA aynı sayfa anchor scroll yapıyor (`#projects`) fakat proje detay sayfasındaki "Projelere Dön" tam sayfa reload ile aynı anchor'a gidiyor — görünürde aynı eylem, farklı davranış | **Medium** | Proje detay sayfasında `router.push("/#projects")` yerine `window.history.back()` tercihini değerlendir; kullanıcıyı kaydırdığı noktaya döndürür | Learnability — Predictability |
| **F10** | Hover rengi tutarsızlığı: üye profil geri butonu `hover:text-blue-600`, proje detay geri butonu `hover:text-indigo-600` — aynı bileşen türü, farklı renk | **Low** | İkisini de `hover:text-indigo-600 dark:hover:text-indigo-400` ile hizala | Learnability — Consistency |
| **F11** | "— CO" hero versiyonu ile "—CO" navbar/footer versiyonu tipografik varyasyon — em dash etrafındaki boşluk tutarsız | **Low** | `— CO` (boşluklu) veya `—CO` (boşluksuz) birini seçip tüm dosyalarda standarize et | Learnability — Consistency |
| **F12** | İletişim bölümü e-posta client'ını varsayıyor; mail client'ı yapılandırılmamış kullanıcıda sessiz başarısızlık | **Low** | `mailto:` linkine ek olarak e-posta adresini kopyalanabilir `<code>` bloğunda göster; veya "Kopyala" butonu ekle | Robustness — Recoverability |

---

## 5. Olumlu Noktalar

1. **Erişilebilirlik temeli sağlam:** Skip-link (`Ana içeriğe geç`), `aria-label` on sections, `aria-expanded` on mobile menu, `role="button"` on TeamPopover — temel ARIA yapısı kurulmuş.
2. **Dark mode semantiği eksiksiz:** Token sistemi `--bg`, `--text`, `--indigo` her iki modda birebir karşılığa sahip; Tailwind `.dark:` prefix'leri tutarlı uygulanmış; kontrast oranları dark modda AA+ seviyesinde.
3. **Durum iletişimi (Status communication) metin + renk + şekille yapılmış:** `StatusDot` bileşeni animasyonlu pulse + renkli nokta + üst etiket ("Aktif", "Tamamlandı") üçlüsüyle renk körü senaryosunu kapsamış.
4. **Focus yönetimi büyük ölçüde tamamlanmış:** Tüm etkileşimli öğeler `focus-visible:ring-2 focus-visible:ring-[#2563eb] ring-offset-2` ile görünür odak göstergesi taşıyor; klavye gezinti zincirine dahil edilmiş.
5. **Manifesto callout hedef kitleye doğru mesaj veriyor:** `// Bu kolektifte hiç kimse "Lead"...` bloku kolektifin kimliğini çok düşük bilişsel yükle iletmekte; beklenti yönetimi yerinde kurulmuş.

---

## 6. Kullanıcı Sınıfına Özgü Değerlendirme

### Potansiyel ortak / işveren (Sufficient literacy)
Bu kullanıcı hızla portfolyo kalitesini ölçmeye çalışır. Kritik engeller: F09 (proje detaydan geri dönünce kaydırdığı yeri kaybeder), F01 (TeamPopover role hatası yardımcı teknoloji kullanıyorsa), F04 (uzun sayfada kaybolur). Olumlu: proje detay sayfasındaki `longDescription`, `caseStudy` ve tech stack üçlüsü yeterince ayrıntılı.

### Hackathon / etkinlik gözlemcisi (Partial literacy)
Bu kullanıcı içeriği genel anlamıyla tarar ve sosyal kanallara geçmek ister. Kritik engeller: F02 (üye kartında hedef belirsizliği), F07 (ticker'ın neden döndüğü anlaşılmıyor), L4 (iletişim formu yok, sadece mailto). Olumlu: Hero'daki stat rakamları ve "Aktif Kolektif" rozeti kolektifin canlılığını hızla sinyal veriyor.

---

## 7. Sonraki Adım Önerileri

| Öncelik | Aksiyon | Tahmini Efor |
|---------|---------|-------------|
| 🔴 Derhal | F01 — TeamPopover `role="tooltip"` → `role="dialog"` + focus yönetimi | ~30 dk |
| 🔴 Derhal | F03 — Popup açılınca ilk link'e focus yönlendirme | ~15 dk |
| 🟡 Kısa vadeli | F04 — IntersectionObserver aktif bölüm vurgusu | ~1 saat |
| 🟡 Kısa vadeli | F05 — Üye profil sayfası `planning` durum fix | ~5 dk |
| 🟡 Kısa vadeli | F06 — CountUp `prefers-reduced-motion` kontrolü | ~20 dk |
| 🟡 Kısa vadeli | F08 — Stats grid `dt`/`dd` sıra düzeltmesi | ~5 dk |
| 🟢 Orta vadeli | F07 — Ticker `aria-hidden` veya tıklanabilir hale getirme | ~30 dk |
| 🟢 Orta vadeli | L4 — İletişim formu veya kopyalanabilir e-posta | ~2 saat |

---

## Self-Check

- [x] Bulgu sayısı ≥ 8 (12 bulgu)
- [x] Her bulguda etki + aksiyon var
- [x] Olumlu noktalar mevcut (5 adet)
- [x] Bulgular kullanıcı sınıfına özelleştirildi (Potansiyel ortak + Etkinlik gözlemcisi)
- [x] Yasak terimler ("kullanıcı dostu", "modern", "temiz") yok
- [x] HEURISTIC_EVAL_FEZACO.md ve COLOR_AUDIT_FEZACO.md ile çakışan bulgular atlandı / referans verildi
