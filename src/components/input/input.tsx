import { cn } from "@/libs/utils";

export const Input = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      className={cn(
        "border border-gray-300 p-2 rounded-md disabled:opacity-50 disabled:bg-gray-200 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
};
