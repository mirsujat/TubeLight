import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Modal from "./Modal";

afterEach(cleanup);

test("display modal without error", () => {
  const props = { open: true };
  const { getByTestId } = render(<Modal {...props}></Modal>);
  expect(getByTestId("modal-wrapper")).toBeTruthy();
});
