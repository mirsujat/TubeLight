import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import {
  act,
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";

import axiosMock from "axios";

afterEach(cleanup);
describe("axios request works", () => {
  test(" test:[1] Async axios request works", async () => {
    axiosMock.get.mockResolvedValue({
      data: { ip: { ip: "111.123.144.40", city: "Dhaka" } }
    });

    const url = "https://ip.nf/me.json";
    const { getByText, getByTestId, debug } = render(<HomePage url={url} />);

    expect(getByText(/...Loading/i).textContent).toBe("...Loading");

    const resolvedEl = await waitForElement(() => getByTestId("result"));

    expect(resolvedEl).toBeTruthy();

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});

describe("render HomePage without error", () => {
  it("test:[2] render homepage", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("homepage")).toBeTruthy();
  });
  it("test:[3] render search-form", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("search-form")).toBeTruthy();
  });
  it("test:[4]  render ip input field", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("ip")).toBeTruthy();
  });
  it("test:[5]  render search-btn", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("search-btn")).toBeTruthy();
  });
});
