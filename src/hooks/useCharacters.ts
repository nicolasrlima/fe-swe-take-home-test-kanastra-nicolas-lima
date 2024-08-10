import type { CharacterResponseData } from "@/types/characters";
import useSWR from "swr";
import fetcher from "../libs/fetch";

export const DEFAULT_LIMIT = 20;
const DEFAULT_OFFSET = 0;

export function useCharacters(
  page = 0,
  limit = DEFAULT_LIMIT,
  search?: string
) {
  const offset = page * limit || DEFAULT_OFFSET;
  const { data, error, isLoading } = useSWR<CharacterResponseData>(
    `/public/characters?limit=${limit}&offset=${offset}${
      search ? `&nameStartsWith=${search}` : ""
    }`,
    fetcher
  );

  const pagesTotal = data?.total ? Math.ceil(data.total / limit) : 0;

  return {
    characters: data?.results,
    isLoading,
    isError: error,
    total: data?.total,
    pagesTotal,
  };
}
