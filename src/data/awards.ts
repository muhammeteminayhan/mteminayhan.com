import type { L } from '@/i18n/ui';

export type Award = {
  year: string;
  title: L;
  result: L;
  highlight?: boolean;
};

export const awards: Award[] = [
  {
    year: '2026',
    title: {
      en: 'TEKNOFEST Artificial Intelligence in Aviation',
      tr: 'TEKNOFEST Havacılıkta Yapay Zekâ',
    },
    result: { en: 'Finalist', tr: 'Finalist' },
    highlight: true,
  },
  {
    year: '2026',
    title: { en: 'BTK Academy Hackathon', tr: 'BTK Akademi Hackathon' },
    result: { en: 'Finalist', tr: 'Finalist' },
  },
  {
    year: '2026',
    title: { en: 'TEKNOFEST Mavi Vatan', tr: 'TEKNOFEST Mavi Vatan' },
    result: { en: 'Volunteer · certificate of appreciation', tr: 'Gönüllü · teşekkür belgesi' },
  },
  {
    year: '2025',
    title: { en: 'TEKNOFEST Air Defense Systems', tr: 'TEKNOFEST Hava Savunma Sistemleri' },
    result: { en: 'Finalist', tr: 'Finalist' },
    highlight: true,
  },
  {
    year: '2025',
    title: {
      en: 'TEKNOFEST × Hepsiburada AI Address-Resolution Hackathon',
      tr: 'TEKNOFEST × Hepsiburada Yapay Zekâ Adres Çözümleme Hackathonu',
    },
    result: { en: 'Finalist', tr: 'Finalist' },
  },
  {
    year: '2025',
    title: { en: 'ING Hub Customer Churn Datathon', tr: 'ING Hub Müşteri Kaybı Datathonu' },
    result: { en: 'Finalist', tr: 'Finalist' },
  },
  {
    year: '2025',
    title: {
      en: 'TÜBİTAK 2209-A research project: modular autonomous smart agricultural machine',
      tr: 'TÜBİTAK 2209-A araştırma projesi: modüler ve otonom akıllı tarım makinesi',
    },
    result: { en: 'Funded', tr: 'Destek aldı' },
    highlight: true,
  },
  {
    year: '2024',
    title: { en: 'TEKNOFEST Flying Car Simulation', tr: 'TEKNOFEST Uçan Araba Simülasyonu' },
    result: { en: '6th place', tr: '6.lık' },
    highlight: true,
  },
];

export const certifications: { title: L; issuer: string }[] = [
  {
    title: { en: 'Deep Learning for Image Processing', tr: 'Görüntü İşleme için Derin Öğrenme' },
    issuer: 'BTK Akademi',
  },
  {
    title: {
      en: 'Deep Learning for Natural Language Processing',
      tr: 'Doğal Dil İşleme için Derin Öğrenme',
    },
    issuer: 'BTK Akademi',
  },
  {
    title: { en: 'Swift Coding', tr: 'Swift Kodlama' },
    issuer: 'Digital Transformation Office · 2024',
  },
];
