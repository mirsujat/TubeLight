import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../testutils/";
import ContextProviderDev from "../../context/ContextProvider.dev";
import Cart from "./Cart";

afterEach(cleanup);

describe("render cart without error", () => {
  it("test[1]: cart-container", () => {
    const { getByTestId } = renderWithRouter(<Cart />);
    expect(getByTestId("cart-container")).toBeTruthy();
  });
  it("test[2]: link-to-checkout-page", () => {
    const { getByTestId } = renderWithRouter(<Cart />);
    expect(getByTestId("link-to-checkout-page")).toBeTruthy();
  });
  it("test[3]: cart-btn", () => {
    const { getByTestId } = renderWithRouter(<Cart />);
    expect(getByTestId("cart-btn")).toBeTruthy();
  });
  it("test[4]: empty-cart", () => {
    const { getByTestId } = renderWithRouter(<Cart />);
    expect(getByTestId("empty-cart")).toBeTruthy();
  });
});

describe("render cart with context provider", () => {
  it("test[5]: cart-content", () => {
    const { getAllByTestId } = renderWithRouter(
      <ContextProviderDev>
        <Cart />
      </ContextProviderDev>
    );
    expect(getAllByTestId("cart-content")).toBeTruthy();
  });
  it("test[6]: cart-title", () => {
    const { getAllByTestId } = renderWithRouter(
      <ContextProviderDev>
        <Cart />
      </ContextProviderDev>
    );
    expect(getAllByTestId("cart-title")).toBeTruthy();
  });
  it("test[7]: image alt tag", () => {
    const { getAllByAltText } = renderWithRouter(
      <ContextProviderDev>
        <Cart />
      </ContextProviderDev>
    );
    expect(getAllByAltText("product")).toBeTruthy();
  });
});
