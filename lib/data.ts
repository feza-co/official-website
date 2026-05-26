// ─── Feza-Co Collective · Data Layer ────────────────────────────────────────

export interface Member {
  name: string;
  slug: string;
  role: string;
  initials: string;
  avatarGradient: string; // Tailwind gradient classes for placeholder
  avatar?: string;         // Optional real photo path under /public
  linkedin?: string;
  github?: string;
  bio: string;
  skills: string[];
  projects: string[]; // project IDs
  hackathons?: string[];
  quote?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: "active" | "completed" | "planning";
  members: string[]; // member slugs
  github?: string;
  demo?: string;
  year: number;
  highlight?: string; // bold callout text
  caseStudy?: {
    problem: string;
    approach: string;
    outcome: string;
  };
}

// ─── Members ─────────────────────────────────────────────────────────────────

export const members: Member[] = [
  {
    name: "Ahmet Karakoyun",
    slug: "ahmet-karakoyun",
    role: "Kurucu Ortak",
    initials: "AK",
    avatarGradient: "from-cyan-500 via-blue-600 to-indigo-700",
    avatar: "/avatars/ahmet-karakoyun.png",
    linkedin: "https://www.linkedin.com/in/ahmetkrkyn0/",
    github: "https://github.com/ahmetkrkyn0",
    bio: "Yazılım geliştirme ve yapay zeka sistemleri üzerine odaklanan bir kurucu ortak. Ölçeklenebilir mimari tasarımı ve modern web teknolojileri konusunda derin teknik deneyim sahibi. Feza-Co'nun vizyon ve teknik yönünün şekillenmesinde aktif rol alıyor.",
    skills: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Next.js / React",
      "Python",
      "TypeScript",
      "System Architecture",
    ],
    projects: ["digital-twin-kit", "raw2value", "astro-hackathon", "meydan", "hayat-agi", "healthai-co-creation", "iso-29119-4-gamified"],
    hackathons: ["TUA ASTRO Hackathon 2026", "Kapadokya Hackathon 2026", "METU Hackathon 2026", "European HealthTech Co-Creation & Innovation Platform", "SPR 2026 Mammography Report Classification"],
    quote: "Kod yazmak bir sanat, sistem tasarlamak bir mühendislik disiplinidir.",
  },
  {
    name: "Tuna Deniz",
    slug: "tuna-deniz",
    role: "Kurucu Ortak",
    initials: "TD",
    avatarGradient: "from-violet-500 via-purple-600 to-cyan-500",
    avatar: "/avatars/tuna-deniz.jpeg",
    linkedin: "https://www.linkedin.com/in/tuna-deniz1304/",
    github: "https://github.com/tunadeniz1304",
    bio: "Dijital ikiz sistemleri ve 3D modelleme alanında akademik düzeyde altyapılar geliştiren mühendis. IoT sensör entegrasyonu ve gerçek zamanlı veri akışı konularındaki araştırmaları Feza-Co'nun teknik portföyünün temel taşını oluşturuyor.",
    skills: [
      "Digital Twin Systems",
      "3D Modelling & Simulation",
      "IoT & Sensor Integration",
      "Python",
      "Unity / WebGL",
      "Real-time Data Pipelines",
    ],
    projects: ["digital-twin-kit", "raw2value", "astro-hackathon", "meydan", "iso-testing-world"],
    hackathons: ["TUA ASTRO Hackathon 2026", "Kapadokya Hackathon 2026", "METU Hackathon 2026", "European HealthTech Co-Creation & Innovation Platform", "SPR 2026 Mammography Report Classification"],
    quote:
      "Fiziksel dünyayı sayısallaştırmak, geleceğin mühendisliğinin kapılarını açar.",
  },
  {
    name: "Nedim Göktuğ Tabak",
    slug: "nedim-goktug-tabak",
    role: "Kurucu Ortak",
    initials: "NGT",
    avatarGradient: "from-emerald-500 via-teal-500 to-cyan-600",
    avatar: "/avatars/goktug-tabak.jpg",
    linkedin: "https://www.linkedin.com/in/goktug-tabak/",
    github: "https://github.com/goktugtabak",
    bio: "Sistem mimarisi ve backend geliştirme konularında uzmanlaşmış, ölçeklenebilir ve yüksek-performanslı altyapılar tasarlayan mühendis. DevOps ve konteyner orkestrasyonu alanındaki deneyimiyle kolektifin teknik omurgasını güçlendiriyor.",
    skills: [
      "Backend Development",
      "System Architecture",
      "DevOps & CI/CD",
      "Go",
      "Kubernetes",
      "Database Design",
    ],
    projects: ["astro-hackathon", "uyum-platform", "iso-testing-world"],
    hackathons: ["TUA ASTRO Hackathon 2026", "Kapadokya Hackathon 2026", "METU Hackathon 2026", "European HealthTech Co-Creation & Innovation Platform", "SPR 2026 Mammography Report Classification"],
    quote: "Doğru mimari, ölçeklenebilirliği sorun olmaktan çıkarır.",
  },
  {
    name: "İzzettin Berke Kuş",
    slug: "izzettin-berke-kus",
    role: "Kurucu Ortak",
    initials: "IBK",
    avatarGradient: "from-orange-500 via-rose-500 to-pink-600",
    linkedin: "https://www.linkedin.com/in/berke-ku%C5%9F-464837272/",
    github: "https://github.com/berkekus",
    bio: "Mobil uygulama geliştirme ve kullanıcı deneyimi tasarımı alanlarında çalışan yaratıcı teknoloji kurucusu. Kullanıcı odaklı tasarım felsefesini teknik mükemmellikle birleştirerek dijital deneyimler üretiyor.",
    skills: [
      "Mobile Development",
      "React Native",
      "UX / UI Design",
      "Swift",
      "Flutter",
      "Product Thinking",
    ],
    projects: ["astro-hackathon", "hayat-agi", "healthai-co-creation", "iso-29119-4-gamified"],
    hackathons: ["TUA ASTRO Hackathon 2026", "Kapadokya Hackathon 2026", "METU Hackathon 2026", "European HealthTech Co-Creation & Innovation Platform", "SPR 2026 Mammography Report Classification"],
    quote: "En iyi arayüz, kullanıcının varlığını bile hissetmediği arayüzdür.",
  },
  {
    name: "Oğuzhan Tarhan",
    slug: "oguzhan-tarhan",
    role: "Kurucu Ortak",
    initials: "OT",
    avatarGradient: "from-sky-500 via-blue-500 to-indigo-600",
    linkedin: "https://www.linkedin.com/in/o%C4%9Fuzhan-tarhan-6a8299357/",
    github: "https://github.com/OgzhnTarhn",
    bio: "Veri bilimi ve makine öğrenmesi alanlarında araştırma odaklı çalışmalar yapan analitik düşünürlü geliştirici. İstatistiksel modelleme ve derin öğrenme konularındaki birikimi, kolektifin veri stratejisinin temelini oluşturuyor.",
    skills: [
      "Data Science",
      "Machine Learning",
      "Python",
      "TensorFlow / PyTorch",
      "Statistical Modelling",
      "Data Visualization",
    ],
    projects: ["raw2value", "astro-hackathon", "meydan", "iso-testing-world"],
    hackathons: ["TUA ASTRO Hackathon 2026", "Kapadokya Hackathon 2026", "METU Hackathon 2026", "European HealthTech Co-Creation & Innovation Platform", "SPR 2026 Mammography Report Classification"],
    quote: "Veri, doğru sorular sorulduğunda konuşmaya başlar.",
  },
];

const allMemberSlugs = members.map((member) => member.slug);

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "raw2value",
    title: "Raw2Value AI",
    description:
      "Kapadokya bölgesi (TR71) yerel üreticileri için hammadde satışı ve işleme süreçlerini optimize eden makine öğrenmesi tabanlı karar destek motoru.",
    longDescription:
      "Türkiye dünya ponza üretiminin %45,6'sını gerçekleştirmesine karşın hammaddeyi ~91,7 $/ton'dan ihraç etmektedir; oysa işlenmiş formlar 200–300 $/ton değer taşımaktadır. Raw2Value AI bu değer boşluğunu kapatmak için işleme rota önerileri, TL bazında kâr tahmini, CO₂ ayak izi hesaplama ve ağırlıklı puanlama algoritmasıyla B2B alıcı-satıcı eşleştirmesi sunar. Gerçek zamanlı TCMB döviz verisi ve OpenRouteService lojistik entegrasyonu içerir.",
    highlight:
      "Kapadokya Hackathon 2026 — ML tabanlı hammadde değer optimizasyon platformu",
    tags: [
      "Machine Learning",
      "Python",
      "FastAPI",
      "Next.js",
      "XGBoost",
      "CatBoost",
      "PostgreSQL",
      "Docker",
    ],
    status: "completed",
    members: allMemberSlugs,
    github: "https://github.com/feza-co/Raw2Value",
    year: 2026,
    caseStudy: {
      problem: "Hammadde ihracatında düşük katma değer ve zor karşılaştırılan satış rotaları.",
      approach: "ML tahminleri, lojistik verisi ve ağırlıklı karar skorunu tek akışta birleştirme.",
      outcome: "Üretici için daha karlı işleme rotası ve B2B eşleşme önerileri.",
    },
  },
  {
    id: "digital-twin-kit",
    title: "Digital Twin Kit",
    description:
      "Fiziksel sistemlerin dijital kopyalarını oluşturmak için açık kaynak bir framework.",
    longDescription:
      "Digital Twin Kit, akademik düzeyde, ölçeklenebilir ve 3D modelleme/sensör entegrasyonlu bir dijital ikiz altyapısı sunar. Gerçek zamanlı sensör verisi entegrasyonu, WebGL tabanlı 3D görselleştirme ve ölçeklenebilir veri işleme pipeline'ları içerir. Endüstriyel IoT sistemleri, akıllı bina yönetimi ve akademik araştırma senaryolarına uyarlanabilir modüler yapısıyla öne çıkıyor.",
    highlight:
      "Akademik düzeyde, ölçeklenebilir, 3D modelleme & sensör entegrasyonlu altyapı",
    tags: [
      "Digital Twin",
      "3D Modelling",
      "IoT",
      "Sensor Integration",
      "Python",
      "WebGL",
      "Real-time",
    ],
    status: "active",
    members: allMemberSlugs,
    year: 2024,
    caseStudy: {
      problem: "Fiziksel sistem verilerinin 3D bağlamda izlenmesi ve yorumlanması zor.",
      approach: "Sensör verisini WebGL tabanlı dijital ikiz yüzeyiyle eşleştiren modüler altyapı.",
      outcome: "Akademik ve endüstriyel prototipler için tekrar kullanılabilir başlangıç kiti.",
    },
  },
  {
    id: "astro-hackathon",
    title: "LunaPath",
    description:
      "Ay yüzeyi üzerinde çok kriterli güzergah planlama sistemi. DEM analizinden elde edilen eğim, enerji tüketimi, gölge ve termal risk katmanlarıyla optimal rover rotaları üretir.",
    longDescription:
      "TUA ASTRO Hackathon 2026 için geliştirilen LunaPath, ay yüzeyindeki rover'lar için çok kriterli güzergah optimizasyonu sunar. DEM verilerinden eğim, enerji, gölge proxy ve termal risk grid katmanları üretilir; A* pathfinding algoritmasıyla misyon ağırlıklarına göre en verimli rota hesaplanır. Farklı rover profilleri, REST API ve interaktif web arayüzüyle kapsamlı bir uzay keşif simülasyonu sunar.",
    highlight:
      "TUA ASTRO Hackathon 2026 — Ay yüzeyinde A* tabanlı çok kriterli rover güzergah optimizasyonu",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "GDAL",
      "Rasterio",
      "A* Pathfinding",
      "Vite",
    ],
    status: "completed",
    members: allMemberSlugs,
    github: "https://github.com/ahmetkrkyn0/ASTROHackathon",
    year: 2026,
    caseStudy: {
      problem: "Ay yüzeyinde güvenli rota; eğim, enerji, gölge ve termal riskle birlikte çözülmeli.",
      approach: "DEM katmanlarını A* maliyet fonksiyonunda görev ağırlıklarıyla birleştirme.",
      outcome: "Farklı rover profilleri için karşılaştırılabilir rota simülasyonu.",
    },
  },
  {
    id: "meydan",
    title: "Meydan",
    description:
      "Türkiye'deki futbol dışı sporcuları taraftarlar, gönüllüler ve markalarla buluşturan AI destekli dijital spor platformu.",
    longDescription:
      "Meydan, futbol dışındaki sporcuların ekipman, sponsorluk, görünürlük ve topluluk desteği ihtiyaçlarını tek bir dijital çatı altında çözer. Sporcular hikayelerini paylaşır, taraftarlar destek sağlar, markalar anlamlı ortaklıklar bulur. Gemini API destekli akıllı eşleştirme, OpenRouteService ile konum bazlı etkinlik keşfi ve rol tabanlı panolar ile kapsamlı bir spor ekosistemi kurar.",
    highlight:
      "Sporun sessiz kahramanlarını görünür kılan AI destekli spor eşleştirme ekosistemi",
    tags: [
      "React 19",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
      "Gemini API",
    ],
    status: "active",
    members: allMemberSlugs,
    github: "https://github.com/ahmetkrkyn0/Meydan",
    year: 2026,
    caseStudy: {
      problem: "Futbol dışı sporcular görünürlük, destek ve marka erişimi bulmakta zorlanıyor.",
      approach: "AI destekli eşleştirme, rol bazlı panolar ve konum odaklı etkinlik keşfi.",
      outcome: "Sporcu, taraftar, gönüllü ve marka arasında ortak bir destek ağı.",
    },
  },
  {
    id: "uyum-platform",
    title: "UYUM",
    description:
      "Engelli bireylerin uyarlanabilir sporlara erişimini kolaylaştıran; altı boyutlu erişilebilirlik radar sistemi, akıllı harita ve AI destekli ilk ziyaret rehberi sunan platform.",
    longDescription:
      "ODTÜ Spor Teknolojileri Hackathonu 2026 için geliştirilen UYUM, engelli bireylerin Ankara'daki spor tesislerine erişimini kolaylaştırır. Renk körü modları, yüksek kontrast ve klavye navigasyonu ile tam erişilebilirlik sağlar. n8n + OpenAI GPT-4o-mini entegrasyonuyla Türkçe sesli AI rehberi, OpenStreetMap tabanlı çift kodlu akıllı harita ve topluluk deneyim paylaşımı içerir.",
    highlight:
      "ODTÜ Spor Tech Hackathon 2026 — Altı boyutlu radar & AI destekli engelli spor erişilebilirlik platformu",
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "OpenAI",
      "n8n",
      "Framer Motion",
      "Vite",
    ],
    status: "completed",
    members: allMemberSlugs,
    github: "https://github.com/goktugtabak/uyum-platform",
    year: 2026,
    caseStudy: {
      problem: "Engelli bireyler spor tesislerinin gerçek erişilebilirliğini önceden göremiyor.",
      approach: "Radar skoru, erişilebilir harita ve Türkçe AI ilk ziyaret rehberini birleştirme.",
      outcome: "Daha güvenli tesis seçimi ve ilk ziyaret öncesi net hazırlık akışı.",
    },
  },
  {
    id: "iso-testing-world",
    title: "ISO Testing World",
    description:
      "ISO/IEC/IEEE 29119-1:2022 yazılım test kavramlarını öğreten, tarayıcı tabanlı eğitsel simülasyon. Oyuncu kıdemli test mühendisi rolünde beş bölgede üretim olayı #047'yi çözer; her bölge farklı bir ISO kavram kümesini hedefler.",
    longDescription:
      "ISO Testing World, IT & ISQS Learner-as-Designer dersi için geliştirilen tarayıcı tabanlı bir eğitim oyunudur. Beş bölgenin her biri (Hata/Kusur/Arıza, Doğrulama & Geçerleme, Test Seviyesi × Tipi, Test Tabanı/Öğesi, Test Oracle) ISO/IEC/IEEE 29119-1:2022 kavram kümelerini hedefler; günlük tanımlar bilerek yanlış cevap üretecek şekilde tasarlanmıştır. NPC tabanlı ofis-içi simülasyon katmanı, pixel-art karakterler, retro masaüstü mini araçları (VSCode, BugSweeper, Pipeline Ops, Snake) ve her yanlış cevapta atlanamayan ISO madde tanımı modalı içerir. Three.js ile prosedürel 3B Dünya Haritası ve Node.js/Express + PostgreSQL ile oturum/ilerleme kalıcılığı sunar.",
    highlight:
      "IT & ISQS Learner-as-Designer — ISO/IEC/IEEE 29119-1:2022 öğreten interaktif test eğitim oyunu",
    tags: [
      "React 19",
      "Vite",
      "Three.js",
      "Framer Motion",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    status: "completed",
    members: ["tuna-deniz", "nedim-goktug-tabak", "oguzhan-tarhan"],
    github: "https://github.com/tunadeniz1304/ISO-Testing-World",
    demo: "https://opus-isotestingworld.vercel.app/",
    year: 2026,
    caseStudy: {
      problem: "ISO test kavramları informal tanımlarla karıştırılıyor; öğrenci doğru terminolojiyi içselleştiremiyor.",
      approach: "Her yanlış cevabı atlanamayan verbatim ISO madde tanımıyla eşleştiren beş bölgeli oyunlaştırma.",
      outcome: "Standart-kesin terminolojiyi pekiştiren, ofis simülasyonuyla bağlamlandırılmış öğrenme akışı.",
    },
  },
  {
    id: "hayat-agi",
    title: "Hayat Ağı Command Center",
    description:
      "Afet senaryolarında mesh ağ altyapısını yönetmek için geliştirilmiş gerçek zamanlı komuta merkezi. Ağ topolojisi haritalaması, cihaz durum izleme ve kurtarma öncelik skoru hesaplama içerir.",
    longDescription:
      "Hayat Ağı Command Center, geleneksel iletişim altyapısının çöktüğü afet senaryolarında mesh ağ üzerinden koordinasyonu sağlayan web tabanlı bir yönetim platformudur. Yönetici arayüzü; gateway cihazlarını listeler, filtreler ve CRUD işlemleri yapar, Leaflet haritasında aktif cihaz konumlarını ve ağ topolojisini canlı görselleştirir, batarya seviyesi ve sinyal gücünü gerçek zamanlı izler. Vatandaş arayüzü ise hane profili (çocuk sayısı, yaşlı ve kronik hasta varlığı) üzerinden kurtarma triaj öncelik skoru üretir. Rol tabanlı erişim kontrolü ile yönetici ve vatandaş deneyimleri birbirinden ayrıştırılmıştır.",
    highlight:
      "Afet iletişim ağı — Mesh topoloji haritası & triaj öncelik skoru hesaplayan komuta merkezi",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Leaflet",
      "Material-UI",
    ],
    status: "completed",
    members: ["ahmet-karakoyun", "izzettin-berke-kus"],
    github: "https://github.com/alinkisakurek/hayat-agi-command-center",
    year: 2026,
    caseStudy: {
      problem: "Afet anında geleneksel iletişim çöker; kurtarma ekipleri hanehalkı önceliğini göremez.",
      approach: "Mesh gateway yönetimi, canlı harita topolojisi ve triaj skoru algoritmasını tek platformda birleştirme.",
      outcome: "Kurtarma ekiplerine gerçek zamanlı ağ görünürlüğü ve öncelikli müdahale listesi.",
    },
  },
  {
    id: "healthai-co-creation",
    title: "HealthAI Co-Creation Platform",
    description:
      "Sağlık profesyonellerini AI mühendisleriyle buluşturan, GDPR uyumlu, NDA destekli toplantı yönetimi ve özel mesajlaşma kanallarıyla güvenli işbirliği ortamı.",
    longDescription:
      "HealthAI Co-Creation Platform, tıbbi AI projelerinde sağlık uzmanları ve mühendisleri arasındaki işbirliği boşluğunu kapatmak için tasarlanmış güvenli bir buluşma ortamıdır. Üç kullanıcı rolü (sağlık profesyoneli, mühendis, yönetici) üzerinde kurulu sistem; filtrelenmiş fırsat gönderilerini, uzmanlık eşleşme sinyallerini ve yapılandırılmış başvuru akışını içerir. İlgi bildirimleri NDA kabul akışını tetikler; onaylanan toplantılar otomatik olarak özel mesajlaşma kanalı açar. GDPR uyumluluğu (veri dışa aktarma, hesap silme), denetim kaydı, karanlık mod, semantik diyaloglar ve kapsamlı birim/entegrasyon testleriyle üretim kalitesinde bir platform sunar.",
    highlight:
      "GDPR uyumlu sağlık × AI işbirliği platformu — NDA destekli toplantı & özel mesajlaşma akışı",
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
    ],
    status: "completed",
    members: ["ahmet-karakoyun", "izzettin-berke-kus"],
    github: "https://github.com/berkekus/healthai-co-creation-platform",
    demo: "https://healthai-co-creation-platform.vercel.app/",
    year: 2026,
    caseStudy: {
      problem: "Tıbbi AI projeleri için doğru sağlık-mühendis eşleşmesi karmaşık ve güvensiz kanallardan geçiyor.",
      approach: "NDA akışlı toplantı yönetimi, özel kanal açma ve GDPR uyumlu kullanıcı doğrulama.",
      outcome: "Güvenli, denetlenebilir ve erişilebilir bir sağlık × AI işbirliği ekosistemi.",
    },
  },
  {
    id: "iso-29119-4-gamified",
    title: "Test Courthouse",
    description:
      "ISO/IEC/IEEE 29119-4 yazılım test tekniklerini mahkeme temalı, tarayıcı tabanlı eğitim oyunuyla öğreten platform. 15 kampanya davası, çok oyunculu Speed Trial modu ve ISO referans kütüphanesi içerir.",
    longDescription:
      "Test Courthouse, ISO/IEC/IEEE 29119-4 kapsamındaki yapısal ve kombinatoryal test tekniklerini (ifade kapsama, dal kapsama, karar kapsama, MC/DC) mahkeme senaryosuna dönüştüren interaktif bir eğitim platformudur. Oyuncu, seeded fault'lar barındıran 15 kampanya davasında test kanıtı sunar ve kapsama motoru davayı karara bağlar. Yanlış sunumlar; misconception-aware geri bildirimle açıklanır, Law Library aracılığıyla ISO referans kartları kilidini açar. Socket.IO tabanlı Speed Trial modu sınıf ortamında canlı rekabet ve zamanlama ile çok oyunculu deneyim sağlar. Tüm kapsama doğrulama ve hüküm hesaplama mantığı bağımsız bir motorla çalışarak UI'dan ayrıştırılmıştır.",
    highlight:
      "IT & ISQS Learner-as-Designer — ISO/IEC/IEEE 29119-4 test tekniklerini mahkeme oyunuyla öğreten platform",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Socket.IO",
      "Vitest",
    ],
    status: "completed",
    members: ["ahmet-karakoyun", "izzettin-berke-kus"],
    github: "https://github.com/berkekus/iso-29119-4-gamified-activity",
    demo: "https://iso-29119-4-gamified-activity-six.vercel.app/",
    year: 2026,
    caseStudy: {
      problem: "ISO 29119-4 test teknikleri soyut; öğrenciler MC/DC gibi kavramları bağlam içinde içselleştiremiyor.",
      approach: "Her davayı seeded fault + mahkeme kararı + ISO madde geri bildirimiyle eşleştiren 15 bölümlü oyunlaştırma.",
      outcome: "Kapsama mantığını uygulamalı ve rekabetçi bir ortamda pekiştiren çok oyunculu eğitim deneyimi.",
    },
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getMemberBySlug(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getMembersForProject(projectId: string): Member[] {
  const project = getProjectById(projectId);
  if (!project) return [];
  return project.members
    .map((slug) => getMemberBySlug(slug))
    .filter(Boolean) as Member[];
}

export function getProjectsForMember(memberSlug: string): Project[] {
  const member = getMemberBySlug(memberSlug);
  if (!member) return [];
  return projects.filter((project) => project.members.includes(memberSlug));
}
