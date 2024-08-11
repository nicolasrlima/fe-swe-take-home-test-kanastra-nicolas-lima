import { Button } from "@/components/button";
import { CharactersList } from "@/components/characters-list";
import { Input } from "@/components/input";
import { Layout } from "@/components/layout";
import { Pagination } from "@/components/pagination";
import { DEFAULT_LIMIT, useCharacters } from "@/hooks/useCharacters";
import { Route as CharactersRoute } from "@/routes/characters";
import type { Character, CharacterResponseData } from "@/types/characters";
import { useNavigate } from "@tanstack/react-router";
import { mutate } from "swr";

function App() {
  const navigate = useNavigate({
    from: CharactersRoute.fullPath,
  });
  const { page, name } = CharactersRoute.useSearch();
  const pageNumber = page ? page : 1;
  const { characters, isError, isLoading, pagesTotal } = useCharacters(
    pageNumber - 1,
    DEFAULT_LIMIT,
    name
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const name = formData.get("search") as string;
    navigate({
      search: {
        page: 1,
        name: name || undefined,
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

  const handlePageUpdate = (page: number) => {
    navigate({
      search: {
        page,
      },
    });
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-5">Marvel Characters</h1>
      <form className="flex flex-col gap-2 mb-3 w-fit" onSubmit={handleSearch}>
        <label htmlFor="search">Search by name:</label>
        <div className="flex gap-1">
          <Input
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
            Search
          </Button>
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
        <CharactersList
          characters={characters}
          onClickCharacter={handleCharacterClick}
        />

        <Pagination
          total={pagesTotal}
          current={page}
          onPrev={() => handlePageUpdate(pageNumber - 1)}
          onNext={() => handlePageUpdate(pageNumber + 1)}
          onChange={(page) => handlePageUpdate(page)}
        />
      </div>
    </Layout>
  );
}

export default App;
