import React from "react";
import { cleanup } from "@testing-library/react";

import { renderWithRouter } from "../../testutils/";
import ContextProviderDev from "../../context/ContextProvider.dev";
import Cart from "./Cart";

afterEach(cleanup);

describe("render cart component without error", () => {
  test("cart-container", () => {
    const { getByTestId } = renderWithRouter(<Cart></Cart>);
    expect(getByTestId("cart-container")).toBeTruthy();
  });

  test("cart-btn", () => {
    const { getByTestId } = renderWithRouter(<Cart></Cart>);
    expect(getByTestId("cart-btn")).toBeTruthy();
  });

  test("checkout text", () => {
    const { getByText } = renderWithRouter(<Cart></Cart>);
    expect(getByText("checkout")).toBeTruthy();
  });

  test("empty cart", () => {
    const { getByTestId } = renderWithRouter(<Cart></Cart>);

    expect(getByTestId("empty-cart")).toBeTruthy();
  });

  test(" render with cart DATA ", () => {
    const { getAllByTestId } = renderWithRouter(
      <ContextProviderDev>
        <Cart></Cart>
      </ContextProviderDev>
    );

    expect(getAllByTestId("cart-content")).toBeTruthy();
  });

  test("Link to checkout page ", () => {
    const { getByTestId } = renderWithRouter(
      <ContextProviderDev>
        <Cart></Cart>
      </ContextProviderDev>
    );

    expect(getByTestId("link-to-checkout-page")).toBeTruthy();
  });
  test(" render with text", () => {
    const { getByText } = renderWithRouter(
      <ContextProviderDev>
        <Cart></Cart>
      </ContextProviderDev>
    );

    expect(getByText(/test1/i).textContent).toBe("test1");
  });
});
