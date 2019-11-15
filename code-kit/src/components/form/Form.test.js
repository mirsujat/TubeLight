import React from "react";
import { render, cleanup } from "@testing-library/react";
import Form from "./Form";

afterEach(cleanup);

describe("render Form Component without error", () => {
  test("Form", () => {
    const { getByTestId } = render(<Form></Form>);
    expect(getByTestId("form-group")).toBeTruthy();
  });
  test("username field", () => {
    const { getByTestId } = render(<Form></Form>);
    expect(getByTestId("username")).toBeTruthy();
  });
  test("email field", () => {
    const { getByTestId } = render(<Form></Form>);
    expect(getByTestId("email")).toBeTruthy();
  });
  test("password field", () => {
    const { getByTestId } = render(<Form></Form>);
    expect(getByTestId("password")).toBeTruthy();
  });
  test("confirm password field", () => {
    const { getByTestId } = render(<Form></Form>);
    expect(getByTestId("confirmPassword")).toBeTruthy();
  });
  test("submit button", () => {
    const { getByText } = render(<Form></Form>);
    expect(getByText(/submit/i).textContent).toBe("submit");
  });
});
