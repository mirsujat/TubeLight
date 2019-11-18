import React from "react";
import { render, cleanup } from "@testing-library/react";
import ContextProviderDev from "../../context/ContextProvider.dev";
import CheckoutPage from "./CheckoutPage";

afterEach(cleanup);

describe("render checkout page without cart DATA", () => {
  it("test[1]: empty-cart", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("empty-cart")).toBeTruthy();
  });
  it("test[2]: checkout-container", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-container")).toBeTruthy();
  });
  it("test[3]: checkout-header", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-header")).toBeTruthy();
  });
  it("test[4]: checkout-footer", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-footer")).toBeTruthy();
  });
  it("test[5]: checkout-btn", () => {
    const { getByTestId } = render(<CheckoutPage />);
    expect(getByTestId("checkout-btn")).toBeTruthy();
  });
});

describe("render checkout page with cart DATA", () => {
  it("test[6]: checkout-content", () => {
    const { getAllByTestId } = render(
      <ContextProviderDev>
        <CheckoutPage></CheckoutPage>
      </ContextProviderDev>
    );
    expect(getAllByTestId("checkout-content")).toBeTruthy();
  });
});
