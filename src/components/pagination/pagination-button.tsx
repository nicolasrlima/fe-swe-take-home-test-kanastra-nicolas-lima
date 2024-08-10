import type React from "react";

export type PaginationButtonProps = Omit<
  React.ComponentProps<"button">,
  "className"
>;

export const PaginationButton = (props: PaginationButtonProps) => {
  return <button {...props} className="h-10 w-10" />;
};
