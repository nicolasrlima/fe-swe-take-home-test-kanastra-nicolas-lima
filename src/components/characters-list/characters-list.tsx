import { CharactersListItem } from "@/components/characters-list-item";
import { useCharacters } from "@/hooks/useCharacters";
import { getThumbnailUrl } from "@/utils/strings";
import type { CharactersListProps } from "./characters-list.types";

export const CharactersList = ({ index }: CharactersListProps) => {
  const { isError, isLoading, characters } = useCharacters(index);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      {characters && <span>Characters loaded check console</span>}
      <ul className="flex flex-col gap-2">
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
      </ul>
    </>
  );
};
