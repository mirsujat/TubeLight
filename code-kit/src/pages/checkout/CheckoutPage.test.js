import React from "react";
import { render, cleanup } from "@testing-library/react";
import CheckoutPage from "./CheckoutPage";
import ContextProviderDev from "../../context/ContextProvider.dev";

afterEach(cleanup);
describe("render checkout page", () => {
  it("test[1]: checkout-container", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-container")).toBeTruthy();
  });
  it("test[2]: checkout-header", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-header")).toBeTruthy();
  });
  it("test[3]: checkout-footer", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-footer")).toBeTruthy();
  });
  it("test[4]: checkout-btn", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-btn")).toBeTruthy();
  });
  it("test[5]: empty-cart", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("empty-cart")).toBeTruthy();
  });
});

describe("render correctly with context data", () => {
  it("test[6]: checkout-content", () => {
    const { findAllByTestId } = render(<CheckoutPage />);
    expect(findAllByTestId("checkout-content")).toBeTruthy();
  });
});
