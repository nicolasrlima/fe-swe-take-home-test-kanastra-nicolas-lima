import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "../input";

const mockOnChange = vi.fn();

const renderComponent = (
  props: Partial<React.ComponentProps<"input">> = {}
) => {
  return render(
    <Input
      value={props.value || ""}
      onChange={props.onChange || mockOnChange}
      placeholder={props.placeholder || "Enter text"}
    />
  );
};

describe("Input", () => {
  it("renders correctly with given props", () => {
    renderComponent({ value: "test value" });
    expect(screen.getByDisplayValue("test value")).toBeInTheDocument();
  });

  it("renders placeholder text correctly", () => {
    renderComponent({ placeholder: "Custom placeholder" });
    expect(
      screen.getByPlaceholderText("Custom placeholder")
    ).toBeInTheDocument();
  });
});
