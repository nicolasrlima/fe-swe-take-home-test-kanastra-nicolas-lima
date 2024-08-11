import type { CharacterResponseData } from "@/types/characters";
import useSWR from "swr";
import fetcher from "../libs/fetch";

export function useCharacter(characterId: string) {
  const { data, error, isLoading } = useSWR<CharacterResponseData>(
    `/public/characters/${characterId}`,
    fetcher
  );

  return {
    character: data?.results[0],
    isLoading,
    isError: error,
  };
}
