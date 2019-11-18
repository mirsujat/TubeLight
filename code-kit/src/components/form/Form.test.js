import React from "react";
import { render, cleanup } from "@testing-library/react";
import Form from "./Form";

afterEach(cleanup);
describe("render Form Comopnent without error", () => {
  it("test[1]: form-group", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("form-group")).toBeTruthy();
  });
  it("test[2]: username", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("username")).toBeTruthy();
  });
  it("test[3]: email", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("email")).toBeTruthy();
  });
  it("test[4]: password", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("password")).toBeTruthy();
  });
  it("test[5]: confirmPassword", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("confirmPassword")).toBeTruthy();
  });
  it("test[6]: submit text", () => {
    const { getByText } = render(<Form />);
    expect(getByText(/submit/i).textContent).toBe("submit");
  });
});
