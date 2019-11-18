import React from "react";
import { render, cleanup } from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);
describe("render Input Component without error", () => {
  it("test[1]: form-control", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("form-control")).toBeTruthy();
  });
  it("test[1]: child  Component", () => {
    const { getByText } = render(
      <Input>
        {" "}
        <p>test</p>
      </Input>
    );
    expect(getByText(/test/i).textContent).toBe("test");
  });
});
