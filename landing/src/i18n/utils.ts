import { ui } from './ui';

type TranslationValue = string | Record<string, unknown>[] | object;

const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}


export function useTranslations(lang: keyof typeof ui) {
  return function t<T extends TranslationValue>(key: keyof typeof ui[typeof defaultLang]): T {
    const langValue = ui[lang][key];
    const fallback = ui[defaultLang][key];
    
    return (langValue ?? fallback) as T;
  };
}