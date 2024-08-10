import { Button } from "@/components/button";
import { CharactersList } from "@/components/characters-list";
import { Pagination } from "@/components/pagination";
import { DEFAULT_LIMIT, useCharacters } from "@/hooks/useCharacters";
import { useState } from "react";
import { Input } from "./components/input";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [search, setSearch] = useState("");
  const { characters, isError, isLoading, pagesTotal } = useCharacters(
    pageIndex,
    DEFAULT_LIMIT,
    search
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const search = formData.get("search") as string;
    setSearch(search);
    setPageIndex(0);
  };

  return (
    <main>
      <section className="p-6">
        <h1 className="text-2xl font-bold mb-5">Marvel Characters</h1>
        <form className="flex flex-col gap-2 mb-3" onSubmit={handleSearch}>
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
            onClickCharacter={console.log}
          />

          <Pagination
            total={pagesTotal}
            current={pageIndex + 1}
            onPrev={() => setPageIndex(pageIndex - 1)}
            onNext={() => setPageIndex(pageIndex + 1)}
            onChange={(page) => setPageIndex(page - 1)}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
