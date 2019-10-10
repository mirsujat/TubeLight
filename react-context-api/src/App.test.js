import React from "react";
import { shallow } from "enzyme";
import { findByDataAttr, testStore } from "./utils/utils";
import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store}></App>)
    .childAt(0)
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe("Render App Component Without Error", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      user: {},
      cart: [],
      directory: [],
      shop: []
    };
    wrapper = setUp(initialState);
  });
  it("Should render without errors", () => {
    const component = findByDataAttr(wrapper, "app");
    expect(component.length).toBe(1);
  });
  it("Should render App", () => {
    const component = wrapper;
    expect(component).toMatchSnapshot();
  });
});
