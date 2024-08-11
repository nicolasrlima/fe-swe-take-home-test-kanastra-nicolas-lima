import { Button } from "@/components/button";
import { Layout } from "@/components/layout";
import { useCharacter } from "@/hooks/useCharacter";
import { getThumbnailUrl } from "@/utils/strings";
import { Fragment } from "react/jsx-runtime";
import type { CharacterProps } from "./character.types";

const Character = ({ characterId }: CharacterProps) => {
  const { character, isError, isLoading } = useCharacter(characterId);

  return (
    <Layout>
      <Button className="mb-4" variant="outline" onClick={() => history.back()}>
        Back
      </Button>
      {isLoading && !character && <p>Loading...</p>}
      {isError && <p>Error loading character</p>}
      {character && (
        <div className="flex flex-col gap-4">
          <img
            src={getThumbnailUrl(character.thumbnail)}
            alt={character.name}
            className="w-48 h-48 rounded-full"
          />
          <h1 className="text-xl font-bold">{character.name}</h1>
          <p>{character.description}</p>
          {character.comics.available > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Comics</h2>
              <ul className="border-slate-200 p-4 border-solid border-2 shadow-md rounded-lg w-fit">
                {character.comics.items.map((comic) => (
                  <Fragment key={comic.resourceURI}>
                    <li>{comic.name}</li>
                    <hr className="border-slate-200 mb-1" />
                  </Fragment>
                ))}
              </ul>
            </div>
          )}
          {character.series.available > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Series</h2>
              <ul className="border-slate-200 p-4 border-solid border-2 shadow-md rounded-lg w-fit">
                {character.series.items.map((serie) => (
                  <Fragment key={serie.resourceURI}>
                    <li>{serie.name}</li>
                    <hr className="border-slate-200 mb-1" />
                  </Fragment>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Character;
