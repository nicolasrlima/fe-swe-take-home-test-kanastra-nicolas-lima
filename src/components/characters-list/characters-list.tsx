import { CharactersListItem } from "@/components/characters-list-item";
import { DEFAULT_LIMIT, useCharacters } from "@/hooks/useCharacters";
import { getThumbnailUrl } from "@/utils/strings";
import type { CharactersListProps } from "./characters-list.types";

export const CharactersList = ({ characters }: CharactersListProps) => {
  return (
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
  );
};
