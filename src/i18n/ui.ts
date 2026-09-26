export const languages = { en: 'English', tr: 'Türkçe' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** A string that exists in both languages. */
export type L = { en: string; tr: string };

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.blog': 'Writing',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.switch': 'Türkçe',
    'lang.switchLabel': 'Bu sayfayı Türkçe görüntüle',

    'hero.status': 'Open to AI & Robotics roles',
    'hero.hi': "Hi, I'm",
    'hero.iwork': 'I work on',
    'hero.lead':
      'I build perception and learning systems for robots that have to work outside the notebook.',
    'hero.sub':
      'From teaching a robot arm a new task with five demonstrations to keeping a UAV localized when GPS is gone, I measure everything against ground truth and package it to run on real hardware.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaCV': 'Download CV',
    'hero.ctaContact': 'Get in touch',
    'hero.scroll': 'Scroll',
    'hero.photoAlt': 'Muhammet Emin Ayhan at TEKNOFEST',

    'metrics.title': 'Selected results',

    'about.eyebrow': 'About',
    'about.title': 'Where models meet the physical world',
    'about.focus': 'Focus areas',
    'about.now': 'Right now',
    'about.languages': 'Languages',

    'projects.eyebrow': 'Projects',
    'projects.featuredTitle': 'AI & Robotics work',
    'projects.featuredLead':
      'Case studies with the problem, the approach, the measured result and where it stops working.',
    'projects.all': 'All projects',
    'projects.allTitle': 'Everything I have built',
    'projects.allLead':
      'AI and robotics first, but also the ML, full-stack and mobile work that got me here.',
    'projects.filter': 'Filter by category',
    'projects.filterAll': 'All',
    'projects.caseStudy': 'Read case study',
    'projects.code': 'Code',
    'projects.private': 'Code on request',
    'projects.privateNote':
      'This work lives in a private repository (competition rules or team ownership). I am happy to walk through the code in an interview.',
    'projects.back': 'All projects',
    'projects.role': 'My role',
    'projects.context': 'Context',
    'projects.stack': 'Stack',
    'projects.links': 'Links',
    'projects.more': 'More projects',
    'projects.count': 'projects',
    'projects.viewAll': 'See all projects',

    'exp.eyebrow': 'Experience',
    'exp.title': 'Experience & education',
    'exp.work': 'Work',
    'exp.education': 'Education & programs',
    'exp.present': 'Present',

    'awards.eyebrow': 'Recognition',
    'awards.title': 'Competitions & awards',
    'awards.certs': 'Certifications',
    'awards.finals': 'finals in national AI & engineering competitions',
    'awards.teams': 'TEKNOFEST 2026 teams: aviation AI, road safety, UGV, health AI',

    'skills.eyebrow': 'Toolbox',
    'skills.title': 'Skills & tools',

    'gallery.eyebrow': 'In the field',
    'gallery.title': 'TEKNOFEST & beyond',
    'gallery.close': 'Close',

    'blog.eyebrow': 'Writing',
    'blog.title': 'Notes from the lab',
    'blog.lead': 'Longer write-ups of what I measured, what broke and what I learned.',
    'blog.read': 'Read',
    'blog.minRead': 'min read',
    'blog.all': 'All posts',
    'blog.back': 'All posts',
    'blog.latest': 'Latest writing',

    'contact.eyebrow': 'Contact',
    'contact.title': "Have a robotics or perception problem? Let's talk.",
    'contact.lead':
      'I am open to AI / robotics engineering roles, internships and research collaborations, remote or in Türkiye. The fastest way to reach me is email.',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Thanks! Your message is on its way. I will reply soon.',
    'contact.error': 'Something went wrong. Please email me directly.',
    'contact.subject': 'New message from mteminayhan.com',

    'footer.built': 'Built with Astro, deployed on Vercel.',
    'footer.top': 'Back to top',

    '404.title': 'Lost signal',
    '404.lead':
      'This page drifted out of range. Even dead reckoning cannot find it.',
    '404.home': 'Back to home',
  },
  tr: {
    'nav.about': 'Hakkımda',
    'nav.projects': 'Projeler',
    'nav.experience': 'Deneyim',
    'nav.blog': 'Yazılar',
    'nav.contact': 'İletişim',
    'nav.menu': 'Menüyü aç',
    'nav.close': 'Menüyü kapat',
    'nav.skip': 'İçeriğe geç',
    'theme.toggle': 'Açık/koyu temayı değiştir',
    'lang.switch': 'English',
    'lang.switchLabel': 'View this page in English',

    'hero.status': 'AI & Robotik pozisyonlarına açığım',
    'hero.hi': 'Merhaba, ben',
    'hero.iwork': 'Çalıştığım alanlar:',
    'hero.lead':
      'Notebook’un dışında da çalışması gereken robotlar için algı ve öğrenme sistemleri geliştiriyorum.',
    'hero.sub':
      'Bir robot kola beş gösterimle yeni bir görev öğretmekten, GPS kesildiğinde bir İHA’nın konumunu korumaya kadar; her şeyi gerçek referansa karşı ölçüyor ve gerçek donanımda çalışacak şekilde paketliyorum.',
    'hero.ctaProjects': 'Projeleri gör',
    'hero.ctaCV': 'CV indir',
    'hero.ctaContact': 'İletişime geç',
    'hero.scroll': 'Kaydır',
    'hero.photoAlt': "Muhammet Emin Ayhan TEKNOFEST'te",

    'metrics.title': 'Öne çıkan sonuçlar',

    'about.eyebrow': 'Hakkımda',
    'about.title': 'Modellerin fiziksel dünyayla buluştuğu yer',
    'about.focus': 'Odak alanları',
    'about.now': 'Şu sıralar',
    'about.languages': 'Diller',

    'projects.eyebrow': 'Projeler',
    'projects.featuredTitle': 'AI & Robotik çalışmaları',
    'projects.featuredLead':
      'Problem, yaklaşım, ölçülen sonuç ve sistemin nerede yetersiz kaldığıyla birlikte vaka çalışmaları.',
    'projects.all': 'Tüm projeler',
    'projects.allTitle': 'Geliştirdiğim her şey',
    'projects.allLead':
      'Önce AI ve robotik; ama beni buraya getiren ML, full-stack ve mobil işler de burada.',
    'projects.filter': 'Kategoriye göre filtrele',
    'projects.filterAll': 'Tümü',
    'projects.caseStudy': 'Vaka çalışmasını oku',
    'projects.code': 'Kod',
    'projects.private': 'Kod talep üzerine',
    'projects.privateNote':
      'Bu çalışma özel bir depoda duruyor (yarışma kuralları veya takım sahipliği nedeniyle). Mülakatta kodu birlikte incelemekten memnuniyet duyarım.',
    'projects.back': 'Tüm projeler',
    'projects.role': 'Rolüm',
    'projects.context': 'Bağlam',
    'projects.stack': 'Teknolojiler',
    'projects.links': 'Bağlantılar',
    'projects.more': 'Diğer projeler',
    'projects.count': 'proje',
    'projects.viewAll': 'Tüm projeleri gör',

    'exp.eyebrow': 'Deneyim',
    'exp.title': 'Deneyim & eğitim',
    'exp.work': 'İş deneyimi',
    'exp.education': 'Eğitim & programlar',
    'exp.present': 'Devam ediyor',

    'awards.eyebrow': 'Başarılar',
    'awards.title': 'Yarışmalar & ödüller',
    'awards.certs': 'Sertifikalar',
    'awards.finals': 'ulusal yapay zekâ ve mühendislik yarışmasında final',
    'awards.teams': 'TEKNOFEST 2026 takımı: havacılıkta YZ, yol güvenliği, İKA, sağlıkta YZ',

    'skills.eyebrow': 'Araç kutusu',
    'skills.title': 'Yetenekler & araçlar',

    'gallery.eyebrow': 'Sahadan',
    'gallery.title': "TEKNOFEST ve ötesi",
    'gallery.close': 'Kapat',

    'blog.eyebrow': 'Yazılar',
    'blog.title': 'Laboratuvardan notlar',
    'blog.lead': 'Neyi ölçtüğüm, neyin bozulduğu ve ne öğrendiğim üzerine uzun yazılar.',
    'blog.read': 'Oku',
    'blog.minRead': 'dk okuma',
    'blog.all': 'Tüm yazılar',
    'blog.back': 'Tüm yazılar',
    'blog.latest': 'Son yazılar',

    'contact.eyebrow': 'İletişim',
    'contact.title': 'Robotik veya algı üzerine bir probleminiz mi var? Konuşalım.',
    'contact.lead':
      'Uzaktan veya Türkiye’de AI / robotik mühendisliği pozisyonlarına, stajlara ve araştırma iş birliklerine açığım. Bana en hızlı e-postayla ulaşabilirsiniz.',
    'contact.copy': 'E-postayı kopyala',
    'contact.copied': 'Kopyalandı!',
    'contact.name': 'Ad Soyad',
    'contact.email': 'E-posta',
    'contact.message': 'Mesaj',
    'contact.send': 'Mesaj gönder',
    'contact.sending': 'Gönderiliyor…',
    'contact.success': 'Teşekkürler! Mesajınız ulaştı, en kısa sürede dönüş yapacağım.',
    'contact.error': 'Bir sorun oluştu. Lütfen doğrudan e-posta gönderin.',
    'contact.subject': 'mteminayhan.com üzerinden yeni mesaj',

    'footer.built': 'Astro ile geliştirildi, Vercel üzerinde yayında.',
    'footer.top': 'Başa dön',

    '404.title': 'Sinyal kayboldu',
    '404.lead': 'Bu sayfa menzil dışına çıktı. Ölü hesap (dead reckoning) bile bulamıyor.',
    '404.home': 'Ana sayfaya dön',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
