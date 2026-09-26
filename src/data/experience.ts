import type { L } from '@/i18n/ui';

export type TimelineItem = {
  title: L;
  org: string | L;
  place: L;
  start: L;
  end?: L; // undefined = present
  points?: L[];
  tags?: string[];
};

export const work: TimelineItem[] = [
  {
    title: { en: 'AI / ML Engineer Intern', tr: 'AI / ML Mühendisi Stajyeri' },
    org: 'ABBTech Bilgi Teknolojileri ve Danışmanlık',
    place: { en: 'İstanbul, Türkiye · On-site', tr: 'İstanbul, Türkiye · Ofiste' },
    start: { en: 'Jan 2026', tr: 'Oca 2026' },
    end: { en: 'Jun 2026', tr: 'Haz 2026' },
    points: [
      {
        en: 'Developed state-estimation algorithms on IMU and sensor data with Kalman / Extended Kalman filtering for position and velocity under noisy, GPS-denied conditions; validated in simulation.',
        tr: 'Gürültülü ve GPS’siz koşullarda konum ve hız kestirimi için IMU ve sensör verisi üzerinde Kalman / Genişletilmiş Kalman filtresiyle durum kestirimi algoritmaları geliştirdim; simülasyonda doğruladım.',
      },
      {
        en: 'Built data-processing and ML prototyping pipelines in Python for data-driven decision-support systems.',
        tr: 'Veriye dayalı karar destek sistemleri için Python’da veri işleme ve ML prototipleme hatları kurdum.',
      },
      {
        en: 'Worked on model training, optimization and deployment, and supported the integration of AI components into application prototypes.',
        tr: 'Model eğitimi, optimizasyonu ve dağıtımı üzerinde çalıştım; AI bileşenlerinin uygulama prototiplerine entegrasyonunu destekledim.',
      },
    ],
    tags: ['Kalman / EKF', 'Python', 'State estimation'],
  },
  {
    title: { en: 'Mobile App Developer Intern', tr: 'Mobil Uygulama Geliştirici Stajyeri' },
    org: 'Entegre Yazılım',
    place: { en: 'Konya, Türkiye · Hybrid', tr: 'Konya, Türkiye · Hibrit' },
    start: { en: 'Jul 2025', tr: 'Tem 2025' },
    end: { en: 'Aug 2025', tr: 'Ağu 2025' },
    points: [
      {
        en: 'Built cross-platform (iOS & Android) Flutter interfaces: state management, API integrations and responsive layouts.',
        tr: 'Flutter ile çok platformlu (iOS & Android) arayüzler geliştirdim: state management, API entegrasyonları ve responsive tasarımlar.',
      },
      {
        en: 'Developed the Spring Boot REST backend with a layered architecture, JWT authentication and role-based authorization on PostgreSQL.',
        tr: 'Spring Boot ile katmanlı mimaride, JWT kimlik doğrulama ve rol bazlı yetkilendirmeli REST backend’i PostgreSQL üzerinde geliştirdim.',
      },
      {
        en: 'Integrated Cloudinary for media storage and third-party services (maps, notifications).',
        tr: 'Medya depolama için Cloudinary’yi ve üçüncü parti servisleri (harita, bildirim) entegre ettim.',
      },
    ],
    tags: ['Flutter', 'Spring Boot', 'PostgreSQL', 'JWT', 'Cloudinary'],
  },
  {
    title: { en: 'Backend Engineer Intern', tr: 'Backend Mühendisi Stajyeri' },
    org: 'Enoca',
    place: { en: 'Konya, Türkiye · On-site', tr: 'Konya, Türkiye · Ofiste' },
    start: { en: 'Jun 2025', tr: 'Haz 2025' },
    end: { en: 'Jul 2025', tr: 'Tem 2025' },
    points: [
      {
        en: 'Built RESTful APIs on a layered controller–service–repository architecture with Spring Boot; modelled data in PostgreSQL with JPA / Hibernate and tested services with Postman.',
        tr: 'Spring Boot ile katmanlı controller–service–repository mimarisinde REST API’ler geliştirdim; veriyi JPA / Hibernate ile PostgreSQL’de modelledim, servisleri Postman ile test ettim.',
      },
      {
        en: 'Worked on authentication and role-based access control with Spring Security and Keycloak.',
        tr: 'Spring Security ve Keycloak ile kimlik doğrulama ve rol tabanlı erişim kontrolü üzerinde çalıştım.',
      },
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Keycloak'],
  },
  {
    title: { en: 'iOS App Developer', tr: 'iOS Uygulama Geliştirici' },
    org: {
      en: 'Presidency of the Republic of Türkiye, Digital Transformation Office',
      tr: 'T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi',
    },
    place: { en: 'Ankara, Türkiye', tr: 'Ankara, Türkiye' },
    start: { en: 'Jul 2024', tr: 'Tem 2024' },
    end: { en: 'Sep 2024', tr: 'Eyl 2024' },
    points: [
      {
        en: 'Built iOS screens, reusable UI components and animations with Swift and SwiftUI on an MVVM architecture.',
        tr: 'Swift ve SwiftUI ile MVVM mimarisinde iOS ekranları, yeniden kullanılabilir arayüz bileşenleri ve animasyonlar geliştirdim.',
      },
      {
        en: 'Earned the program’s Swift Coding certificate (Sep 2024).',
        tr: 'Program kapsamında Swift Kodlama sertifikası aldım (Eylül 2024).',
      },
    ],
    tags: ['Swift', 'SwiftUI', 'MVVM'],
  },
];

export const education: TimelineItem[] = [
  {
    title: { en: 'B.Sc. Computer Engineering', tr: 'Bilgisayar Mühendisliği Lisans' },
    org: { en: 'Selçuk University', tr: 'Selçuk Üniversitesi' },
    place: { en: 'Konya, Türkiye', tr: 'Konya, Türkiye' },
    start: { en: '2022', tr: '2022' },
    end: { en: '2026', tr: '2026' },
    points: [{ en: 'GPA 3.56 / 4.00 · Graduated June 2026', tr: 'GNO 3,56 / 4,00 · Haziran 2026 mezunu' }],
  },
  {
    title: { en: 'Artificial Intelligence Specialization Program', tr: 'Yapay Zekâ Uzmanlık Programı' },
    org: { en: 'National Technology Academy', tr: 'Milli Teknoloji Akademisi' },
    place: { en: 'Ministry of Industry and Technology · Remote', tr: 'T.C. Sanayi ve Teknoloji Bakanlığı · Uzaktan' },
    start: { en: 'Jan 2026', tr: 'Oca 2026' },
    end: { en: 'Aug 2026', tr: 'Ağu 2026' },
    points: [
      {
        en: 'Basic training (Jan – Feb 2026), then the specialization track (Feb – Aug 2026).',
        tr: 'Temel eğitim (Oca – Şub 2026), ardından uzmanlık eğitimi (Şub – Ağu 2026).',
      },
    ],
  },
  {
    title: {
      en: 'Autonomous Driving Technologies Specialization',
      tr: 'Otonom Sürüş Teknolojileri Uzmanlık Programı',
    },
    org: { en: 'National Technology Academy', tr: 'Milli Teknoloji Akademisi' },
    place: { en: 'Ministry of Industry and Technology · Remote', tr: 'T.C. Sanayi ve Teknoloji Bakanlığı · Uzaktan' },
    start: { en: 'Oct 2024', tr: 'Eki 2024' },
    end: { en: 'Jun 2025', tr: 'Haz 2025' },
    points: [
      {
        en: 'Basic training (Oct – Dec 2024), then the specialization track (Dec 2024 – Jun 2025).',
        tr: 'Temel eğitim (Eki – Ara 2024), ardından uzmanlık eğitimi (Ara 2024 – Haz 2025).',
      },
    ],
  },
];
