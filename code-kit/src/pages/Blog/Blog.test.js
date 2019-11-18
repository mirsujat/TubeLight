import React from "react";
import { render, cleanup } from "@testing-library/react";
import Blog from "./BlogPage";

afterEach(cleanup);
describe("render Blog without data", () => {
  it("test[1]: blog", () => {
    const { getByTestId } = render(<Blog />);
    expect(getByTestId("blog")).toBeTruthy();
  });
});

describe("render Blog with data", () => {
  const collections = [
    { id: 1, name: "test1", price: 12 },
    { id: 2, name: "test2", price: 10 }
  ];
  it("test[2]: product-section", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("product-section")).toBeTruthy();
  });
  it("test[3]: section-title", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("section-title")).toBeTruthy();
  });
  it("test[4]: collections", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("collections")).toBeTruthy();
  });
  it("test[5]: collection", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("collection")).toBeTruthy();
  });
  it("test[6]: footer", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("footer")).toBeTruthy();
  });
  it("test[7]: buy-now", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("buy-now")).toBeTruthy();
  });
  it("test[8]: add-to-cart-btn", () => {
    const { getAllByTestId } = render(<Blog {...collections} />);
    expect(getAllByTestId("add-to-cart-btn")).toBeTruthy();
  });
});
