# Heuristic Evaluation — Feza-Co Resmi Web Sitesi

**Tarih:** 2026-05-24  
**Değerlendirici:** Claude (sevgi-ai:heuristic-eval)  
**Kapsam:** Tüm site akışı — Ana Sayfa, Proje Detay, Üye Profil, 404 sayfaları  
**Yöntem:** Nielsen 10 Heuristic + Alan Dix 13 Prensip + WCAG 2.1 AA  
**Severity skalası:** Nielsen 0-4  

---

## Severity Dağılımı

```
Catastrophic (4): 1
Major (3):        7
Minor (2):        7
Cosmetic (0-1):   5
─────────────────
Toplam:          20 bulgu
```

---

## Bulgu Tablosu

| # | Heuristic | Bulgu | Konum (dosya/ekran) | Severity | Önerilen Düzeltme | Kanıt |
|---|-----------|-------|---------------------|----------|-------------------|-------|
| H1a | H1: Visibility of System Status | Marquee (ticker) bandı duraksız, sonsuz döngüde; kullanıcı içeriği okumaya çalıştığında sistem durumu hakkında hiçbir şey gösterilmiyor. Hover ile durdurma mekanizması yok. | `components/Marquee.tsx` | 3 | `animation-play-state: paused` kuralını `:hover` ve `prefers-reduced-motion: no-preference` koşuluna bağla; pause butonu ekle | Nielsen H1, Alan Dix — Stability |
| H1b | H1: Visibility of System Status | Mobil menü açık/kapalı geçiş animasyonu `max-height` + `opacity` ile yapılmış; CSS geçiş süresi `duration-300` ama `aria-expanded` zaten doğru güncelleniyor. **İyi uygulama** — ihlal yok. | `components/Navbar.tsx:194-197` | 0 | Kapsamlı tarama yapıldı, bu boyutta ciddi ihlal yok | Nielsen H1 |
| H2a | H2: Match Between System and Real World | `"// Ekip"`, `"// Projeler"`, `"// İletişim"` etiketleri programlama yorumu sözdizimi (`//`) ile başlıyor. Hedef kitle genel kullanıcılar da olabileceğinden bu notasyon tanıdık olmayabilir. | `app/page.tsx:361`, `components/Footer.tsx:69-76` | 2 | Dekoratif `//` öğelerini görsel amaca indirge; navigasyon etiketlerinde saf Türkçe kullan (`Ekip`, `Projeler`). | Nielsen H2, Alan Dix — Familiarity |
| H2b | H2: Match Between System and Real World | "Aktif Kolektif" statüs rozeti tüm sayfada kopyalanmış: hem Navbar'da hem Hero'da görünüyor. Kullanıcı hangi statüsün "gerçek" olduğunu ayırt edemez. | `app/page.tsx:105-118`, `components/Navbar.tsx:129-143` | 2 | Bir lokasyona sabitle (yalnızca Navbar). Hero'daki rozeti kaldır veya farklılaştır. | Nielsen H2 |
| H3a | H3: User Control and Freedom | Mobil menüde bir linke tıklayınca menü kapanıyor (`onClick={() => setIsMenuOpen(false)}`), bu doğru. Ancak klavye ile gezinirken menü içindeki son öğeden `Tab`'a basılması menüyü kapatmıyor ve focus yönetimi yok; klavye kullanıcısı tuzağa düşebilir (focus trap eksikliği). | `components/Navbar.tsx:193-227` | 3 | Menü açıkken `Escape` tuşuyla kapatmayı destekle; son öğede `Tab` kaçması için focus trap veya `onBlur` mantığını düzelt. | Nielsen H3, WCAG 2.1 — 2.1.2 No Keyboard Trap (AA) |
| H3b | H3: User Control and Freedom | `TeamPopover` bileşeninde `onBlur` → `setOpen(false)` var; ancak popover içindeki link'e `Tab`'la geçildiğinde container'ın blur'u tetiklenip popover kapanabiliyor. Keyboard ile ortak ismine ulaşılamıyor. | `components/TeamPopover.tsx:35-37` | 4 | Blur kontrolünü `relatedTarget` ile yönet: eğer focus popover içinde kalıyorsa kapatma. `onBlur={(e) => { if (!containerRef.current?.contains(e.relatedTarget)) setOpen(false); }}` | Nielsen H3, WCAG 2.1 — 2.1.1 Keyboard (A) |
| H4a | H4: Consistency and Standards | Bazı linkler `focus:outline-none` + `focus-visible:ring-2` kombinasyonu kullanırken, bazıları yalnızca `focus:outline-none` içeriyor (örn. `Footer.tsx` iletişim linkleri). Bu tutarsızlık klavye odağının görünür olmamasına yol açar. | `components/Footer.tsx:94-97`, `components/Footer.tsx:101-105` | 3 | Footer'daki tüm linklere `focus-visible:ring-2 focus-visible:ring-indigo-500/30` ekle; focus stilini sistematik hale getir. | Nielsen H4, WCAG 2.1 — 2.4.7 Focus Visible (AA) |
| H4b | H4: Consistency and Standards | Proje kartında "Detayları Gör" linki inline `<Link>` olarak kurgulanmış; ancak `<article>` üzerinde tam kart tıklaması yok. Üye kartında ise tam kart overlay linki var (`MemberCard.tsx:22-29`). İki benzer kart bileşeni farklı etkileşim desenleri kullanıyor. | `components/ProjectCard.tsx:221-240`, `components/MemberCard.tsx:22-29` | 2 | `ProjectCard`'a da tam kart overlay linki ekle veya her iki kartın etkileşim modelini aynı tasarıma getir. | Nielsen H4, Alan Dix — Consistency |
| H5a | H5: Error Prevention | 404 sayfasında iki CTA butonu var: "Ana Sayfaya Dön" ve "Projeleri Gör". Projelere dönüş linki `/#projects` anchor'u kullanıyor; bu, 404'ten gelinen sayfaya bağlı olarak anchor'un çalışmamasına neden olabilir. | `app/not-found.tsx:91-101` | 2 | Anchor yerine `/` → scroll-to-projects mantığı veya Router.push + scrollIntoView kombinasyonu kullan; ya da linki `/#projects` yerine standart `/` olarak bırak. | Nielsen H5 |
| H5b | H5: Error Prevention | `ThemeToggle` bileşeninde `mounted` false iken `MoonIcon` gösteriliyor, bu SSR/CSR farkından kaynaklanıyor ve kasıtlı. Ancak kullanıcı sayfa yüklendiğinde sistem teması "light" iken ay ikonu görüyor; bu anlık bir yanlış ipucu veriyor. | `components/Navbar.tsx:51` | 1 | `mounted` false iken `null` döndür veya saydamlık=0 bir placeholder kullan. | Nielsen H5 |
| H6a | H6: Recognition Rather Than Recall | Hero bölümündeki Stats grid'inde (kurucu sayısı, proje sayısı vs.) hangi rakamın neyi temsil ettiği yalnızca etiketle anlaşılıyor. Ekran okuyucu için semantik yapı yetersiz: rakam ve etiketi kapsayan bir `<dl>/<dt>/<dd>` grubu yok. | `app/page.tsx:245-263` | 2 | Stats grid'ini `<dl>` + `<dt>`/`<dd>` ikilisiyle yeniden yaz; `CountUp` bileşenine `aria-label` ver. | Nielsen H6, WCAG 2.1 — 1.3.1 Info and Relationships (A) |
| H6b | H6: Recognition Rather Than Recall | `MemberCard` üzerinde "PROFİLİ GÖR" sadece hover'da görünüyor (`opacity-0 group-hover:opacity-100`). Kart tıklanabilir olduğunu gösteren kalıcı bir ipucu yok; dokunmatik/klavye kullanıcıları bu affordance'ı göremez. | `components/MemberCard.tsx:153-170` | 3 | "Profili Gör" metnini her zaman görünür yap (düşük opacity ile kalıcı), ya da karta sabit bir ok ikonu ekle. Hover'da vurguyu artırabilirsin. | Nielsen H6, Alan Dix — Affordance |
| H7a | H7: Flexibility and Efficiency of Use | Site tek sayfalık scroll yapısı; doğrudan URL ile bölüme atlama destekleniyor (`/#founders`, `/#projects`). Ancak Navbar sticky olmasına rağmen aktif bölüm vurgulanmıyor; ileri kullanıcılar hangi bölümde olduğunu bilemez. | `components/Navbar.tsx` | 2 | `IntersectionObserver` ile aktif bölümü tespit et; ilgili nav linkini `aria-current="true"` + görsel vurgu ile işaretle. | Nielsen H7, Alan Dix — Navigation |
| H7b | H7: Flexibility and Efficiency of Use | Proje kartlarında filtreleme veya sıralama yok. Proje sayısı arttıkça bu bir erişilebilirlik/verimlilik sorunu olacak. | `app/page.tsx:436-440` | 1 | Ölçek büyüdüğünde durum filtresi (Aktif/Tamamlandı) ekle. Şu an için cosmetic. | Nielsen H7 |
| H8a | H8: Aesthetic and Minimalist Design | Hero bölümünde aynı anda: kurgusal koordinat metni, versiyon marker `v1 · est. 2026`, scroll indicator, 2 farklı rozet, 4 istatistik, ve büyük başlık. Bilgi yoğunluğu dikkat dağıtıcı olabiliyor. | `app/page.tsx:86-96`, `app/page.tsx:265-280` | 1 | Sürüm marker (`v1 · est. 2026`) gibi bağlamsal meta öğeleri About/Footer'a taşı; Hero'yu sadeleştir. | Nielsen H8, Alan Dix — Simplicity |
| H8b | H8: Aesthetic and Minimalist Design | `ProjectCard`'da tekrar eden `//` prefix'i → "// Proje", "// Vaka Çalışması", "// Teknoloji Yığını" etiketleri bağlamdan kopuk hissettiriyor; içerik hiyerarşisi bu prefix olmadan da anlaşılır. | `app/projects/[id]/page.tsx:97`, `app/projects/[id]/page.tsx:170` | 1 | Etiketlerin bir kısmında `//` prefix'ini kaldır veya yalnızca teknik bölümler için kullan. | Nielsen H8 |
| H9a | H9: Help Users Recognize, Diagnose, and Recover from Errors | 404 sayfasının dekoratif alanında `// Status: 404 Not Found` yer alıyor; bu hata kodu kullanıcıya hiçbir yardımcı bilgi vermiyor. Sayfanın neden 404 verdiğine dair bir açıklama yok. | `app/not-found.tsx:104-106` | 2 | `// Status:` bloğunu kullanıcı dostu bilgiye dönüştür: "Bu URL mevcut değil. Yazım hatası olabilir." gibi. Hata kodunu gizleyip sadece çözüm yoluna odaklan. | Nielsen H9, Alan Dix — Informative Feedback |
| H9b | H9: Help Users Recognize, Diagnose, and Recover from Errors | Projesi olmayan veya hackathon kaydı olmayan bir üye sayfasında bölümler gizleniyor (conditional render). Ancak kullanıcıya neden bu bölümlerin boş olduğu söylenmiyor. | `app/members/[slug]/page.tsx:195-291` | 1 | Boş durumda "Henüz proje eklenmedi" gibi kısa bir placeholder metin göster. | Nielsen H9 |
| H10a | H10: Help and Documentation | Sitede hiçbir yerde iletişim formu yok; yalnızca mailto linki mevcut. Kullanıcı mesajını gönderdikten sonra herhangi bir onay yoktur (e-posta client'ına yönlendirilir). | `app/page.tsx:541-563` | 3 | E-posta linkini destekleyen kısa bir bilgilendirme metni ekle: "E-postanız feza ekibi tarafından en geç N gün içinde yanıtlanacaktır." ya da basit bir iletişim formu ekle. | Nielsen H10, Alan Dix — Recoverability |
| H10b | H10: Help and Documentation | Marquee bandındaki hackathon/teknoloji öğeleri için herhangi bir bağlam yok. Kullanıcı neden bu öğelerin gösterildiğini veya neye tıklayabileceğini bilemez. | `components/Marquee.tsx`, `app/page.tsx:287-298` | 2 | Bölüm başlığı veya `aria-label` ekle: "Katılınan Hackathonlar & Kullanılan Teknolojiler". Öğelerin tıklanabilir olmadığı durumda bunu belli et (`aria-hidden` veya role kaldır). | Nielsen H10, WCAG 2.1 — 1.3.5 Identify Purpose |

---

## Heuristic Kapsamı Özeti

| Heuristic | Taranan Bulgular |
|-----------|-----------------|
| H1: Visibility of System Status | H1a (Major), H1b (İhlal yok) |
| H2: Match Real World | H2a (Minor), H2b (Minor) |
| H3: User Control & Freedom | H3a (Major), H3b (Catastrophic) |
| H4: Consistency & Standards | H4a (Major), H4b (Minor) |
| H5: Error Prevention | H5a (Minor), H5b (Cosmetic) |
| H6: Recognition Rather Than Recall | H6a (Minor), H6b (Major) |
| H7: Flexibility & Efficiency | H7a (Minor), H7b (Cosmetic) |
| H8: Aesthetic & Minimalist | H8a (Cosmetic), H8b (Cosmetic) |
| H9: Error Recovery | H9a (Minor), H9b (Cosmetic) |
| H10: Help & Documentation | H10a (Major), H10b (Minor) |

---

## Alan Dix Prensibi Eşleştirmesi

| Alan Dix Prensibi | Etkilenen Bulgu(lar) |
|-------------------|----------------------|
| Consistency | H4b — ProjectCard vs MemberCard etkileşim farkı |
| Familiarity | H2a — Programlama `//` notasyonu |
| Affordance | H6b — MemberCard hover-only CTA |
| Navigation | H7a — Aktif bölüm vurgusu yok |
| Stability | H1a — Duraklatılamaz marquee |
| Informative Feedback | H9a — 404 teknik hata kodu |
| Recoverability | H10a — İletişim sonrası onay yok |
| Simplicity | H8a — Hero bilgi yoğunluğu |

---

## WCAG 2.1 AA İhlalleri

| WCAG Kriteri | Bulgu | Seviye |
|-------------|-------|--------|
| 2.1.1 Keyboard (A) | H3b — TeamPopover klavye ile gezilemez | **Catastrophic (4)** |
| 2.1.2 No Keyboard Trap (AA) | H3a — Mobil menüde focus trap eksik | Major (3) |
| 2.4.7 Focus Visible (AA) | H4a — Footer linkleri focus ring yok | Major (3) |
| 1.3.1 Info & Relationships (A) | H6a — Stats grid semantik yapı eksik | Minor (2) |

---

## En Kritik 2 Bulgu (Severity 4)

### 1. H3b — TeamPopover Klavye Erişilebilirliği (Catastrophic)
**Sorun:** `TeamPopover` bileşeninde container'a `onBlur` event'i bağlanmış. Kullanıcı `Tab` tuşuyla popover içindeki bir linke geçmeye çalıştığında, container'ın odağı kaybetmesi tetikleniyor ve popover kapanıyor. Bu durum, klavye kullanıcılarının ortak profillerine ulaşmasını fiilen engelliyor.  
**Konum:** `components/TeamPopover.tsx:35-37`  
**Düzeltme:**
```tsx
onBlur={(e) => {
  if (!containerRef.current?.contains(e.relatedTarget as Node)) {
    setOpen(false);
  }
}}
```

---

## Kullanılan Input

- `app/page.tsx` — Ana sayfa (Hero, Founders, Projects, Contact bölümleri)
- `app/layout.tsx` — Root layout, meta veriler
- `app/not-found.tsx` — 404 sayfası
- `app/projects/[id]/page.tsx` — Proje detay sayfası
- `app/members/[slug]/page.tsx` — Üye profil sayfası
- `components/Navbar.tsx` — Gezinme çubuğu
- `components/Footer.tsx` — Alt bilgi
- `components/ProjectCard.tsx` — Proje kartı
- `components/MemberCard.tsx` — Üye kartı
- `components/TeamPopover.tsx` — Ekip popover
- `components/Marquee.tsx` — Ticker bandı
- `app/globals.css` — Tasarım sistemi değişkenleri ve global stiller
- `tailwind.config.ts` — Tailwind konfigürasyonu

---

## Sonraki Adımlar

- `/sevgi-ai:usability-eval-plan` — Gerçek kullanıcılarla doğrulama planı oluştur
- `/sevgi-ai:color-audit` — Kontrast oranlarını (özellikle `--text-faint: #94a3b8` ve `--cyan` varyantları) derinlemesine doğrula
- **Öncelikli düzeltme:** H3b (Catastrophic) → `TeamPopover.tsx` `onBlur` event fix
