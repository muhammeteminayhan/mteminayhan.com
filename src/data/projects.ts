import type { ImageMetadata } from 'astro';
import type { L } from '@/i18n/ui';

import tccCurve from '@/assets/projects/teaching-cost-curve/curve.png';
import uavRoute from '@/assets/projects/gps-denied-uav-localization/route.png';
import kalmanFlight from '@/assets/projects/kalman-filter-tutorial/flight-altitude.png';
import machinovaSurface from '@/assets/projects/machinova/response-surface.png';
import ipGui from '@/assets/projects/image-processing-gui/ui.png';
import gokboruUi from '@/assets/projects/yenigokboru/ui.png';
import skillswapCard from '@/assets/projects/skillswap/card.png';
import dlSample from '@/assets/projects/deep-learning-practice/sample.png';

export type Category = 'robotics' | 'cv' | 'ml' | 'software';

export const categories: { id: Category; label: L }[] = [
  { id: 'robotics', label: { en: 'Robotics & Autonomy', tr: 'Robotik & Otonomi' } },
  { id: 'cv', label: { en: 'Computer Vision', tr: 'Bilgisayarlı Görü' } },
  { id: 'ml', label: { en: 'ML & Data', tr: 'ML & Veri' } },
  { id: 'software', label: { en: 'Software & Mobile', tr: 'Yazılım & Mobil' } },
];

export type Project = {
  slug: string;
  title: L;
  summary: L;
  categories: Category[];
  /** yyyy-mm, used for ordering and display */
  date: string;
  context?: L;
  role?: L;
  featured?: boolean;
  /** true when a long-form MDX case study exists in src/content/projects/{lang}/{slug}.mdx */
  caseStudy?: boolean;
  private?: boolean;
  repo?: string;
  cover?: ImageMetadata | string;
  /** matplotlib-style figures on white look best framed on paper */
  coverOnPaper?: boolean;
  metrics?: { value: string; label: L }[];
  stack: string[];
  /** a short glyph used on generated covers when there is no image */
  glyph?: string;
  art?: 'slalom';
};

const gh = (repo: string) => `https://github.com/muhammeteminayhan/${repo}`;

export const projects: Project[] = [
  // ---------------------------------------------------------------- featured
  {
    slug: 'teaching-cost-curve',
    title: {
      en: 'Teaching Cost Curve: how many demos does a robot need?',
      tr: 'Öğretme Maliyeti Eğrisi: bir robot kaç gösterimle öğrenir?',
    },
    summary: {
      en: 'Measuring the demonstration-count vs. success-rate curve for SmolVLA, LoRA fine-tuned on unseen LIBERO tasks, on a single 8 GB consumer GPU. Nearly all of the value arrives in the first five demonstrations, and so does catastrophic forgetting.',
      tr: 'Görülmemiş LIBERO görevlerinde LoRA ile ince ayar yapılan SmolVLA için gösterim sayısı ile başarı oranı arasındaki eğriyi, tek bir 8 GB tüketici GPU’sunda ölçtüm. Kazancın neredeyse tamamı ilk beş gösterimde geliyor; felaket unutma da öyle.',
    },
    categories: ['robotics'],
    date: '2026-09',
    context: { en: 'Independent research', tr: 'Bağımsız araştırma' },
    role: { en: 'Sole author', tr: 'Tek geliştirici' },
    featured: true,
    caseStudy: true,
    repo: gh('teaching-cost-curve'),
    cover: tccCurve,
    coverOnPaper: true,
    metrics: [
      { value: '66.7%', label: { en: 'success @ 5 demos', tr: '5 gösterimde başarı' } },
      { value: '0.66%', label: { en: 'params trained', tr: 'eğitilen parametre' } },
      { value: '300', label: { en: 'episodes / point', tr: 'bölüm / nokta' } },
    ],
    stack: ['SmolVLA', 'LeRobot', 'LoRA / PEFT', 'LIBERO', 'MuJoCo', 'PyTorch'],
  },
  {
    slug: 'gps-denied-uav-localization',
    title: {
      en: 'GPS-Denied UAV Localization',
      tr: 'GPS’siz İHA Konumlandırma',
    },
    summary: {
      en: 'Neural dead reckoning for a fixed-wing UAV: an LSTM predicts one-second displacements from 19 GPS-free sensor channels. After 4.5 minutes without GPS it is still within ~85 m, about 38× better than classical dead reckoning.',
      tr: 'Sabit kanatlı bir İHA için nöral ölü hesap: bir LSTM, GPS içermeyen 19 sensör kanalından saniyelik yer değiştirmeleri tahmin ediyor. GPS olmadan 4,5 dakika sonra hâlâ ~85 m içinde; klasik ölü hesaptan yaklaşık 38 kat daha iyi.',
    },
    categories: ['robotics', 'ml'],
    date: '2026-07',
    context: { en: 'Independent project · public dataset', tr: 'Bağımsız proje · açık veri seti' },
    role: { en: 'Sole author', tr: 'Tek geliştirici' },
    featured: true,
    caseStudy: true,
    repo: gh('gps-denied-uav-localization'),
    cover: uavRoute,
    coverOnPaper: true,
    metrics: [
      { value: '44.4 m', label: { en: 'mean error, 4.5 min', tr: 'ort. hata, 4,5 dk' } },
      { value: '11.7 m', label: { en: 'after 10 s outage', tr: '10 sn kesinti sonrası' } },
      { value: '≈1 ms', label: { en: 'CPU inference', tr: 'CPU çıkarımı' } },
    ],
    stack: ['PyTorch', 'LSTM / GRU / TCN', 'Sensor fusion', 'TorchScript', 'NumPy'],
  },
  {
    slug: 'aerial-ai-visual-odometry',
    title: {
      en: 'Aerial AI: GPS-Free Visual Odometry',
      tr: 'Havacılıkta YZ: GPS’siz Görsel Odometri',
    },
    summary: {
      en: 'TEKNOFEST 2026 Artificial Intelligence in Aviation. I owned the GPS-free positioning task: RAFT optical flow + homography with a keyframe ladder estimates the aircraft’s displacement from its downward camera. Full rehearsal: 2256/2256 frames, 3.54 m mean error.',
      tr: 'TEKNOFEST 2026 Havacılıkta Yapay Zekâ. GPS’siz konum kestirimi görevi bendeydi: RAFT optik akış + homografi ve keyframe merdiveni, hava aracının yer değiştirmesini alt-görüş kamerasından kestiriyor. Tam prova: 2256/2256 kare, 3,54 m ortalama hata.',
    },
    categories: ['robotics', 'cv'],
    date: '2026-08',
    context: { en: 'TEKNOFEST 2026 · Team bugbuster · Finalist', tr: 'TEKNOFEST 2026 · bugbuster takımı · Finalist' },
    role: {
      en: 'Task 2 (GPS-free positioning) owner, system integration',
      tr: 'Görev 2 (GPS’siz konum) sorumlusu, sistem entegrasyonu',
    },
    featured: true,
    caseStudy: true,
    private: true,
    metrics: [
      { value: '3.54 m', label: { en: 'mean error, full run', tr: 'ort. hata, tam prova' } },
      { value: '14×', label: { en: 'below hold baseline', tr: 'tut tabanından iyi' } },
      { value: '−31%', label: { en: 'error on thermal', tr: 'termalde hata' } },
    ],
    stack: ['RAFT', 'Homography', 'OpenCV', 'PyTorch', 'YOLOv8', 'DINOv3'],
    glyph: 'VO',
  },
  {
    slug: 'pathika-ugv',
    title: {
      en: 'PATHIKA: Autonomous Ground Vehicle',
      tr: 'PATHIKA: Otonom Kara Aracı',
    },
    summary: {
      en: 'ROS 2 Humble autonomy stack for a 4×4 unmanned ground vehicle on Jetson Orin NX: SLAM, EKF sensor fusion, Nav2, a slalom planner and a finite-state-machine mission manager, developed in Gazebo simulation first.',
      tr: 'Jetson Orin NX üzerinde 4×4 insansız kara aracı için ROS 2 Humble otonomi yığını: SLAM, EKF sensör füzyonu, Nav2, slalom planlayıcı ve sonlu durum makinesi görev yöneticisi; önce Gazebo simülasyonunda geliştirildi.',
    },
    categories: ['robotics'],
    date: '2026-06',
    context: { en: 'TEKNOFEST 2026 · Unmanned Ground Vehicle', tr: 'TEKNOFEST 2026 · İnsansız Kara Aracı' },
    role: {
      en: 'SLAM, slalom planner, control, FSM mission manager, URDF',
      tr: 'SLAM, slalom planlayıcı, kontrol, FSM görev yöneticisi, URDF',
    },
    featured: true,
    caseStudy: true,
    private: true,
    metrics: [
      { value: 'ROS 2', label: { en: 'Humble', tr: 'Humble' } },
      { value: '100', label: { en: 'TOPS on Orin NX', tr: 'TOPS, Orin NX' } },
      { value: '4×4', label: { en: 'skid-steer, 6 kW', tr: 'skid-steer, 6 kW' } },
    ],
    stack: ['ROS 2 Humble', 'Nav2', 'slam_toolbox', 'robot_localization', 'Gazebo', 'Jetson Orin NX'],
    glyph: 'UGV',
    art: 'slalom',
  },
  {
    slug: 'roadside-driver-analytics',
    title: {
      en: 'Roadside Driver-Behaviour Analytics',
      tr: 'Yol Kenarı Sürücü Davranışı Analizi',
    },
    summary: {
      en: 'Identifies a vehicle (body type, plate, colour) and detects driver-caused violations from a single night-time pass through the windshield. Built on one rule: nothing that cannot be proven is reported. Result: zero false positives.',
      tr: 'Tek bir gece geçişinde, ön cam ardından aracı (gövde tipi, plaka, renk) tanımlar ve sürücü kaynaklı ihlalleri tespit eder. Tek bir kurala dayanır: kanıtlanamayan hiçbir şey raporlanmaz. Sonuç: sıfır yanlış pozitif.',
    },
    categories: ['cv'],
    date: '2026-08',
    context: {
      en: 'TEKNOFEST 2026 · 5G & AI Smart Road Safety · Team BiDatalar',
      tr: 'TEKNOFEST 2026 · 5G & YZ ile Akıllı Yol Güvenliği · BiDatalar',
    },
    role: { en: 'AI / computer-vision engineer', tr: 'AI / bilgisayarlı görü mühendisi' },
    featured: true,
    caseStudy: true,
    repo: gh('bidatalar-5g-akilli-yol-guvenligi'),
    cover: '/media/roadside/results.svg',
    metrics: [
      { value: '1.00', label: { en: 'precision', tr: 'precision' } },
      { value: '0', label: { en: 'false positives', tr: 'yanlış pozitif' } },
      { value: 'F1 0.77', label: { en: 'overall', tr: 'toplam' } },
    ],
    stack: ['YOLO11', 'Pose estimation', 'EasyOCR', 'OpenCV', 'Docker / CUDA 12.1'],
  },
  {
    slug: 'kalman-filter-tutorial',
    title: {
      en: 'Kalman / EKF from Scratch',
      tr: 'Sıfırdan Kalman / EKF',
    },
    summary: {
      en: 'A hands-on state-estimation library: KF and EKF implemented from scratch in NumPy, with seven progressive examples from 1D tracking to sensor fusion, EKF radar and a real drone flight-log case study.',
      tr: 'Uygulamalı bir durum kestirimi kütüphanesi: NumPy ile sıfırdan yazılmış KF ve EKF; 1B takipten sensör füzyonuna, EKF radar takibine ve gerçek bir drone uçuş kaydı vaka çalışmasına uzanan yedi aşamalı örnek.',
    },
    categories: ['robotics'],
    date: '2026-05',
    context: { en: 'Open-source tutorial', tr: 'Açık kaynak eğitim' },
    role: { en: 'Author', tr: 'Yazar' },
    featured: true,
    caseStudy: true,
    repo: gh('kalman-filter-tutorial'),
    cover: kalmanFlight,
    coverOnPaper: true,
    metrics: [
      { value: '7', label: { en: 'worked examples', tr: 'uygulamalı örnek' } },
      { value: 'KF+EKF', label: { en: 'from scratch', tr: 'sıfırdan' } },
      { value: 'Real', label: { en: 'drone flight log', tr: 'drone uçuş kaydı' } },
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'State estimation', 'Sensor fusion'],
  },

  // ---------------------------------------------------------------- more
  {
    slug: 'machinova',
    title: {
      en: 'MACHINOVA: CFRP Surface-Roughness Prediction',
      tr: 'MACHINOVA: CFRP Yüzey Pürüzlülüğü Tahmini',
    },
    summary: {
      en: 'Graduation project in the TUSAŞ Lift Up program. Five regressors compared under three cross-validation schemes on a Taguchi L9 design; the RSM model reaches CV R² = 0.978. Shipped as a desktop app, standalone .exe and Flask REST API.',
      tr: 'TUSAŞ Lift Up programında bitirme projesi. Taguchi L9 deneyinde beş regresyon modeli üç farklı çapraz doğrulama şemasıyla karşılaştırıldı; seçilen RSM modeli CV R² = 0,978’e ulaşıyor. Masaüstü uygulaması, tek dosya .exe ve Flask REST API olarak teslim edildi.',
    },
    categories: ['ml'],
    date: '2026-05',
    context: { en: 'TUSAŞ Lift Up · Graduation project', tr: 'TUSAŞ Lift Up · Bitirme projesi' },
    role: {
      en: 'The only computer engineer in a 5-person team: statistics, ML, app & API',
      tr: '5 kişilik ekipteki tek bilgisayar mühendisi: istatistik, ML, uygulama & API',
    },
    caseStudy: true,
    repo: gh('MACHINOVA-CFRP-Ra-Prediction'),
    cover: machinovaSurface,
    coverOnPaper: true,
    metrics: [
      { value: 'R² 0.978', label: { en: 'cross-validated', tr: 'çapraz doğrulama' } },
      { value: '0.012 µm', label: { en: 'RMSE', tr: 'RMSE' } },
      { value: '83.2%', label: { en: 'cutting-speed effect', tr: 'kesme hızı etkisi' } },
    ],
    stack: ['scikit-learn', 'RSM', 'Taguchi / ANOVA', 'Flask', 'CustomTkinter', 'PyInstaller'],
  },
  {
    slug: 'variant-pathogenicity',
    title: {
      en: 'Variant Pathogenicity Classification',
      tr: 'Varyant Patojenite Sınıflandırma',
    },
    summary: {
      en: 'Missense genetic variants → pathogenic / benign, with ~55% missing features and a train/test prior shift. Leakage-controlled validation, Optuna-tuned gradient-boosting ensemble and SHAP explanations.',
      tr: 'Missense genetik varyantları patojenik / benign olarak sınıflandırma; ~%55 eksik öznitelik ve eğitim/test dağılım kayması. Sızıntı kontrollü doğrulama, Optuna ile ayarlanmış gradient boosting topluluğu ve SHAP açıklamaları.',
    },
    categories: ['ml'],
    date: '2026-06',
    context: { en: 'TEKNOFEST 2026 · Healthcare AI', tr: 'TEKNOFEST 2026 · Sağlıkta Yapay Zekâ' },
    repo: gh('saglikta-yapay-zeka'),
    metrics: [{ value: 'SHAP', label: { en: 'explainability', tr: 'açıklanabilirlik' } }],
    stack: ['XGBoost', 'LightGBM', 'CatBoost', 'Optuna', 'SHAP'],
    glyph: 'DNA',
  },
  {
    slug: 'deep-learning-practice',
    title: { en: 'Deep Learning Practice', tr: 'Derin Öğrenme Çalışmaları' },
    summary: {
      en: 'Eight mini-projects across computer vision and NLP: pneumonia detection with transfer learning, YOLOv8 vehicle tracking, CNN classification, LSTM and a RAG pipeline with FAISS and Gemini.',
      tr: 'Bilgisayarlı görü ve NLP’de sekiz mini proje: transfer öğrenmeyle zatürre tespiti, YOLOv8 araç takibi, CNN sınıflandırma, LSTM ve FAISS + Gemini ile RAG hattı.',
    },
    categories: ['cv', 'ml'],
    date: '2025-12',
    repo: gh('deep-learning-practice'),
    cover: dlSample,
    stack: ['TensorFlow / Keras', 'YOLOv8', 'FAISS', 'RAG', 'LSTM'],
  },
  {
    slug: 'image-processing-gui',
    title: { en: 'Image Processing from Scratch', tr: 'Sıfırdan Görüntü İşleme' },
    summary: {
      en: 'Sixteen classic algorithms (convolution, Canny, histogram equalisation, morphology) written in raw NumPy, no OpenCV filter calls, behind a PyQt5 interface.',
      tr: 'On altı klasik algoritma (konvolüsyon, Canny, histogram eşitleme, morfoloji) hazır OpenCV filtresi kullanmadan saf NumPy ile yazıldı; PyQt5 arayüzüyle.',
    },
    categories: ['cv'],
    date: '2025-04',
    repo: gh('image-processing-gui'),
    cover: ipGui,
    metrics: [{ value: '16', label: { en: 'algorithms', tr: 'algoritma' } }],
    stack: ['NumPy', 'PyQt5', 'Python'],
  },
  {
    slug: 'yenigokboru',
    title: { en: 'YeniGökböru: Air-Defense Control UI', tr: 'YeniGökböru: Hava Savunma Kontrol Arayüzü' },
    summary: {
      en: 'Desktop control interface for an air-defense system concept: live camera feed, mission-stage controls and telemetry.',
      tr: 'Bir hava savunma sistemi konsepti için masaüstü kontrol arayüzü: canlı kamera görüntüsü, görev aşaması kontrolleri ve telemetri.',
    },
    categories: ['cv', 'software'],
    date: '2025-06',
    context: { en: 'TEKNOFEST Air Defense', tr: 'TEKNOFEST Hava Savunma' },
    repo: gh('YeniGokboru'),
    cover: gokboruUi,
    stack: ['PyQt5', 'OpenCV', 'Python'],
  },
  {
    slug: 'lung-cancer-classification',
    title: { en: 'Lung Cancer Classification', tr: 'Akciğer Kanseri Sınıflandırma' },
    summary: {
      en: 'Classifying lung cancer risk from patient symptoms with CatBoost, validated with 5-fold cross-validation.',
      tr: 'Hasta semptomlarından akciğer kanseri riskinin CatBoost ile sınıflandırılması; 5 katlı çapraz doğrulama ile değerlendirildi.',
    },
    categories: ['ml'],
    date: '2026-03',
    repo: gh('LungCancerClassification'),
    metrics: [{ value: 'AUC 0.94', label: { en: '5-fold CV', tr: '5 katlı CV' } }],
    stack: ['CatBoost', 'scikit-learn', 'pandas'],
    glyph: 'AUC',
  },
  {
    slug: 'inghub-datathon',
    title: { en: 'ING Hub Datathon 2025', tr: 'ING Hub Datathon 2025' },
    summary: {
      en: 'Customer-churn prediction model built for the ING Hub Datathon, where the team reached the finals.',
      tr: 'ING Hub Datathon için geliştirilen müşteri kaybı (churn) tahmin modeli; takım finale kaldı.',
    },
    categories: ['ml'],
    date: '2025-10',
    context: { en: 'Finalist', tr: 'Finalist' },
    repo: gh('INGHub-Datathon-2025'),
    stack: ['Python', 'Gradient boosting', 'Feature engineering'],
    glyph: 'ING',
  },
  {
    slug: 'hatma',
    title: { en: 'Hatma', tr: 'Hatma' },
    summary: {
      en: 'Flutter app for organising group Quran readings and dhikr collections: 30-juz assignment grid, real-time group chat, discover feed and abuse protection. Firebase Auth, Firestore and FCM.',
      tr: 'Grup hatimleri ve zikir toplamalarını organize eden Flutter uygulaması: 30 cüzlük atama tablosu, gerçek zamanlı grup sohbeti, keşfet akışı ve suistimal koruması. Firebase Auth, Firestore ve FCM.',
    },
    categories: ['software'],
    date: '2026-06',
    repo: gh('hatma'),
    stack: ['Flutter', 'Riverpod', 'Firebase', 'drift'],
    glyph: 'حَتْمَة',
  },
  {
    slug: 'komzu',
    title: { en: 'KOMZU: Neighbourhood App', tr: 'KOMZU: Mahalle Uygulaması' },
    summary: {
      en: 'Neighbourhood super-app: events, groups, real-time chat over STOMP, marketplace, local pros with reviews and maps. Flutter client with a Spring Boot backend.',
      tr: 'Mahalle süper uygulaması: etkinlikler, gruplar, STOMP üzerinden gerçek zamanlı sohbet, ikinci el pazarı, yorumlu usta ilanları ve harita. Flutter istemci, Spring Boot backend.',
    },
    categories: ['software'],
    date: '2025-10',
    private: true,
    stack: ['Flutter', 'Spring Boot', 'WebSocket / STOMP', 'Cloudinary'],
    glyph: 'KMZ',
  },
  {
    slug: 'skillswap',
    title: { en: 'İMECE: Skill-Swap Marketplace', tr: 'İMECE: Yetenek Takası Pazarı' },
    summary: {
      en: 'Two-sided skill-exchange marketplace with trust, credit-balance and fairness scores: Spring Boot backend, Flutter app and an ML credit-scoring regression.',
      tr: 'Güven, kredi dengesi ve adalet skorlarına dayanan iki taraflı yetenek takası pazarı: Spring Boot backend, Flutter uygulaması ve ML tabanlı kredi skorlama regresyonu.',
    },
    categories: ['software', 'ml'],
    date: '2026-02',
    context: { en: 'Hackathon project', tr: 'Hackathon projesi' },
    repo: gh('skillswap'),
    cover: skillswapCard,
    stack: ['Spring Boot', 'Flutter', 'PostgreSQL', 'scikit-learn', 'Gemini'],
  },
  {
    slug: 'java-spring-samples',
    title: { en: 'Spring Boot Backend Samples', tr: 'Spring Boot Backend Örnekleri' },
    summary: {
      en: 'REST APIs on a layered controller–service–repository architecture, Keycloak security and Swagger / OpenAPI docs.',
      tr: 'Katmanlı controller–service–repository mimarisinde REST API’ler, Keycloak güvenliği ve Swagger / OpenAPI dokümantasyonu.',
    },
    categories: ['software'],
    date: '2025-09',
    repo: gh('java-spring-samples'),
    stack: ['Java', 'Spring Boot', 'Keycloak', 'OpenAPI'],
    glyph: '{ }',
  },
  {
    slug: 'flutter-apps',
    title: { en: 'Flutter Apps', tr: 'Flutter Uygulamaları' },
    summary: {
      en: 'A collection of small cross-platform apps built while learning Dart and Flutter.',
      tr: 'Dart ve Flutter öğrenirken geliştirdiğim küçük çapraz platform uygulamalar.',
    },
    categories: ['software'],
    date: '2024-12',
    repo: gh('flutter-apps'),
    stack: ['Flutter', 'Dart'],
    glyph: 'Fl',
  },
  {
    slug: 'swiftui-playground',
    title: { en: 'SwiftUI Playground', tr: 'SwiftUI Playground' },
    summary: {
      en: '25 SwiftUI components, animations and mini-apps consolidated into one organised showcase.',
      tr: '25 SwiftUI bileşeni, animasyon ve mini uygulamanın tek bir düzenli vitrinde toplanmış hali.',
    },
    categories: ['software'],
    date: '2024-10',
    repo: gh('swiftui-playground'),
    stack: ['Swift', 'SwiftUI', 'Xcode'],
    glyph: 'Sw',
  },
  {
    slug: 'csharp-coursework',
    title: { en: 'C# / .NET Coursework', tr: 'C# / .NET Ders Çalışmaları' },
    summary: {
      en: 'Language fundamentals (events, delegates, generics) and Windows Forms desktop applications.',
      tr: 'Dil temelleri (event, delegate, generic) ve Windows Forms masaüstü uygulamaları.',
    },
    categories: ['software'],
    date: '2023-12',
    repo: gh('csharp-coursework'),
    stack: ['C#', '.NET', 'WinForms'],
    glyph: 'C#',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
