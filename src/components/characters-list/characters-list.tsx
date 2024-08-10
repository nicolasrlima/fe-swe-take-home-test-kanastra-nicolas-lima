import { CharactersListItem } from "@/components/characters-list-item";
import { getThumbnailUrl } from "@/utils/strings";
import type { CharactersListProps } from "./characters-list.types";

export const CharactersList = ({
  characters,
  onClickCharacter,
}: CharactersListProps) => {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center">
      {characters?.map((character) => (
        <CharactersListItem
          key={character.id}
          title={character.name}
          thumbnail={getThumbnailUrl(character.thumbnail)}
          onClick={() => onClickCharacter?.(character)}
        />
      ))}
    </div>
  );
};
