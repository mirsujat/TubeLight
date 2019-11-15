import React from "react";
import { render, cleanup } from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);

describe("render Input component without error", () => {
  test("form-control", () => {
    const { getByTestId } = render(<Input></Input>);
    expect(getByTestId("form-control")).toBeTruthy();
  });
});
