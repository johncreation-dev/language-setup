import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, { LANGUAGES } from './i18n';

const LANGUAGE_KEY = 'app_language';
const SUPPORTED_LANGUAGES = LANGUAGES.map(language => language.code);

const normalizeLanguageCode = (langCode?: string | null) => {
  const normalizedCode = langCode?.split('-')[0]?.toLowerCase();
  return normalizedCode && SUPPORTED_LANGUAGES.includes(normalizedCode)
    ? normalizedCode
    : 'fr';
};

export const getCurrentLanguage = (): string => {
  return normalizeLanguageCode(i18n.resolvedLanguage || i18n.language);
};

export const getStoredLanguage = async () => {
  try {
    const storedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
    return storedLang ? normalizeLanguageCode(storedLang) : null;
  } catch (err) {
    console.error('Failed to get stored language:', err);
    return null;
  }
};

export const changeAppLanguage = async (
  langCode: string,
  options: { persist?: boolean } = {},
) => {
  const nextLanguage = normalizeLanguageCode(langCode);

  try {
    await i18n.changeLanguage(nextLanguage);
    if (options.persist !== false) {
      await AsyncStorage.setItem(LANGUAGE_KEY, nextLanguage);
    }
    return nextLanguage;
  } catch (err) {
    console.error('Failed to change language:', err);
    return getCurrentLanguage();
  }
};

export const loadStoredLanguage = async () => {
  try {
    const storedLang = await getStoredLanguage();
    if (storedLang) {
      await i18n.changeLanguage(storedLang);
      return storedLang;
    }
    return getCurrentLanguage();
  } catch (err) {
    console.error('Failed to load stored language:', err);
    return getCurrentLanguage();
  }
};
