'use client'

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import eng from './eng.json';
import geo from './geo.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        resources: {
            en: {
                translation: {
                   data: require('./eng.json')
                }
            },
            ge: {
                translation: {
                    data: require('./geo.json')
                }
            }
        }
    });
