import { fireEvent, render, screen } from "@testing-library/react";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { beforeEach, describe, expect, it } from "vitest";
import { Layout } from "../layout";

const renderComponent = (children: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <Layout>{children}</Layout>
    </I18nextProvider>
  );
};

describe("Layout", () => {
  beforeEach(() => {
    i18n.init({
      lng: "en",
      resources: {
        en: {
          translation: {
            home: {
              title: "Home Title",
            },
          },
        },
        pt: {
          translation: {
            home: {
              title: "Título da Página Inicial",
            },
          },
        },
      },
    });
  });

  it("renders correctly with given children", () => {
    renderComponent(<div>Test Child</div>);
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("renders translated title correctly", () => {
    renderComponent(<div>Test Child</div>);
    expect(screen.getByText("Home Title")).toBeInTheDocument();
  });

  it("changes language to English when EN button is clicked", () => {
    renderComponent(<div>Test Child</div>);
    const enButton = screen.getByText("EN 🇬🇧");
    fireEvent.click(enButton);
    expect(i18n.language).toBe("en");
    expect(screen.getByText("Home Title")).toBeInTheDocument();
  });

  it("changes language to Portuguese when PT button is clicked", () => {
    renderComponent(<div>Test Child</div>);
    const ptButton = screen.getByText("PT 🇧🇷");
    fireEvent.click(ptButton);
    expect(i18n.language).toBe("pt");
    expect(screen.getByText("Título da Página Inicial")).toBeInTheDocument();
  });
});
