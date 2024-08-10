import { CharactersList } from "./components/characters-list";
import { CharactersListItem } from "./components/characters-list-item";
import { useCharacters } from "./hooks/useCharacters";
import { getThumbnailUrl } from "./utils/strings";

function App() {
  const { isError, isLoading, characters } = useCharacters();

  return (
    <main>
      <section className="p-6">
        <h1 className="text-red-300">Marvel Characters</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
        {characters && <span>Characters loaded check console</span>}
        <CharactersList>
          {characters?.map((character) => (
            <CharactersListItem
              key={character.id}
              title={character.name}
              thumbnail={getThumbnailUrl(character.thumbnail)}
              comicsAvailable={character.comics.available}
              seriesAvailable={character.series.available}
              storiesAvailable={character.stories.available}
            />
          ))}
        </CharactersList>
      </section>
    </main>
  );
}

export default App;
