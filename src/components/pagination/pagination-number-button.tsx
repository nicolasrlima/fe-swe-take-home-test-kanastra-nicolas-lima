import { cn } from "@/libs/utils";
import type React from "react";
import { Button } from "../button";

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
    <Button
      className={cn(active && "font-bold")}
      variant="outline"
      {...props}
    />
  );
};
