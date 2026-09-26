import type { L } from '@/i18n/ui';

export const skillGroups: { icon: string; title: L; items: string[] }[] = [
  {
    icon: 'robot',
    title: { en: 'Robotics & Autonomy', tr: 'Robotik & Otonomi' },
    items: [
      'ROS 2 Humble',
      'Nav2',
      'slam_toolbox',
      'robot_localization',
      'Gazebo',
      'MuJoCo',
      'LeRobot',
      'NVIDIA Jetson Orin',
      'STM32',
    ],
  },
  {
    icon: 'compass',
    title: { en: 'Navigation & Estimation', tr: 'Navigasyon & Kestirim' },
    items: [
      'Kalman / EKF',
      'Sensor fusion',
      'Visual odometry',
      'Neural dead reckoning',
      'Optical flow (RAFT)',
      'Homography',
      'SLAM',
    ],
  },
  {
    icon: 'brain',
    title: { en: 'Deep Learning', tr: 'Derin Öğrenme' },
    items: [
      'PyTorch',
      'Vision-language-action (SmolVLA)',
      'LoRA / PEFT',
      'Imitation learning',
      'LSTM / GRU / TCN',
      'TensorFlow / Keras',
      'Transfer learning',
    ],
  },
  {
    icon: 'eye',
    title: { en: 'Computer Vision', tr: 'Bilgisayarlı Görü' },
    items: [
      'YOLO11 / YOLOv8',
      'Pose estimation',
      'ByteTrack',
      'EasyOCR / ALPR',
      'SAHI',
      'DINOv3',
      'OpenCV',
    ],
  },
  {
    icon: 'chart',
    title: { en: 'ML & Data', tr: 'ML & Veri' },
    items: [
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Optuna',
      'SHAP',
      'pandas / NumPy / SciPy',
      'Taguchi / ANOVA / RSM',
    ],
  },
  {
    icon: 'box',
    title: { en: 'Deploy & Tooling', tr: 'Dağıtım & Araçlar' },
    items: ['Docker (CUDA)', 'TorchScript', 'TensorRT', 'Flask REST', 'PyInstaller', 'Linux', 'Git', 'pytest'],
  },
  {
    icon: 'layers',
    title: { en: 'Software & Mobile', tr: 'Yazılım & Mobil' },
    items: ['Spring Boot', 'PostgreSQL', 'Keycloak', 'Flutter', 'Firebase', 'SwiftUI', '.NET', 'PyQt5'],
  },
  {
    icon: 'code',
    title: { en: 'Languages', tr: 'Programlama Dilleri' },
    items: ['Python', 'C++', 'Java', 'Dart', 'Swift', 'C#', 'SQL'],
  },
];
