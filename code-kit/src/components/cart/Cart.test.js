import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import ContextProvider from "../../context/ContextProvider";
import Cart from "./Cart";

afterEach(cleanup);

test("cart component", () => {
  const { getByTestId } = render(
    <ContextProvider>
      <Cart></Cart>
    </ContextProvider>
  );

  expect(getByTestId("cart-container")).toBeTruthy();
});
