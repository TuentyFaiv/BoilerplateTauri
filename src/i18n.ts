import { PUBLIC_DEBUG_I18NEXT } from "$env/static/public";
import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import config from "@config";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: PUBLIC_DEBUG_I18NEXT === "true",
    fallbackLng: config.i18n_fallback_lang,
    supportedLngs: config.i18n_langs,
    ns: [
      "errors",
      "formik",
      "common"
    ],
    defaultNS: "common",
    nsSeparator: false,
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    }
  });

export const i18n = createI18nStore(i18next);