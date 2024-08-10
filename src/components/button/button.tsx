import { cn, tv } from "@/libs/utils";
import type { ButtonProps } from "./button.types";

export const buttonVariants = tv({
  base: "px-4 py-2 rounded-md h-10 disabled:opacity-50 disabled:cursor-not-allowed",
  variants: {
    variant: {
      filled: "bg-blue-500 text-white",
      outline: "border-solid border-[1px] border-blue-500 text-blue-500",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export const Button = ({
  children,
  className,
  variant = "filled",
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  );
};
