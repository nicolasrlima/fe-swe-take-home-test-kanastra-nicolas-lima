import App from "@/pages/App";
import { createFileRoute } from "@tanstack/react-router";

type CharactersSearch = {
  page?: number;
  name?: string;
};

export const Route = createFileRoute("/characters/")({
  component: App,
  validateSearch: (search: Record<string, unknown>): CharactersSearch => {
    return {
      page: Number(search?.page ?? 1),
      name: search?.name ? String(search.name) : undefined,
    };
  },
});
