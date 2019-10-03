import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CustomButton {...props}></CustomButton>);
  return component;
};

describe("Custom Button Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    const wrapper = findByDataAttr(component, "custom-button");
    expect(wrapper.length).toBe(1);
  });
});
