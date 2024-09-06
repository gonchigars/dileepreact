import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders total sales link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Total Sales/i);
  expect(linkElement).toBeInTheDocument();
});
