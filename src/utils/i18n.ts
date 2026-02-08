// src/utils/i18n.ts
import translations from '../locales/translations.json';

// Определение языка по умолчанию
const DEFAULT_LANGUAGE = 'ru';
const SUPPORTED_LANGUAGES = ['en', 'ru'];

// Получение языка из локального хранилища или определение по языку браузера
export const getLanguage = (): string => {
  // Проверяем язык из локального хранилища
  const storedLang = localStorage.getItem('language');
  if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
    return storedLang;
  }

  // Проверяем язык браузера
  const browserLang = navigator.language.substring(0, 2);
  if (SUPPORTED_LANGUAGES.includes(browserLang)) {
    return browserLang;
  }

  // Возвращаем язык по умолчанию
  return DEFAULT_LANGUAGE;
};

// Установка языка
export const setLanguage = (lang: string): void => {
  if (SUPPORTED_LANGUAGES.includes(lang)) {
    localStorage.setItem('language', lang);
    window.location.reload(); // Перезагружаем страницу для применения изменений
  }
};

// Получение перевода по ключу
export const t = (key: string): string => {
  const lang = getLanguage();
  
  // Получаем перевод на текущем языке
  const getTranslation = (language: string): string | undefined => {
    const keys = key.split('.');
    let translation: any = translations;
    
    // Проверяем, существует ли язык в translations
    if (!translation[language]) {
      return undefined;
    }
    
    translation = translation[language];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        return undefined;
      }
    }
    
    return typeof translation === 'string' ? translation : undefined;
  };
  
  // Сначала пробуем получить перевод на текущем языке
  let translation = getTranslation(lang);
  
  // Если перевод на текущем языке не найден, используем русский как fallback
  if (translation === undefined) {
    translation = getTranslation('ru');
  }
  
  // Если и на русском не найден, возвращаем ключ
  return translation !== undefined ? translation : key;
};

// Получение доступных языков
export const getSupportedLanguages = (): string[] => {
  return [...SUPPORTED_LANGUAGES];
};