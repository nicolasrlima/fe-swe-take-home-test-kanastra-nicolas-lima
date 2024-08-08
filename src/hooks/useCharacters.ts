import useSWR from "swr";
import fetcher from "../libs/fetch";

export function useCharacters() {
  const { data, error, isLoading } = useSWR("/public/characters", fetcher);

  return {
    characters: data,
    isLoading,
    isError: error,
  };
}
