import { defaultLang, ui, type L, type Lang, type UiKey } from './ui';

export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale === 'tr' ? 'tr' : defaultLang;
}

export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Pick the right language from a bilingual value. */
export function l(lang: Lang, value: L): string {
  return value[lang];
}

/** Prefix a root-relative path with the locale (English lives at the root). */
export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/tr/' : `/tr${clean}`;
}

/** Strip the /tr prefix so the same page can be addressed in the other language. */
export function stripLang(pathname: string): string {
  if (pathname === '/tr' || pathname === '/tr/') return '/';
  return pathname.startsWith('/tr/') ? pathname.slice(3) : pathname;
}

export function switchLangPath(pathname: string, target: Lang): string {
  return localizePath(target, stripLang(pathname));
}

export function formatMonth(lang: Lang, date: Date): string {
  return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
    month: 'short',
    year: 'numeric',
  });
}

export function formatDate(lang: Lang, date: Date): string {
  return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
