import { cn } from "@/libs/utils";
import type { CharactersListProps } from "./characters-list.types";

export const CharactersList = (props: CharactersListProps) => {
  const { children, className, ...rest } = props;
  return (
    <ul className={cn("flex flex-col gap-2", className)} {...rest}>
      {children}
    </ul>
  );
};
