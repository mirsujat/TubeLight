import React from "react";
import { Router, history } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

export const findByDataAttr = (component, attr) => {
  const wrapper = component.find(`[data-testid='${attr}']`);
  return wrapper;
};

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
};
