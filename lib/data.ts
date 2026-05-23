// ─── Feza-Co Collective · Data Layer ────────────────────────────────────────

export interface Member {
  name: string;
  slug: string;
  role: string;
  initials: string;
  avatarGradient: string; // Tailwind gradient classes for placeholder
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
}

// ─── Members ─────────────────────────────────────────────────────────────────

export const members: Member[] = [
  {
    name: "Ahmet Karakoyun",
    slug: "ahmet-karakoyun",
    role: "Kurucu Ortak",
    initials: "AK",
    avatarGradient: "from-cyan-500 via-blue-600 to-indigo-700",
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
    projects: ["digital-twin-kit", "raw2value"],
    hackathons: ["Teknofest 2024", "HackITU 2024"],
    quote: "Kod yazmak bir sanat, sistem tasarlamak bir mühendislik disiplinidir.",
  },
  {
    name: "Tuna Deniz",
    slug: "tuna-deniz",
    role: "Kurucu Ortak",
    initials: "TD",
    avatarGradient: "from-violet-500 via-purple-600 to-cyan-500",
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
    projects: ["digital-twin-kit", "raw2value"],
    hackathons: ["Teknofest 2024", "IEEE Hackathon 2024"],
    quote:
      "Fiziksel dünyayı sayısallaştırmak, geleceğin mühendisliğinin kapılarını açar.",
  },
  {
    name: "Nedim Göktuğ Tabak",
    slug: "nedim-goktug-tabak",
    role: "Kurucu Ortak",
    initials: "NGT",
    avatarGradient: "from-emerald-500 via-teal-500 to-cyan-600",
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
    projects: [],
    hackathons: ["Teknofest 2024"],
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
    projects: [],
    hackathons: ["HackITU 2024", "Design Jam 2024"],
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
    projects: ["raw2value"],
    hackathons: ["Datathon ITU 2024", "Teknofest 2024"],
    quote: "Veri, doğru sorular sorulduğunda konuşmaya başlar.",
  },
];

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
    members: ["tuna-deniz", "ahmet-karakoyun", "oguzhan-tarhan"],
    github: "https://github.com/feza-co/Raw2Value",
    year: 2026,
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
    members: ["tuna-deniz", "ahmet-karakoyun"],
    year: 2024,
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
  return member.projects
    .map((id) => getProjectById(id))
    .filter(Boolean) as Project[];
}
