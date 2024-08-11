import { Button } from "@/components/button";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export const Layout = ({ children }: React.PropsWithChildren) => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-5">{t("home.title")}</h1>
      <div className="flex gap-1 mb-5">
        <Button
          aria-checked={currentLanguage === "en"}
          role="radio"
          variant={currentLanguage === "en" ? "filled" : "outline"}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN 🇬🇧
        </Button>
        <Button
          aria-checked={currentLanguage === "pt"}
          role="radio"
          variant={currentLanguage === "pt" ? "filled" : "outline"}
          onClick={() => i18n.changeLanguage("pt")}
        >
          PT 🇧🇷
        </Button>
      </div>
      {children}
    </main>
  );
};
