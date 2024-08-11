import type { SeriesResponseData } from "@/types/series";
import useSWR from "swr";
import fetcher from "../libs/fetch";

export const DEFAULT_LIMIT = 20;
const DEFAULT_OFFSET = 0;

export function useSeries(page = 0, limit = DEFAULT_LIMIT, search?: string) {
  const offset = page * limit || DEFAULT_OFFSET;
  const { data, error, isLoading } = useSWR<SeriesResponseData>(
    `/public/series?limit=${limit}&offset=${offset}${
      search ? `&titleStartsWith=${search}` : ""
    }`,
    fetcher
  );

  return {
    series: data?.results,
    isLoading,
    isError: error,
  };
}
