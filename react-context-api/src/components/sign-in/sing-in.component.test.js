import React from "react";
import { shallow } from "enzyme";
import SignIn from "./sign-in.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<SignIn {...props}></SignIn>);
  return component;
};

describe("SignIn Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "sign-in");
    expect(component.length).toBe(1);
  });
});
