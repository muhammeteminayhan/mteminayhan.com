import type { L } from '@/i18n/ui';

export const profile = {
  name: 'Muhammet Emin Ayhan',
  shortName: 'M. Emin Ayhan',
  initials: 'MEA',
  title: { en: 'AI & Robotics Engineer', tr: 'AI & Robotik Mühendisi' } satisfies L,
  location: { en: 'İstanbul, Türkiye', tr: 'İstanbul, Türkiye' } satisfies L,
  email: 'mteminayhan@gmail.com',
  github: 'https://github.com/muhammeteminayhan',
  githubHandle: 'muhammeteminayhan',
  linkedin: 'https://www.linkedin.com/in/mteminayhan',
  cv: '/cv/Muhammet_Emin_Ayhan_CV.pdf',
  site: 'https://mteminayhan.com',
  /** Web3Forms access key (public by design). Falls back to a mailto: link while empty. */
  web3formsKey: '',
  description: {
    en: 'Muhammet Emin Ayhan — AI & Robotics engineer. Robot learning (VLA), GPS-denied UAV navigation, visual odometry, computer vision and ROS 2 autonomy. Case studies with measured results.',
    tr: 'Muhammet Emin Ayhan — AI & Robotik mühendisi. Robot öğrenmesi (VLA), GPS’siz İHA navigasyonu, görsel odometri, bilgisayarlı görü ve ROS 2 otonomi. Ölçülmüş sonuçlarla vaka çalışmaları.',
  } satisfies L,
};

/** Rotating words in the hero typewriter. */
export const heroRoles: Record<'en' | 'tr', string[]> = {
  en: ['Robot Learning', 'UAV Navigation', 'Computer Vision', 'Sensor Fusion', 'ROS 2 Autonomy'],
  tr: ['Robot Öğrenmesi', 'İHA Navigasyonu', 'Bilgisayarlı Görü', 'Sensör Füzyonu', 'ROS 2 Otonomi'],
};

export type Metric = {
  value: number;
  decimals: number;
  prefix?: string;
  suffix?: string;
  label: L;
  source: L;
  href?: string;
};

export const metrics: Metric[] = [
  {
    value: 66.7,
    decimals: 1,
    suffix: '%',
    label: {
      en: 'robot task success after only 5 demonstrations',
      tr: 'sadece 5 gösterimden sonra robot görev başarısı',
    },
    source: { en: 'SmolVLA + LoRA · LIBERO', tr: 'SmolVLA + LoRA · LIBERO' },
    href: '/projects/teaching-cost-curve/',
  },
  {
    value: 44.4,
    decimals: 1,
    suffix: ' m',
    label: {
      en: 'mean UAV position error after 4.5 min without GPS',
      tr: 'GPS’siz 4,5 dakika sonunda ortalama İHA konum hatası',
    },
    source: { en: 'Neural dead reckoning · LSTM', tr: 'Nöral ölü hesap · LSTM' },
    href: '/projects/gps-denied-uav-localization/',
  },
  {
    value: 1,
    decimals: 2,
    label: {
      en: 'precision — zero false positives on night-time roadside video',
      tr: 'precision — gece yol kenarı videolarında sıfır yanlış pozitif',
    },
    source: { en: 'YOLO11 · ALPR · pose geometry', tr: 'YOLO11 · ALPR · poz geometrisi' },
    href: '/projects/roadside-driver-analytics/',
  },
  {
    value: 0.978,
    decimals: 3,
    prefix: 'R² ',
    label: {
      en: 'cross-validated fit for CFRP surface-roughness prediction',
      tr: 'CFRP yüzey pürüzlülüğü tahmininde çapraz doğrulama skoru',
    },
    source: { en: 'MACHINOVA · TUSAŞ Lift Up', tr: 'MACHINOVA · TUSAŞ Lift Up' },
    href: '/projects/machinova/',
  },
];

export const about: { paragraphs: L[] } = {
  paragraphs: [
    {
      en: 'I am a computer engineer (Selçuk University, 2026) working where machine learning meets robotics. My projects sit at the point where a model has to deal with the physical world: vision-language-action policies for manipulation, neural dead reckoning for a UAV that has lost GPS, visual odometry from a drone’s downward camera, and a ROS 2 autonomy stack for an unmanned ground vehicle.',
      tr: 'Selçuk Üniversitesi Bilgisayar Mühendisliği 2026 mezunuyum ve makine öğrenmesiyle robotiğin kesiştiği yerde çalışıyorum. Projelerim, bir modelin fiziksel dünyayla yüzleşmek zorunda kaldığı noktada duruyor: manipülasyon için vision-language-action politikaları, GPS’i kaybetmiş bir İHA için nöral ölü hesap, drone’un alt-görüş kamerasından görsel odometri ve insansız kara aracı için ROS 2 otonomi yığını.',
    },
    {
      en: 'What I care about is not the training curve but what a system does on data it has never seen. So my write-ups report held-out numbers, keep the negative results, and say plainly where things stop working.',
      tr: 'Benim için önemli olan eğitim eğrisi değil, sistemin daha önce hiç görmediği veride ne yaptığı. Bu yüzden çalışmalarımda ayrılmış test verisindeki sayıları raporluyor, olumsuz sonuçları saklamıyor ve sistemin nerede yetersiz kaldığını açıkça yazıyorum.',
    },
    {
      en: 'Before focusing on AI I shipped full-stack and mobile products (Spring Boot backends, Flutter and SwiftUI apps). That is why I like taking things end to end: Docker/CUDA services, ROS 2 nodes, desktop apps and REST APIs.',
      tr: 'AI’ya odaklanmadan önce full-stack ve mobil ürünler geliştirdim (Spring Boot backend’ler, Flutter ve SwiftUI uygulamaları). Bu yüzden işleri uçtan uca götürmeyi seviyorum: Docker/CUDA servisleri, ROS 2 düğümleri, masaüstü uygulamaları ve REST API’ler.',
    },
  ],
};

export const focusAreas: { icon: string; title: L; text: L }[] = [
  {
    icon: 'robot',
    title: { en: 'Robot Learning', tr: 'Robot Öğrenmesi' },
    text: {
      en: 'VLA fine-tuning, imitation learning and sample efficiency with LeRobot, LIBERO and MuJoCo.',
      tr: 'LeRobot, LIBERO ve MuJoCo ile VLA ince ayarı, taklit öğrenmesi ve örnek verimliliği.',
    },
  },
  {
    icon: 'compass',
    title: { en: 'Navigation & State Estimation', tr: 'Navigasyon & Durum Kestirimi' },
    text: {
      en: 'Kalman / EKF, neural dead reckoning, visual odometry and sensor fusion for GPS-denied flight.',
      tr: 'GPS’siz uçuş için Kalman / EKF, nöral ölü hesap, görsel odometri ve sensör füzyonu.',
    },
  },
  {
    icon: 'eye',
    title: { en: 'Computer Vision', tr: 'Bilgisayarlı Görü' },
    text: {
      en: 'Detection, tracking, ALPR, pose geometry and optical flow that hold up at night and at altitude.',
      tr: 'Gece ve irtifada da ayakta kalan tespit, takip, plaka tanıma, poz geometrisi ve optik akış.',
    },
  },
  {
    icon: 'cpu',
    title: { en: 'Autonomy Software', tr: 'Otonomi Yazılımı' },
    text: {
      en: 'ROS 2 Humble, Nav2, SLAM and FSM mission control on NVIDIA Jetson Orin.',
      tr: 'NVIDIA Jetson Orin üzerinde ROS 2 Humble, Nav2, SLAM ve FSM görev yönetimi.',
    },
  },
];

export const nowItems: L[] = [
  {
    en: 'Open to full-time AI / robotics engineering roles, available immediately',
    tr: 'Tam zamanlı AI / robotik mühendisliği pozisyonlarına açığım, hemen başlayabilirim',
  },
  {
    en: 'Measuring how many demonstrations a robot needs to learn a new part (SmolVLA)',
    tr: 'Bir robotun yeni bir parçayı öğrenmesi için kaç gösterim gerektiğini ölçüyorum (SmolVLA)',
  },
  {
    en: 'TEKNOFEST 2026: Aviation AI finals and the PATHIKA autonomous ground vehicle',
    tr: 'TEKNOFEST 2026: Havacılıkta Yapay Zekâ finali ve PATHIKA otonom kara aracı',
  },
  {
    en: 'National Technology Academy: AI Specialization Program',
    tr: 'Milli Teknoloji Akademisi: Yapay Zekâ Uzmanlık Programı',
  },
];

export const spokenLanguages: L[] = [
  { en: 'Turkish (native)', tr: 'Türkçe (ana dil)' },
  { en: 'English (B2)', tr: 'İngilizce (B2)' },
];
