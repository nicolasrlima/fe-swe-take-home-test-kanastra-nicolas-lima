import { CharactersList } from "@/components/characters-list";
import { useCharacters } from "@/hooks/useCharacters";
import { useState } from "react";
import { Pagination } from "./components/pagination";

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const { total } = useCharacters(pageIndex);

  return (
    <main>
      <section className="p-6">
        <h1 className="text-red-300">Marvel Characters</h1>
        <CharactersList index={pageIndex} />

        <Pagination
          total={total}
          current={pageIndex}
          onPrev={() => setPageIndex(pageIndex - 1)}
          onNext={() => setPageIndex(pageIndex + 1)}
          onChange={(page) => setPageIndex(page)}
        />
      </section>
    </main>
  );
}

export default App;
