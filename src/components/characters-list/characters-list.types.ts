import type { Character } from "@/types/characters";

export type CharactersListProps = {
  characters?: Array<Character>;
  onClickCharacter?: (character: Character) => void;
};
