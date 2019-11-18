import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../testutils/";
import Header from "./Header";

afterEach(cleanup);

describe("render Header Component without error", () => {
  it("test[1]: header", () => {
    const { getByTestId } = renderWithRouter(<Header />);
    expect(getByTestId("header")).toBeTruthy();
  });
  it("test[2]: nav", () => {
    const { getByTestId } = renderWithRouter(<Header />);
    expect(getByTestId("nav")).toBeTruthy();
  });
  it("test[2]: Home Text", () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText(/home/i).textContent).toBe("Home");
  });
});
