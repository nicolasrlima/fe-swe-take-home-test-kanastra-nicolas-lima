import useDebounce from "@/hooks/useDebounce";
import { DEFAULT_LIMIT, useSeries } from "@/hooks/useSeries";
import type { Series } from "@/types/series";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import type { SeriesComboboxProps } from "./series-combobox.types";

export const SeriesCombobox = ({ onSelect }: SeriesComboboxProps) => {
  const [query, setQuery] = useState("");
  const { debouncedValue: debouncedQuery } = useDebounce(query, 500);
  const {
    isError,
    isLoading,
    series: seriesList,
  } = useSeries(0, DEFAULT_LIMIT, debouncedQuery.toLowerCase());

  const handleComboboxChange = (value: Series | null) => {
    onSelect(value ? value.id : null);
  };

  return (
    <Combobox<Series>
      immediate
      onChange={(value) => handleComboboxChange(value)}
    >
      <ComboboxInput<Series>
        id="series"
        className="border border-gray-300 p-2 rounded-md"
        displayValue={(series) => series?.title}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ComboboxOptions anchor="bottom start" className="border empty:invisible">
        {isLoading && <p className="bg-white p-2 w-full">Loading...</p>}
        {isError && <p className="bg-white p-2 w-full">Error loading series</p>}
        {seriesList?.map((series) => (
          <ComboboxOption
            key={series.id}
            value={series}
            className="bg-white p-2 data-[focus]:bg-blue-100 cursor-pointer"
          >
            {series.title}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};
