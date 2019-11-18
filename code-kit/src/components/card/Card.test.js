import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "./Card";

afterEach(cleanup);
test("render Card Component with child component", () => {
  const { getByText } = render(
    <Card>
      <div>Test</div>
    </Card>
  );
  expect(getByText(/Test/i).textContent).toBe("Test");
});
