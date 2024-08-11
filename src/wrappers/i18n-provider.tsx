import i18n from "i18next";
import { type ReactNode, useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";

import { labels } from "../locales/en";
import { labels as ptLabels } from "../locales/pt";

const setupI18n = () => {
  return i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: labels,
      },
      pt: {
        translation: ptLabels,
      },
    },
  });
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setupI18n().then(() => {
      setLoaded(true);
    });
  }, []);

  return loaded ? <>{children}</> : null;
};
