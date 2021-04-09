import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourceEN from './en';
import resourceES from './es';

export const BACKEND_FRONTEND_LANGUAGES = {
  ES: 'ES',
  'en-us': 'EN',
};

export const APP_LANGUAGE = 'language';

const defaultLanguage = localStorage.getItem(APP_LANGUAGE) === 'undefined' ? null : localStorage.getItem(APP_LANGUAGE);
console.log('defaultLanguage::', defaultLanguage)

const resources = {
  EN: {
    translation: resourceEN,
  },
  ES: {
    translation: resourceES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: BACKEND_FRONTEND_LANGUAGES[defaultLanguage || 'ES'],
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
