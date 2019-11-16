import React from "react";
import { render, cleanup } from "@testing-library/react";

import HomePage from "./HomePage";

afterEach(cleanup);
describe("render HomePage without error", () => {
  test("homepage div", () => {
    const { getByTestId, debug } = render(<HomePage></HomePage>);
    expect(getByTestId("homepage")).toBeTruthy();
    debug();
  });
  test("search form div", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("search-form")).toBeTruthy();
  });
  test("input field ip", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("ip")).toBeTruthy();
  });
  test("search-btn", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("search-btn")).toBeTruthy();
  });
});
