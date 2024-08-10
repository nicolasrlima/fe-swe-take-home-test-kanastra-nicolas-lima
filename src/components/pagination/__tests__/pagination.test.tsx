import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Pagination, type PaginationProps } from "..";

const prevLabel = "Previous";
const nextLabel = "Next";

const makeSut = (props: Partial<PaginationProps> = {}) => {
  return render(<Pagination {...props} />);
};

describe("Pagination", () => {
  it("should be a nav", () => {
    const { container } = makeSut();

    expect(container.firstElementChild?.tagName).toBe("NAV");
  });

  it("should render previous and next buttons", () => {
    makeSut({ onPrev: vi.fn(), onNext: vi.fn() });

    expect(screen.getByRole("button", { name: prevLabel })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: nextLabel })).toBeInTheDocument();
  });

  it("should call onPrev and onNext when buttons are clicked", () => {
    const onPrev = vi.fn();
    const onNext = vi.fn();
    makeSut({ onPrev, onNext });

    screen.getByRole("button", { name: prevLabel }).click();
    screen.getByRole("button", { name: nextLabel }).click();

    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it("should render 1 2 3 4 9 when total is 9 and current less or equal to 3", () => {
    makeSut({ total: 9, current: 3 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  it("should render 1 6 7 8 9 when total is 9 and current is 7", () => {
    makeSut({ total: 9, current: 7 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  it("should render 1 '...' 3 4 5 6 7'...' 9 when total is 9 and current is 5", () => {
    makeSut({ total: 9, current: 5 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getAllByText("...").length).toBe(2);
  });

  it("should render 1 2 3 4 5 6 '...' 8 when total is 8 and current is 4", () => {
    makeSut({ total: 8, current: 4 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should render 1 '...' 3 4 5 6 7 8 when total is 8 and current is 5", () => {
    makeSut({ total: 8, current: 5 });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should call onChange when a number is clicked", () => {
    const onChange = vi.fn();
    makeSut({ total: 6, current: 4, onChange });

    screen.getByText("1").click();

    expect(onChange).toHaveBeenCalledWith(1);
  });
});
