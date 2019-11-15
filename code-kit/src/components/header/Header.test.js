import React from "react";
import { cleanup } from "@testing-library/react";

import { renderWithRouter } from "../../testutils/";
import ContextProviderDev from "../../context/ContextProvider.dev";
import Header from "./Header";

afterEach(cleanup);
describe("render header component without error", () => {
  test("header", () => {
    const { getByTestId } = renderWithRouter(<Header></Header>);
    expect(getByTestId("header")).toBeTruthy();
  });
  test("nav", () => {
    const { getByTestId } = renderWithRouter(<Header></Header>);
    expect(getByTestId("nav")).toBeTruthy();
  });
  test("nav-link Home", () => {
    const { getByText } = renderWithRouter(<Header></Header>);
    expect(getByText(/home/i).textContent).toBe("Home");
  });
  test("nav-link Blog", () => {
    const { getByText } = renderWithRouter(<Header></Header>);
    expect(getByText(/blog/i).textContent).toBe("Blog");
  });
});
