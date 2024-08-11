import { Button } from "@/components/button";
import { CharactersList } from "@/components/characters-list";
import { ComicsChart } from "@/components/comics-chart";
import type { ChartData } from "@/components/comics-chart/comics-chart.types";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout";
import { Pagination } from "@/components/pagination";
import { SeriesCombobox } from "@/components/series-combobox";
import { useCharacters } from "@/hooks/useCharacters";
import { Route as CharactersRoute } from "@/routes/characters";
import type { Character } from "@/types/characters";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { mutate } from "swr";

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate({
    from: CharactersRoute.fullPath,
  });
  const { page, name, series } = CharactersRoute.useSearch();
  const pageNumber = page ? page : 1;
  const { characters, isError, isLoading, pagesTotal } = useCharacters({
    page: pageNumber - 1,
    name,
    series,
  });

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const name = formData.get("search") as string;
    navigate({
      search: {
        name: name || undefined,
        page: 1,
        series,
      },
    });
  };

  const handleCharacterClick = (character: Character) => {
    mutate(`/public/characters/${character.id}`, {
      results: [character],
    });
    navigate({
      to: `/characters/${character.id}`,
    });
  };

  const handlePageUpdate = (newPage: number) => {
    navigate({
      search: {
        name,
        page: newPage,
        series,
      },
    });
  };

  const onSeriesSelect = (seriesId: number | null) => {
    navigate({
      search: {
        name,
        page: 1,
        series: seriesId ?? undefined,
      },
    });
  };

  const charactersComicsFormatted: Array<ChartData> | undefined =
    characters?.map((character) => ({
      id: character.name,
      value: character.comics.available,
    }));

  return (
    <Layout>
      <form className="flex flex-col gap-2 mb-3 w-fit" onSubmit={handleSearch}>
        <label htmlFor="search">{t("home.searchByName")}:</label>
        <div className="flex gap-1">
          <Input
            defaultValue={name}
            disabled={isLoading || isError}
            id="search"
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            name="search"
          />
          <Button
            disabled={isLoading || isError}
            type="submit"
            variant="outline"
          >
            {t("home.search")}
          </Button>
        </div>
      </form>
      <div className="flex flex-col mb-4 w-fit gap-1">
        <label htmlFor="series">{t("home.filterBySeries")}:</label>
        <SeriesCombobox onSelect={onSeriesSelect} />
      </div>

      <div className="flex flex-col gap-4">
        {charactersComicsFormatted && (
          <div className="h-96 w-96">
            <ComicsChart
              data={{
                id: "comics",
                children: charactersComicsFormatted,
              }}
            />
          </div>
        )}
        {isLoading && <p>{t("home.loading")}</p>}
        {isError && <p>{t("home.error")}</p>}
        <CharactersList
          characters={characters}
          onClickCharacter={handleCharacterClick}
        />

        {characters?.length && (
          <Pagination
            prevLabel={t("home.previous")}
            nextLabel={t("home.next")}
            total={pagesTotal}
            current={page}
            onPrev={() => handlePageUpdate(pageNumber - 1)}
            onNext={() => handlePageUpdate(pageNumber + 1)}
            onChange={(page) => handlePageUpdate(page)}
          />
        )}
      </div>
    </Layout>
  );
}

export default App;
