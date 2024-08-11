import Character from "@/pages/character/character";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/characters/$characterId")({
  component: () => {
    const params = Route.useParams();

    return <Character {...params} />;
  },
});
