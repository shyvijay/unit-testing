import App from "../App";
import { render, screen } from "@testing-library/react";
test("renders logo in App component", () => {
  render(<App />);
  const image = screen.getByAltText("logo");
  //expect(image).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
