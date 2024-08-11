import { cn } from "@/libs/utils";
import type React from "react";
import { Fragment } from "react";
import { PaginationButton } from "./pagination-button";
import { PaginationNumberButton } from "./pagination-number-button";

export type PaginationProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  "onChange"
> & {
  current?: number;
  prevLabel?: string;
  nextLabel?: string;
  total?: number;
  onChange?: (page: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
};

export const Pagination = ({
  children,
  className,
  current = 0,
  nextLabel = "Next",
  prevLabel = "Previous",
  total = 0,
  onChange,
  onNext,
  onPrev,
  ...props
}: PaginationProps) => {
  const ITEMS_COUNT = 7;
  const numbers = (() => {
    if (total <= ITEMS_COUNT) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= 3) {
      return [1, 2, 3, 4, total];
    }
    if (current >= total - 2) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [
      1,
      current - 2,
      current - 1,
      current,
      current + 1,
      current + 2,
      total,
    ];
  })();

  return (
    <nav
      className={cn(
        "w-full flex items-center box-border gap-6 justify-center",
        className
      )}
      {...props}
    >
      <PaginationButton
        name="Previous"
        onClick={() => onPrev?.()}
        disabled={!onPrev}
      >
        {prevLabel}
      </PaginationButton>
      <div className="gap-[1px] hidden sm:flex">
        {numbers.map((number, index) => (
          <Fragment key={`pagination-${number}-${total}`}>
            {total > ITEMS_COUNT &&
              number === total &&
              number - 1 !== numbers[index - 1] && (
                <span className="flex items-center justify-center h-10 w-11 text-sm">
                  ...
                </span>
              )}
            <PaginationNumberButton
              active={current === number}
              disabled={!onChange}
              onClick={() => onChange?.(number)}
            >
              {number}
            </PaginationNumberButton>
            {total > ITEMS_COUNT &&
              number === 1 &&
              number + 1 !== numbers[index + 1] && (
                <span className="flex items-center justify-center h-10 w-11 text-sm">
                  ...
                </span>
              )}
          </Fragment>
        ))}
      </div>
      <PaginationButton
        name="Next"
        onClick={() => onNext?.()}
        disabled={!onNext}
      >
        {nextLabel}
      </PaginationButton>
    </nav>
  );
};
