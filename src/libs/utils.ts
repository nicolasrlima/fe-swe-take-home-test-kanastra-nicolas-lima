import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createTV } from "tailwind-variants";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export const tv = createTV({});
