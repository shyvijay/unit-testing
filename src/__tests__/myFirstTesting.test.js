import App from "../App";
import { getAllByTestId, render, screen } from "@testing-library/react";
import List from "../components/List";
import userEvent from "@testing-library/user-event";

describe("App.js component", () => {
  test("renders logo in App component", () => {
    render(<App />);
    const image = screen.getByAltText("logo");
    expect(image).toBeInTheDocument();
  });

  test("render List.js component in App.js", () => {
    render(<App />);
    const textInListJs = screen.getByText(/This is a list/i);
    expect(textInListJs).toBeInTheDocument();
  });
});

describe("List.js component", () => {
  test("renderes initial state of listData state", () => {
    render(<List />);
    const list = screen.getAllByTestId("list-item");
    expect(list.length).toEqual(1);
  });

  test("adds a new data entry to listData after a button click", () => {
    render(<List />);
    const listItems = screen.getAllByTestId("list-item");
    const button = screen.getByRole("button", {
      name: /This button can add new entry to the list/i,
    });

    expect(listItems.length).toEqual(1);
    userEvent.click(button);
    const list = screen.getAllByTestId("list-item");
    expect(listItems.length).toEqual(2);
  });
});
