import { render, screen } from "@testing-library/react";
import Survey from "./Survey";

test("Survey", () => {
  render(<Survey />);
  screen.getByText("Hello World");
});
