import type React from "react";
import { Button } from "../button";

export type PaginationButtonProps = Omit<
  React.ComponentProps<"button">,
  "className"
>;

export const PaginationButton = (props: PaginationButtonProps) => {
  return <Button {...props} />;
};
