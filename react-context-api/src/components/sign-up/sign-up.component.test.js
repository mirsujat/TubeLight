import React from "react";
import { shallow } from "enzyme";
import SignUp from "./sign-up.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<SignUp {...props}></SignUp>);
  return component;
};

describe("SingUp Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "sign-up");
    expect(component.length).toBe(1);
  });
});
