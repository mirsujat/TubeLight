import React from "react";
import { render, cleanup } from "@testing-library/react";
import Modal from "./Modal";

afterEach(cleanup);
describe("render Modal without error", () => {
  const props = {
    open: true
  };
  it("test[1]: modal-wrapper", () => {
    const { getByTestId } = render(<Modal {...props} />);
    expect(getByTestId("modal-wrapper")).toBeTruthy();
  });
  it("test[2]: modal", () => {
    const { getByTestId } = render(<Modal {...props} />);
    expect(getByTestId("modal")).toBeTruthy();
  });
  it("test[3]: child component", () => {
    const { getByText } = render(
      <Modal {...props}>
        {" "}
        <p>test</p>{" "}
      </Modal>
    );
    expect(getByText(/test/i).textContent).toBe("test");
  });
});
