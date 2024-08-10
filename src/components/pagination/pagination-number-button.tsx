import { cn } from "@/libs/utils";
import type React from "react";

export type PaginationButtonProps = Omit<
  React.ComponentProps<"button">,
  "className"
> & {
  active?: boolean;
};

export const PaginationNumberButton = ({
  active,
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      className={cn(
        "h-10 w-10",
        active
          ? "border-2 border-border-selected"
          : "border-2 border-transparent",
        active && "font-bold"
      )}
      {...props}
    />
  );
};
