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
        <h1 className="text-2xl font-bold mb-5">Marvel Characters</h1>
        <div className="flex flex-col gap-4">
          <CharactersList index={pageIndex} />

          <Pagination
            total={total}
            current={pageIndex + 1}
            onPrev={() => setPageIndex(pageIndex - 1)}
            onNext={() => setPageIndex(pageIndex + 1)}
            onChange={(page) => setPageIndex(page)}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
