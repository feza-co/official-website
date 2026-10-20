// ─── Kişisel projeler ───────────────────────────────────────────────────────
//
// Kolektif dışında, tek tek üyelerin kendi hesaplarında geliştirdiği işler.
// Kolektif projeler lib/data.ts içinde; bunlar üyelerin profil sayfalarında
// listelenir.
//
// Kural: her açıklama reponun kendi README'sinden yazıldı. Bilgisi olmayan
// repolar (README'siz, açıklamasız) bilerek dışarıda bırakıldı — uydurma
// tanıtım yazmaktansa listelememek doğru.

export interface PersonalProject {
  id: string;
  owner: string; // member slug
  title: string;
  description: string;
  tags: string[];
  year: number;
  github: string;
  demo?: string;
  /** Ölçülmüş, doğrulanabilir sonuç. Varsa öne çıkarılır. */
  result?: string;
}

export const personalProjects: PersonalProject[] = [
  // ── Ahmet Karakoyun ──────────────────────────────────────────────────────
  {
    id: "keyloop",
    owner: "ahmet-karakoyun",
    title: "Keyloop",
    description:
      "6×6 ızgarada renkli anahtarları eşleştikleri kilitlere kaydıran mobil bulmaca oyunu. Anahtar; tahta kenarına, duvara, başka bir anahtara veya farklı renkteki kapalı bir kilide çarpana kadar kayar. Tek elle oynanır, hata cezası yok.",
    tags: ["React Native", "Expo", "TypeScript", "Jest"],
    year: 2026,
    github: "https://github.com/ahmetkrkyn0/anahtar",
  },
  {
    id: "btk-datathon",
    owner: "ahmet-karakoyun",
    title: "BTK Datathon 2026",
    description:
      "46 sayısal ve kategorik özellikten öğrenci kariyer başarı puanı (0–100) tahmin eden regresyon çözümü. 14 ayrı model, iç içe ağırlıklı blend ve koşullu gate düzeltmesiyle kuruldu. Tüm kararlar public leaderboard'a değil kendi çapraz-doğrulama skorlarına bakılarak verildi.",
    tags: ["Python", "Jupyter", "Regresyon", "Ensemble", "Cross-validation"],
    year: 2026,
    github: "https://github.com/ahmetkrkyn0/datathon",
    result: "20. sıra · Private MSE 82.369",
  },
  {
    id: "reviewsense-ai",
    owner: "ahmet-karakoyun",
    title: "ReviewSense AI",
    description:
      "E-ticaret ürün yorumlarını Gemini ile analiz edip pazarlama ekipleri için yapılandırılmış içgörü üreten uygulama: duygu dağılımı, pozitif ve negatif temalar, müşteri acı noktaları ve uygulanabilir öneriler. Her cevap etik risk uyarısıyla birlikte dönüyor.",
    tags: ["FastAPI", "Gemini API", "Python", "Pydantic"],
    year: 2026,
    github: "https://github.com/ahmetkrkyn0/Innovation-Campus-Hackathon",
  },
  {
    id: "stajyer-takip",
    owner: "ahmet-karakoyun",
    title: "Stajyer Takip Uygulaması",
    description:
      "Başvurudan değerlendirmeye kadar staj sürecinin uçtan uca yönetildiği kurumsal platform. .NET 8 ve EF Core üzerinde kurulu API'yi React 19 arayüzü tüketiyor; PostgreSQL, Docker Compose ve Kubernetes ile dağıtılıyor.",
    tags: [".NET 8", "EF Core", "React 19", "PostgreSQL", "Docker", "Kubernetes"],
    year: 2026,
    github: "https://github.com/ahmetkrkyn0/Stajyer-Takip-Uygulamas-",
  },

  // ── Tuna Deniz ───────────────────────────────────────────────────────────
  {
    id: "neurobench-snn",
    owner: "tuna-deniz",
    title: "Hardware-Plausible SNN · NeuroBench",
    description:
      "NeuroBench v1.0 anahtar kelime few-shot class-incremental learning görevi için spiking sinir ağı. Artımlı oturumlar yalnızca yerel, tam sayı, düşük bitli üç faktörlü öğrenme kuralı kullanıyor — kural, ileride küçük bir dijital nöromorfik RTL bloğu olarak üretilebilecek şekilde tasarlandı.",
    tags: ["PyTorch", "Spiking Neural Networks", "Neuromorphic", "Continual Learning"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/NeuroBench",
    result: "%86,93 oturum ortalaması — yayınlanmış SNN sonucu %75,27",
  },
  {
    id: "mevzuat-tool",
    owner: "tuna-deniz",
    title: "MevzuatTool",
    description:
      "916 Türk kanunu üzerinde çalışan yapısal RAG arama motoru. Mevzuatı madde düzeyinde parçalıyor, zengin meta veri çıkarıyor ve doğal dildeki bir soruya yürürlükteki ilgili maddeleri sıralı olarak döndürüyor. BGE-M3 yoğun + seyrek vektörler ile BM25 füzyonu kullanıyor.",
    tags: ["Python", "RAG", "BGE-M3", "BM25", "Qdrant", "Legal NLP"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/MevzuatTool",
    result: "nDCG@10 = 0,596",
  },
  {
    id: "fraud-aml-platform",
    owner: "tuna-deniz",
    title: "Fraud & AML Platform",
    description:
      "Gerçek zamanlı bankacılık dolandırıcılık ve kara para aklama tespiti. İşlemleri kurallar, LightGBM, anomali tespiti, varlık grafiği ve APP motorunun melezi ile puanlıyor; ALLOW / STEP_UP / HOLD / BLOCK şeklinde kademeli aksiyon uyguluyor. Analist vaka yönetimi ve MASAK şüpheli işlem bildirimi taslağı yazan LLM copilot içeriyor.",
    tags: ["Python", "FastAPI", "LightGBM", "SHAP", "Redis Streams", "MLOps"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/fraud-aml-platform",
  },
  {
    id: "credit-origination",
    owner: "tuna-deniz",
    title: "Explainable Credit Origination",
    description:
      "Bireysel kredi başvurusunu başvurudan kullandırıma kadar taşıyan ve her adımı açıklayan platform: KYC, belge işleme, veri zenginleştirme, karar motoru, fiyatlama, yetki matrisi, teklif ve sözleşme. Bağlayıcı karar her zaman deterministik ve yeniden oynatılabilir motordan çıkıyor; LLM yalnızca açıklıyor ve özetliyor.",
    tags: ["Python", "LightGBM", "SHAP", "LangGraph", "FastAPI", "Explainable AI"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/credit-origination",
  },
  {
    id: "booking-platform",
    owner: "tuna-deniz",
    title: "Booking Platform",
    description:
      "Çift rezervasyon ve çift tahsilatı testlerle kanıtlanabilir şekilde imkânsız kılan konaklama rezervasyon platformu. Her kuruş çift girişli muhasebe defterinde dengeleniyor; yapay zekâ ajanları, kullanıcının imzaladığı sınırlı yetkiyle insanlarla aynı güvenli akıştan rezervasyon yapabiliyor.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "BullMQ", "pgvector"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/booking-platform",
  },
  {
    id: "robo-advisor-tr",
    owner: "tuna-deniz",
    title: "Otonom Finansal Danışman",
    description:
      "Türkiye piyasası için robo-danışman prototipi: yerindelik profillemesi, TL varlıklarla çoklu varlık optimizasyonu (HRP, Black-Litterman, min-CVaR, risk paritesi), enflasyon ve kur farkında hedef planlama, öneri → insan onayı → simüle yürütme akışı. Piyasa verisi gerçek (Yahoo Finance, TEFAS, TCMB), çevrimdışı anlık görüntü olarak geliyor.",
    tags: ["Python", "Black-Litterman", "CVaR", "FastAPI", "LangGraph", "Backtesting"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/robo-advisor-tr",
  },
  {
    id: "synchagent",
    owner: "tuna-deniz",
    title: "SynchAgent",
    description:
      "TEKNOFEST 2026 Akıllı Yol Güvenliği yarışması için geliştirilen çıkarım hattı. Video akışından araç kimliği (tip, plaka, renk), sürücü davranışları (telefon, sigara, esneme, slalom), araç içi nesneler ve yolcu konumlarını tespit ediyor. Değerlendirme sunucusunda internet kapalı olduğu için tamamen çevrimdışı ve süre-güvenli çalışacak şekilde tasarlandı.",
    tags: ["Python", "YOLOv8", "ByteTrack", "MediaPipe", "OCR", "Docker"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/synchagent-teknofest-2026",
  },
  {
    id: "neurofarm",
    owner: "tuna-deniz",
    title: "NeuroFarm",
    description:
      "Nöromorfik uç donanımda tek bir spiking sinir ağıyla çalışan kapalı çevrim bitki kontrolü — tarım için çevrimdışı yapay zekâ. Yatırımcıya yönelik site tamamen statik olarak kuruldu: UI çerçevesi yok, CSS çerçevesi yok, birkaç kilobayt TypeScript.",
    tags: ["Astro", "TypeScript", "Neuromorphic", "AgriTech"],
    year: 2026,
    github: "https://github.com/tunadeniz1304/neurofarmonline",
    demo: "https://neurofarm.nl",
  },

  // ── Nedim Göktuğ Tabak ───────────────────────────────────────────────────
  {
    id: "smartflow-ai",
    owner: "nedim-goktug-tabak",
    title: "SmartFlow AI",
    description:
      "KOBİ'ler ve üretici kooperatifleri için yapay zekâ destekli operasyon asistanı. Müşteri mesajlarını anlıyor, sipariş / ürün / sevkiyat / stok verisini araç çağrılarıyla sorguluyor, veriye dayalı cevaplar üretiyor; gecikmeleri, kritik stoğu ve tedarikçi e-posta taslaklarını yönetim paneline taşıyor.",
    tags: ["FastAPI", "Gemini API", "JavaScript", "Function Calling"],
    year: 2026,
    github: "https://github.com/goktugtabak/SmartFlow_AI",
  },

  // ── İzzettin Berke Kuş ───────────────────────────────────────────────────
  {
    id: "spr2026-birads",
    owner: "izzettin-berke-kus",
    title: "SPR 2026 BI-RADS Sınıflandırma",
    description:
      "Mamografi rapor metninden BI-RADS kategorisini (0–6) tahmin eden uçtan uca Kaggle çözümü. TF-IDF + lojistik regresyon ve LightGBM temel hattının üzerine beş katlı BERTimbau-large eğitimi kuruldu; macro-F1 optimize edildi. Yinelenen kayıt ve etiket gürültüsü analizi içeriyor.",
    tags: ["Python", "BERTimbau", "LightGBM", "TF-IDF", "NLP"],
    year: 2026,
    github: "https://github.com/berkekus/spr2026-mammography-report-classification",
  },

  // ── Oğuzhan Tarhan ───────────────────────────────────────────────────────
  {
    id: "baykus",
    owner: "oguzhan-tarhan",
    title: "Baykuş",
    description:
      "Drone görüntülerinde RGB ve termal kamerayı birleştirerek gece-gündüz araç tespiti yapan uç sistem. Tek YOLO modeli RGB + IR'yi dört kanal olarak alıyor ve eğitim sırasında rastgele bir kamerası kapatılarak öğreniyor; böylece sahada bir kamera tamamen bozulsa da çalışmaya devam ediyor.",
    tags: ["Python", "YOLO", "ONNX", "C++", "Edge AI", "Docker"],
    year: 2026,
    github: "https://github.com/OgzhnTarhn/baykus",
    result: "mAP50 81,4 · laptop CPU'da 21 FPS (p50 46 ms)",
  },
  {
    id: "smart-error-tracker",
    owner: "oguzhan-tarhan",
    title: "Smart Error Tracker",
    description:
      "Sentry'den esinlenen hata izleme platformu. NestJS tabanlı toplama API'si, React panel ve hafif Node.js / tarayıcı SDK'ları içeriyor. Hataları parmak izine göre gruplayıp tek bir inceleme birimine indiriyor, çözülmüş bir hata tekrar görülürse otomatik yeniden açıyor, küçültülmüş frontend yığın izlerini source map ile çözüyor.",
    tags: ["TypeScript", "NestJS", "React", "SDK", "Source Maps"],
    year: 2026,
    github: "https://github.com/OgzhnTarhn/smart-error-tracker",
  },
  {
    id: "gorev-proje-yonetimi",
    owner: "oguzhan-tarhan",
    title: "Görev ve Proje Yönetimi Sistemi",
    description:
      "Kurumların proje, görev ve ekiplerini tek panelden yönettiği platform. ASP.NET Core Web API arka yüzü ile MVC ön yüzü HttpClient üzerinden haberleşiyor; dosya ekleme, kullanıcı profili yönetimi ve etiketleme içeriyor.",
    tags: ["C#", "ASP.NET Core", "Web API", "MVC", "Bootstrap"],
    year: 2026,
    github: "https://github.com/OgzhnTarhn/ApiProjectNew",
  },
  {
    id: "api-yummy",
    owner: "oguzhan-tarhan",
    title: "ApiYummy",
    description:
      "Restoran içerik yönetimi, kategori ve ürün işlemleri, mesaj akışı ve rezervasyon verisi üzerine kurulu ASP.NET Core çözümü. Domain, Application ve Persistence katmanlarıyla Onion Architecture yapısına taşındı; yönetim tarafında SignalR ile gerçek zamanlı güncelleme desteği var.",
    tags: ["C#", "ASP.NET Core", "Onion Architecture", "SignalR", "EF Core"],
    year: 2026,
    github: "https://github.com/OgzhnTarhn/ApiYummy",
  },
  {
    id: "staj-project",
    owner: "oguzhan-tarhan",
    title: "SAP Entegre Web Uygulaması",
    description:
      "Kurumsal veri yönetimini web arayüzüyle birleştiren ASP.NET uygulaması. SAP DotNet Connector 3 entegrasyonu sayesinde doğrudan SAP sistemleriyle haberleşiyor, veri alışverişi yapıyor ve veritabanı işlemlerini yürütüyor.",
    tags: ["C#", "ASP.NET", "SAP .NET Connector", "JavaScript"],
    year: 2026,
    github: "https://github.com/OgzhnTarhn/StajProject",
  },
  {
    id: "servis-aracim",
    owner: "oguzhan-tarhan",
    title: "Servis Aracım",
    description:
      "Kurumsal ve bireysel ulaşım hizmetlerini bir araya getiren web platformu. Servis kiralama, otobüs kiralama ve personel taşımacılığı hizmetlerini kapsıyor; farklı kapasite ve yolcu profillerine göre hizmet türleri inceleniyor ve rezervasyon altyapısı sunuluyor.",
    tags: ["HTML", "JavaScript", "Web Platform"],
    year: 2026,
    github: "https://github.com/OgzhnTarhn/Servisaracim",
  },
  {
    id: "docvault",
    owner: "oguzhan-tarhan",
    title: "DocVault",
    description:
      "JWT ile korunan dosya yöneticisi. Kullanıcılar kayıt olup giriş yaptıktan sonra PDF, PNG ve JPG belgelerini yükleyebiliyor, listeleyebiliyor, indirebiliyor ve silebiliyor. Helmet, hız sınırı, bcrypt parola özeti ve bir saatlik token ömrü ile güvenlik katmanı kurulu.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
    year: 2025,
    github: "https://github.com/OgzhnTarhn/DocVault",
  },
  {
    id: "beeplan",
    owner: "oguzhan-tarhan",
    title: "BeePlan",
    description:
      "Üniversite bölümleri için çakışmasız ders programı üreten Java komut satırı uygulaması. Öğretim üyesi müsaitliğini ve derslik kısıtlarını işleyerek öğrenci, öğretim üyesi ve derslik bazında çakışma olmayan zaman çizelgeleri çıkarıyor.",
    tags: ["Java", "Maven", "Scheduling", "CLI"],
    year: 2025,
    github: "https://github.com/OgzhnTarhn/BeePlan",
  },
];

export function getPersonalProjects(memberSlug: string): PersonalProject[] {
  return personalProjects.filter((p) => p.owner === memberSlug);
}
