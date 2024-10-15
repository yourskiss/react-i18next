import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json'

i18n.use(LanguageDetector).use(initReactI18next).init({
    
    debug: true,
    fallbackLng: 'en',
    resources : {
      en : { translation : en }, //{ pagehome : { heading: "Home", text: "Home" }, pageabout : { heading: "About us", text: "About us" } } },
      hi : { translation : hi } //{ pagehome : { heading: "घर", text: "घर" }, pageabout : { heading: "हमारे बारे में", text: "हमारे बारे में" } } }
    },
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
