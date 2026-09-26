import type { ImageMetadata } from 'astro';
import type { L } from '@/i18n/ui';

import kizilelma from '@/assets/me/kizilelma.jpg';
import hisar from '@/assets/me/hisar.jpg';
import maviVatan from '@/assets/me/mavi-vatan.jpg';
import nusret from '@/assets/me/tcg-nusret.jpg';
import certificate from '@/assets/me/mavi-vatan-certificate.jpg';

export const gallery: { src: ImageMetadata; alt: L; caption: L }[] = [
  {
    src: kizilelma,
    alt: {
      en: 'Standing in front of the Bayraktar KIZILELMA unmanned fighter aircraft',
      tr: 'Bayraktar KIZILELMA insansız savaş uçağının önünde',
    },
    caption: { en: 'Bayraktar KIZILELMA · Mavi Vatan 2026', tr: 'Bayraktar KIZILELMA · Mavi Vatan 2026' },
  },
  {
    src: hisar,
    alt: {
      en: 'Next to the ASELSAN HİSAR air-defense system vehicle',
      tr: 'ASELSAN HİSAR hava savunma sistemi aracının yanında',
    },
    caption: { en: 'ASELSAN HİSAR · Mavi Vatan', tr: 'ASELSAN HİSAR · Mavi Vatan' },
  },
  {
    src: maviVatan,
    alt: {
      en: 'Portrait in a TEKNOFEST volunteer jacket at Gölcük',
      tr: "Gölcük'te TEKNOFEST gönüllü ceketiyle portre",
    },
    caption: { en: 'Volunteering at TEKNOFEST Mavi Vatan', tr: 'TEKNOFEST Mavi Vatan gönüllülüğü' },
  },
  {
    src: nusret,
    alt: {
      en: 'The historic minelayer TCG Nusret 1915 moored at the pier',
      tr: 'İskelede demirli tarihi mayın gemisi TCG Nusret 1915',
    },
    caption: { en: 'TCG Nusret 1915 · Gölcük', tr: 'TCG Nusret 1915 · Gölcük' },
  },
  {
    src: certificate,
    alt: {
      en: 'TEKNOFEST Mavi Vatan certificate of appreciation for volunteering',
      tr: 'TEKNOFEST Mavi Vatan gönüllülük teşekkür belgesi',
    },
    caption: {
      en: 'Certificate of appreciation · 20–23 Aug 2026',
      tr: 'Teşekkür belgesi · 20–23 Ağustos 2026',
    },
  },
];
