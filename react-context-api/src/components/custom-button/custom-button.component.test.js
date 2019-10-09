import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CustomButton {...props}></CustomButton>);
  return component;
};

describe("CustomButton Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {};
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "custom-button");
    expect(component.length).toBe(1);
  });
});
