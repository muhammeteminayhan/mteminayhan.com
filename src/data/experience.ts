import type { L } from '@/i18n/ui';

export type TimelineItem = {
  title: L;
  org: string;
  place: L;
  start: L;
  end?: L; // undefined = present
  points?: L[];
  tags?: string[];
};

export const work: TimelineItem[] = [
  {
    title: { en: 'Backend Developer Intern', tr: 'Backend Geliştirici Stajyeri' },
    org: 'Enoca Bilişim',
    place: { en: 'Konya, Türkiye', tr: 'Konya, Türkiye' },
    start: { en: 'Summer 2026', tr: 'Yaz 2026' },
    end: { en: 'Summer 2026', tr: 'Yaz 2026' },
    points: [
      {
        en: 'Built RESTful APIs on a layered controller–service–repository architecture with Spring Boot; modelled data in PostgreSQL with JPA / Hibernate.',
        tr: 'Spring Boot ile katmanlı controller–service–repository mimarisinde REST API’ler geliştirdim; veriyi JPA / Hibernate ile PostgreSQL’de modelledim.',
      },
      {
        en: 'Implemented role-based access control and secure authentication with Keycloak.',
        tr: 'Keycloak ile rol tabanlı erişim kontrolü ve güvenli kimlik doğrulama uyguladım.',
      },
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Keycloak'],
  },
  {
    title: { en: 'AI / ML Engineer Intern', tr: 'AI / ML Mühendisi Stajyeri' },
    org: 'AAD Bilişim ve Danışmanlık',
    place: { en: 'İstanbul, Türkiye', tr: 'İstanbul, Türkiye' },
    start: { en: 'Jan 2026', tr: 'Oca 2026' },
    end: { en: 'May 2026', tr: 'May 2026' },
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
        en: 'Supported the integration of AI components into application prototypes.',
        tr: 'AI bileşenlerinin uygulama prototiplerine entegrasyonunu destekledim.',
      },
    ],
    tags: ['Kalman / EKF', 'Python', 'State estimation'],
  },
];

export const education: TimelineItem[] = [
  {
    title: { en: 'B.Sc. Computer Engineering', tr: 'Bilgisayar Mühendisliği Lisans' },
    org: 'Selçuk University',
    place: { en: 'Konya, Türkiye', tr: 'Konya, Türkiye' },
    start: { en: '2022', tr: '2022' },
    end: { en: '2026', tr: '2026' },
    points: [{ en: 'GPA 3.56 / 4.00 · Graduated June 2026', tr: 'GNO 3,56 / 4,00 · Haziran 2026 mezunu' }],
  },
  {
    title: { en: 'Artificial Intelligence Specialization Program', tr: 'Yapay Zekâ Uzmanlık Programı' },
    org: 'National Technology Academy',
    place: { en: 'Milli Teknoloji Akademisi', tr: 'Milli Teknoloji Akademisi' },
    start: { en: 'Dec 2025', tr: 'Ara 2025' },
  },
  {
    title: {
      en: 'Autonomous Driving Technologies Specialization',
      tr: 'Otonom Sürüş Teknolojileri Uzmanlık Programı',
    },
    org: 'National Technology Academy',
    place: { en: 'Milli Teknoloji Akademisi', tr: 'Milli Teknoloji Akademisi' },
    start: { en: 'Sep 2024', tr: 'Eyl 2024' },
    end: { en: 'May 2025', tr: 'May 2025' },
  },
];
