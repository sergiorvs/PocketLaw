import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourceEN from './en';
import resourceDE from './de';

export const BACKEND_FRONTEND_LANGUAGES = {
  de: 'DE',
  'en-us': 'EN',
};

export const APP_LANGUAGE = 'language';

const defaultLanguage = localStorage.getItem(APP_LANGUAGE);

const resources = {
  EN: {
    translation: resourceEN,
  },
  DE: {
    translation: resourceDE,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: BACKEND_FRONTEND_LANGUAGES[defaultLanguage || 'de'],
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
