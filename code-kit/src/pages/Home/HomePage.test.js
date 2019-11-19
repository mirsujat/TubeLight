import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import axiosMock from "axios";
import HomePage from "./HomePage";

afterEach(cleanup);

describe("render HomePage Async axios request works", () => {
  test("test[1]: result attr", async () => {
    axiosMock.get.mockResolvedValue({
      data: { ip: { ip: "113.113.144.30", city: "comilla" } }
    });
    const url = "https://ip.nf/me.json";
    const { getByTestId } = render(<HomePage url={url} />);
    const resolvedEl = await waitForElement(() => getByTestId("result"));
    expect(resolvedEl).toBeTruthy();

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});

describe("render HomePage without error", () => {
  it("test[2]: ...Loading text", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText(/...Loading/i).textContent).toBe("...Loading");
  });
  it("test[3]: search-result attr", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("search-result")).toBeTruthy();
  });
  it("test[5]: homepage attr", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("homepage")).toBeTruthy();
  });
  it("test[4]: search-form attr", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("search-form")).toBeTruthy();
  });

  it("test[6]: ip attr", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("ip")).toBeTruthy();
  });
  it("test[6]: search-btn attr", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("search-btn")).toBeTruthy();
  });
});
