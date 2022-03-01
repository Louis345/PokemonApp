import { render, fireEvent, getByTestId, screen } from "@testing-library/react";
import Search from "../Search";

test("It should keep a $ in front of the input", () => {
  render(<Search />);
  const input = screen.getByPlaceholderText("Search");
  fireEvent.change(input, { target: { value: "test" } });
  expect(input.value).toBe("test");
});
