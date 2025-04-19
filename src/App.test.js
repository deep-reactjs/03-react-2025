import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
  render(<App />);
  const HomeNavLink = screen.getByText(/Home/i);
  expect(HomeNavLink).toBeInTheDocument();
});
