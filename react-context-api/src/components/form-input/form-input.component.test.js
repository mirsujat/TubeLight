import React from "react";
import { shallow } from "enzyme";
import FormInput from "./form-input.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<FormInput {...props}></FormInput>);
  return component;
};

describe("FormInput Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      handleChange: jest.fn(),
      label: true,
      value: { length: 1 }
    };

    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "form-input");
    expect(component.length).toBe(1);
  });
});
