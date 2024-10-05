// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './data/english.json';
import translationFR from './data/french.json';



i18n
    .use(initReactI18next)
    .init({
        lng: "fr",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fr: {
                translation: translationFR,
            },
            en: {
                translation: translationEN,
            },
        },

    });

export default i18n;
