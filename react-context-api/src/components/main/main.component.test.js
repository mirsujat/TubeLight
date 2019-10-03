import React from "react";
import { shallow } from "enzyme";
import MainComponent from "./main.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<MainComponent {...props}></MainComponent>);
  return component;
};

describe("Main Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      setCurrentUser: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "main-component");
    expect(component.length).toBe(1);
  });
});
