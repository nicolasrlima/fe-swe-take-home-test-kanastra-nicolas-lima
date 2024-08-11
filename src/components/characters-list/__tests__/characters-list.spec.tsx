import type { Character } from "@/types/characters";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CharactersList } from "../characters-list";
import type { CharactersListProps } from "../characters-list.types";

const mockCharacters = [
  {
    id: 1,
    name: "Character One",
    description: "",
    modified: new Date(),
    thumbnail: {
      path: "mock",
      extension: "jpg",
    },
    resourceURI: "mock",
    comics: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    series: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    urls: [],
  },
  {
    id: 2,
    name: "Character Two",
    description: "",
    modified: new Date(),
    thumbnail: {
      path: "mock",
      extension: "jpg",
    },
    resourceURI: "mock",
    comics: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    series: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI: "mock",
      items: [],
      returned: 0,
    },
    urls: [],
  },
] satisfies Array<Character>;

const mockOnClickCharacter = vi.fn();

const renderComponent = (props: Partial<CharactersListProps> = {}) => {
  return render(
    <CharactersList
      characters={props.characters || mockCharacters}
      onClickCharacter={props.onClickCharacter || mockOnClickCharacter}
    />
  );
};

describe("CharactersList", () => {
  it("renders correctly with given characters", () => {
    renderComponent();
    expect(screen.getByText("Character One")).toBeInTheDocument();
    expect(screen.getByText("Character Two")).toBeInTheDocument();
  });

  it("calls onClickCharacter with the correct character when clicked", () => {
    renderComponent();
    const characterOne = screen.getByText("Character One");
    fireEvent.click(characterOne);
    expect(mockOnClickCharacter).toHaveBeenCalledWith(mockCharacters[0]);
  });
});
