import React from "react";
import { render, cleanup } from "@testing-library/react";
import RegistrationPage from "./RegistrationPage";

afterEach(cleanup);
test("test[1]: render RegistrationPage without error", () => {
  const { getByTestId } = render(<RegistrationPage />);
  expect(getByTestId("reg-page")).toBeTruthy();
});
