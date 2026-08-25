import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Images } from '@images/images';
import en from './en.json';
import fr from './fr.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
};

export interface LanguageProps {
  _id: number;
  name: string;
  code: string;
  flag: string;
  uri: string;
}

export const localeMap: Record<string, string> = {
  en: 'en-GB',
  fr: 'fr-FR',
  ta: 'ta-IN',
};

export const LANGUAGES = [
  {
    _id: 0,
    name: 'Français',
    code: 'fr',
    flag: '🇫🇷',
    uri: Images.french_flag, // ✅ using local image for French flag
  },
  {
    _id: 1,
    name: 'English',
    code: 'en',
    flag: '🇬🇧',
    uri: Images.english_flag, // ✅ using local image for English flag
  },
];

// ✅ FORCE DEFAULT LANGUAGE TO FRENCH
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: 'fr', // ✅ default language always French
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
