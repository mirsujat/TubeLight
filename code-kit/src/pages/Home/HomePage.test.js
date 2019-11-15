import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import axios from "axios";
import HomePage from "./HomePage";

afterEach(cleanup);
describe("render HomePage without error", () => {
  test("homepage div", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("homepage")).toBeTruthy();
  });
  test("search form div", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("search-form")).toBeTruthy();
  });
  test("input field ip", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("ip")).toBeTruthy();
  });
  test("search-btn", () => {
    const { getByTestId } = render(<HomePage></HomePage>);
    expect(getByTestId("search-btn")).toBeTruthy();
  });

  // test('Fetch makes an API call and displays the greeting', async () => {
  //   const fakeAxios = {
  //     get: jest.fn(() => Promise.resolve({ data: { greeting: 'hello there' } })),
  //   }
  //   const url = 'https://example.com/get-hello-there'
  //   const { getByText, getByTestId } = render(<Header url={url} axios={fakeAxios} />)
  //   fireEvent.click(getByText(/fetch/i))

  //   const greetingNode = await waitForElement(() => getByTestId('greeting'))

  //   expect(fakeAxios.get).toHaveBeenCalledTimes(1)
  //   expect(fakeAxios.get).toHaveBeenCalledWith(url)
  //   expect(greetingNode).toHaveTextContent('hello there')
  // })
});
