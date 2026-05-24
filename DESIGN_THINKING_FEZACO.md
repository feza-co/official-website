# Design Thinking Yol Haritası — Feza-Co Web Sitesi UX

**Tarih:** 2026-05-24  
**Hazırlayan:** sevgi-ai:design-thinking  
**Problem Alanı:** Feza-Co kolektif web sitesinin kullanıcı deneyimini iyileştirmek  
**Başlangıç Noktası:** Test aşaması (prototip canlı; heuristic eval + HCI review tamamlandı)  
**Takvim:** Açık / Esnek  
**Mevcut Kaynaklar:** `HEURISTIC_EVAL_FEZACO.md` · `HCI_REVIEW_FEZACO.md` · `COLOR_AUDIT_FEZACO.md`

---

## Süreç Haritası

```
Empathize → Define → Ideate → Prototype → [TEST ← Buradasınız]
               ↑                               ↓
               └───────── İterasyon ───────────┘
```

> **Bu süreç doğrusal değil, iteratiftir.**  
> Test bulgularına göre Empathize veya Define aşamasına geri dönmek hem beklenen hem de sağlıklı bir süreç adımıdır.

---

## Aşama 1 — Empathize (Anla)

**Amaç:** Feza-Co web sitesinin ziyaretçilerini — potansiyel ortak, işveren ve hackathon gözlemcisini — derinden tanı. Varsayımları sorgula.

### Aktiviteler

| Aktivite | Açıklama | Yöntem |
|----------|----------|--------|
| **Observe** | Ziyaretçilerin sitede nasıl gezindiğini kayıtsız gözlemle | Session recording (Hotjar / MS Clarity — ücretsiz tier) |
| **Engage** | 3-5 hedef kullanıcı ile 20 dakikalık yarı yapılandırılmış görüşme | Interview, think-aloud protokolü |
| **Immerse** | Benzer kolektif / portfolyo sitelerini kullanıcı gözüyle incele | Contextual inquiry, rekabet analizi |

### Önerilen Görüşme Soruları (Starter Kit)

```
1. Bu siteye ilk geldiğinde gözün nereye gitti?
2. Kolektifin ne yaptığını 10 saniyede anlayabildin mi?
3. Bir üyeyle iletişime geçmek isteseydin ne yapardın?
4. Seni en çok şaşırtan şey ne oldu? (Olumlu veya olumsuz)
5. Mobilde mi, masaüstünde mi görüntüledin — deneyim nasıldı?
```

### Çıktılar

- Kullanıcı görüşme notları (ham alıntı koleksiyonu)
- Empathy Map: 2 birincil kullanıcı sınıfı için (Bkz. Kullanıcı Profilleri)
- Fotoğraf / ekran kaydı arşivi
- Mevcut HCI bulgularını destekleyen / çürüten kanıt listesi

### Kullanıcı Profilleri (HCI Review'dan türetildi)

| Sınıf | Hedef | Bilişayar Okuryazarlığı | Cihaz Tercihi |
|-------|-------|-------------------------|---------------|
| **Potansiyel ortak / işveren** | Kolektifin kimliğini, projelerini ve iletişim yolunu anlamak | Yüksek (teknik profesyonel) | Masaüstü ağırlıklı |
| **Hackathon / etkinlik gözlemcisi** | Kolektifin yarışma geçmişini ve kimlerden oluştuğunu kavramak | Orta | Mobil ağırlıklı |

### Tahmini Süre

`1–2 hafta` (görüşmeler + gözlem analizi)

---

## Aşama 2 — Define (Tanımla)

**Amaç:** Empathize aşamasından toplanan veriyi anlamlı bir problem ifadesine ve aksiyon alınabilir sorulara dönüştür.

### Aktiviteler

| Aktivite | Açıklama | Araç |
|----------|----------|------|
| **Synthesize** | Görüşme notlarını tema gruplarına ayır (affinity diagramming) | Miro / FigJam sticky notes |
| **Frame** | En kritik kullanıcı ihtiyacını tek cümleyle ifade et | POV (Point of View) şablonu |
| **Articulate** | "Nasıl yapabiliriz?" soruları ile çözüm alanını genişlet | HMW soruları |

### POV Şablonu

```
[Kullanıcı sınıfı] [ihtiyaç]'a sahip,
çünkü [içgörü — varsayım değil gözlemlenmiş gerçek].
```

**Taslak POV'lar (test + heuristic bulgularından türetildi):**

> *Potansiyel işveren, kolektifin ürün kapasitesini hızla anlamaya ihtiyaç duyar, çünkü Hero'daki bilgi yoğunluğu (rozet × 2, stat × 4, başlık, eyebrow) dikkatini dağıtarak asıl mesaja ulaşmasını geciktiriyor.* [H8a, HCI §2]

> *Klavye kullanan ziyaretçi, üye popover içeriğine ulaşmaya ihtiyaç duyar, çünkü focus kaybı popover'ı anında kapatıyor ve ekran okuyucu kullanıcısı profil linklerine hiç erişemiyor.* [H3b — Catastrophic]

> *Mobil kullanıcı, üye profillerini keşfetmeye ihtiyaç duyar, çünkü "PROFİLİ GÖR" butonu yalnızca hover'da görünür, dokunmatik ekranda bu affordance hiç tetiklenmiyor.* [H6b — Major]

### HMW (How Might We) Soruları

```
1. Hero bölümünü nasıl sadeleştiririz ki ziyaretçi 5 saniyede kolektifin kim olduğunu anlasın?
2. Klavye ve ekran okuyucu kullanıcısının üye popover'ına erişimini nasıl sağlarız?
3. "PROFİLİ GÖR" affordance'ını dokunmatik cihazlarda nasıl görünür kılarız?
4. İletişim sonrası onay deneyimini nasıl oluştururuz ki kullanıcı mesajın ulaştığını bilsin?
5. Ticker bandının bağlamını nasıl açık hale getiririz ki ziyaretçi neden gösterildiğini anlasın?
```

### Çıktılar

- Problem statement (1 nihai cümle)
- Önceliklendirilmiş HMW soruları (Impact × Effort matrisi)
- Güncellenmiş Persona (Empathize bulgularıyla zenginleştirilmiş)
- User Journey Map: potansiyel işveren için adım adım akış

### Tahmini Süre

`3–5 gün`

---

## Aşama 3 — Ideate (Fikir Üret)

**Amaç:** Her HMW sorusu için olabildiğince çok ve çeşitli çözüm üret; değerlendirmeyi sonraya bırak.

### Aktiviteler

| Aktivite | Açıklama | Kural |
|----------|----------|-------|
| **Brainstorm** | 5 kişi × 10 dakika × her HMW sorusu | "Defer judgment — wild ideas welcome" |
| **Crazy 8s** | Her üye 8 dakikada 8 farklı çözüm taslağı çizer | Hız > kalite |
| **SCAMPER** | Mevcut Hero bileşenine SCAMPER lens'i uygula | Substitute / Combine / Adapt / Modify / Put to other uses / Eliminate / Reverse |
| **Worst Possible Idea** | Kasten kötü fikirler üret → tersine çevir | Blokajı kırmak için |

### SCAMPER Uygulaması — Hero Bölümü

| Lens | Soru | Örnek Fikir |
|------|------|-------------|
| **Eliminate** | Hero'daki hangi öğe kaldırılırsa mesaj daha net olur? | Versiyon marker'ı (`v1 · est. 2026`) kaldır |
| **Substitute** | İki rozeti tek güçlü ifadeyle değiştirir miyiz? | "Aktif Kolektif" rozeti → `<StatusBadge>` tek bileşene |
| **Combine** | Stat grid'ini ve eyebrow'u birleştirip kompakt bir info-strip yapabilir miyiz? | Bir `<InfoStrip>` bileşeni |
| **Adapt** | Diğer kolektif sitelerinde (e.g., Basecamp, XXIX) ne işe yarıyor? | Minimal tek-cümle manifesto hero'su |
| **Modify** | Ticker bandına bağlam başlığı eklenirse ne olur? | `aria-label="Katılınan Hackathonlar & Kullanılan Teknolojiler"` + görsel etiket |

### Fikir Daraltma Kriterleri

- **Impact:** Kullanıcı sorununu ne kadar çözüyor? (1–5)
- **Effort:** Uygulama maliyeti ne kadar? (1–5)
- **Heuristic Match:** Mevcut bulgulardan kaçını adresliyor?

### Çıktılar

- Ham fikir listesi (30+ fikir, filtresiz)
- Impact × Effort matrisi → 5–10 "promising" fikir
- Prototiplenecek top-3 fikir

### Tahmini Süre

`2–3 gün`

---

## Aşama 4 — Prototype (Prototiple)

**Amaç:** Seçilen fikirleri elle tutulur ve test edilebilir hale getir. Hızlı ve ucuz.

### Adım Adım

```
Sketch (kağıt) → Wireframe (Figma mid-fi) → Clickable (Figma hi-fi)
```

| Aşama | Açıklama | Araç | Süre |
|-------|----------|------|------|
| **Lo-fi** | Kağıt çizim — Hero sadeleştirme + popover erişilebilirlik akışı | Kağıt + kalem | 1 gün |
| **Mid-fi** | Figma wireframe — Navbar klavye akışı, üye kart affordance | Figma | 3–4 gün |
| **Hi-fi** | Figma clickable — Gerçek renk sistemi, animasyon + iletişim formu akışı | Figma + feza token sistemi | 1 hafta |

### Öncelikli Prototip Senaryoları (Heuristic bulgularından türetildi)

| Senaryo | İlgili Bulgu | Severity |
|---------|-------------|----------|
| 1. TeamPopover klavye navigasyonu | H3b — `onBlur` focus trap sorunu | **Catastrophic (4)** |
| 2. MemberCard daima görünür "Profili Gör" CTA | H6b — Hover-only affordance | Major (3) |
| 3. Hero bilgi yoğunluğu azaltma | H8a + HCI §2 Bilişsel Kısıtlar | Cosmetic→Major |
| 4. Footer focus-visible iyileştirme | H4a — Tutarsız focus stili | Major (3) |
| 5. İletişim formu + onay mesajı | H10a — Yanıt onayı yok | Major (3) |

### Storyboard — Kullanıcı Akışı (Potansiyel İşveren)

```
[Siteye Giriş]
    ↓
[Hero: Kolektif kimliğini 5 sn'de kavra]
    ↓
[Ekip bölümü: Üye kartına hover/focus → "Profili Gör" daima görünür]
    ↓
[Üye profil sayfası: Proje listesi, beceriler, iletişim]
    ↓
[İletişim: Form gönder → Onay mesajı → "Mesajınız alındı, N gün içinde yanıtlanacak"]
```

### Çıktılar

- Lo-fi kağıt eskizler (fotoğraflanmış)
- Mid-fi Figma wireframe linki
- Hi-fi Figma clickable prototype
- Prototip test senaryoları dökümanı

### Bağlı Skill

→ `/sevgi-ai:prototype-plan` — detaylı prototip planlama çerçevesi

### Tahmini Süre

`1–2 hafta`

---

## Aşama 5 — Test (Doğrula)

**Amaç:** Prototipi gerçek kullanıcılarla test et, geri bildirim al, iterate et.

> **Mevcut durum: Bu aşamanın başındayız.**  
> Heuristic Evaluation ve HCI Review tamamlandı (uzman değerlendirmesi). Sıradaki adım: gerçek kullanıcı testi.

### Test Türleri

| Tür | Açıklama | Ne Zaman |
|-----|----------|----------|
| **Moderated Think-Aloud** | Kullanıcı sesli düşünürken gözlemle | Mid-fi → Hi-fi arası |
| **Unmoderated Remote** | Maze / Useberry ile asenkron görev testi | Hi-fi sonrası |
| **A/B Test** | Hero sadeleştirme vs. mevcut — 2 varyant | Canlı site üzerinde |
| **Klavye / Erişilebilirlik Testi** | Ekran okuyucu (VoiceOver/NVDA) ile görev tamamlama | H3b + H6b düzeltme sonrası |

### Görev Senaryoları (Test Script)

```
Görev 1 — Kolektif Tanıma (max 30 sn)
"Siteye ilk girdiniz. Kolektifin ne yaptığını bana anlatın."
Başarı kriteri: 'yazılım kolektifi', 'beş kurucu', 'proje' anahtar kelimeleri

Görev 2 — Üye Profili Keşfi
"Ahmet Karakoyun hakkında bilgi edinmek istiyorsunuz. Ne yaparsınız?"
Başarı kriteri: /members/ahmet-karakoyun sayfasına 3 tıklamada ulaşma

Görev 3 — İletişim
"Kolektifle iletişime geçmek istiyorsunuz. Bunu nasıl yaparsınız?"
Başarı kriteri: İletişim bölümü + e-posta/form bulma + onay mesajı görme

Görev 4 — Klavye Erişilebilirliği
"Yalnızca klavye kullanarak bir üyenin popover'ını açın."
Başarı kriteri: H3b düzeltme sonrası — popover'a Tab ile ulaşma ve link tıklama
```

### Başarı Metrikleri

| Metrik | Hedef |
|--------|-------|
| Görev tamamlama oranı | ≥ %80 (her görev) |
| Klavye navigasyon başarısı | %100 (Catastrophic H3b) |
| Ortalama görev süresi (Görev 1) | ≤ 30 saniye |
| SUS (System Usability Scale) skoru | ≥ 70 (C derecesi) |
| WCAG 2.1 AA uyum | %100 AA level |

### Bulgu Raporu Şablonu

```md
## Test Bulgular Raporu — [Tarih]
### Katılımcı Profili (n=5 minimum)
### Görev Sonuçları (başarı oranı per görev)
### Kritik Bulgu Listesi (severity sırasıyla)
### İterasyon Kararları (Hangi bulgu hangi aşamaya döndürüyor?)
### Sonraki Sprint Hedefleri
```

### Çıktılar

- Kullanıcı test kaydı arşivi (video + ekran kaydı)
- Görev başarı matrisi
- SUS anketi sonuçları
- Bulgu raporu → **iyileştirme aksiyonları listesi**
- İterasyon kararı: Hangi bulgu Empathize/Define/Ideate aşamasına geri dönüyor?

### Bağlı Skill

→ `/sevgi-ai:usability-eval-plan` — detaylı kullanılabilirlik değerlendirme planı

### Tahmini Süre

`1 hafta` (per test turu)

---

## Mevcut Öncelik Matrisi (Heuristic Bulgularından)

> Test yaparken hangi bulgulara odaklanılacağını belirlemek için:

| Severity | Bulgu | Aşama Tavsiyesi |
|----------|-------|-----------------|
| **Catastrophic (4)** | H3b — TeamPopover klavye focus trap | → Prototype + Test (acil) |
| **Major (3)** | H3a — Mobil menü Escape / focus yönetimi | → Prototype + Test |
| **Major (3)** | H4a — Footer focus-visible tutarsızlığı | → Ideate → Prototype |
| **Major (3)** | H6b — MemberCard hover-only CTA | → Ideate → Prototype |
| **Major (3)** | H10a — İletişim onay mesajı yok | → Ideate → Prototype |
| **Major (3)** | H1a — Marquee duraklatılamıyor | → Ideate → Prototype |
| **Minor (2)** | H2a/H2b — `//` notasyonu tutarsızlığı | → Ideate → Prototype |
| **Minor (2)** | H7a — Aktif bölüm vurgusu yok | → Ideate → Prototype |

---

## İterasyon Döngüsü

```
Test Bulgusu
    ↓
Severity 4-3 → Empathize'a dön (varsayım yanlışsa) veya Define → Ideate → Prototype → Test
Severity 2   → Define → Ideate → Prototype → Test
Severity 1   → Ideate → Prototype → Test (Cosmetic — sprint sonuna bırak)
```

---

## Hocanın AskToExperts Örneğiyle Karşılaştırma

| Aşama | AskToExperts'te yapılan | Feza-Co'da yapılacak |
|-------|------------------------|----------------------|
| **Empathize** | "Soru sormak için uzman bulamayan kullanıcıyı tanımak" | Kolektif sitesini ziyaret eden işveren / gözlemcinin davranışını gözlemlemek |
| **Define** | "Kullanıcı: bilgi arayan birey. İhtiyaç: doğrudan uzmana ulaşmak. İçgörü: araştırma çok uzun sürüyor." | "Potansiyel işveren, kolektifin ürün kapasitesini hızla anlamaya ihtiyaç duyar çünkü Hero bilgi yoğunluğu dikkat dağıtıyor." |
| **Ideate** | Filtre/keyword arama, expert profili, chat başlatma | Hero sadeleştirme, popover erişilebilirlik, iletişim formu alternatifleri |
| **Prototype** | "User journey flowchart (Sketch a flowchart)" | Figma wireframe → clickable prototype (5 öncelikli senaryo) |
| **Test** | (devamı) | Moderated think-aloud + SUS + klavye erişilebilirlik testi |

---

## Toplam Tahmini Süre

| Aşama | Süre |
|-------|------|
| Empathize | 1–2 hafta |
| Define | 3–5 gün |
| Ideate | 2–3 gün |
| Prototype | 1–2 hafta |
| Test (per tur) | 1 hafta |
| **Toplam (1 iterasyon)** | **~5–7 hafta** |

---

## Sıradaki Adım (Şu An İçin)

Prototip canlı ve test aşamasına girdiğimiz için önerilen aksiyon sırası:

1. **Hemen:** H3b (Catastrophic) — `TeamPopover` klavye focus trap düzelt → kodu güncelle → klavye testi yap
2. **Bu hafta:** H6b — `MemberCard` CTA'yı hover-only'den kalıcı görünüre geçir
3. **Kısa vadeli:** H4a + H10a + H1a → Ideate → Prototype → Test turu
4. **Paralel:** Empathize aktiviteleri başlat (Hotjar kurulumu + ilk 3 görüşme taslağı)

---

## Bağlı Kaynaklar

| Kaynak | Tür |
|--------|-----|
| `HEURISTIC_EVAL_FEZACO.md` | Nielsen 10 + Alan Dix + WCAG 2.1 AA bulgu raporu (20 bulgu) |
| `HCI_REVIEW_FEZACO.md` | Alan Dix çatısı + ISO 9241-110 + WCAG 2.1 AA kullanılabilirlik incelemesi |
| `COLOR_AUDIT_FEZACO.md` | WCAG kontrast denetimi |
| `/sevgi-ai:persona` | Kullanıcı persona oluşturma |
| `/sevgi-ai:prototype-plan` | Prototip planlama çerçevesi |
| `/sevgi-ai:usability-eval-plan` | Kullanılabilirlik değerlendirme planı |

---

*Feza—Co · Design Thinking · 2026-05-24*
