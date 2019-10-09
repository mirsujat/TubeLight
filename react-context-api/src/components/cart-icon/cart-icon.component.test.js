import React from "react";
import { shallow } from "enzyme";
import CartIcon from "./cart-icon.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CartIcon {...props}></CartIcon>);
  return component;
};

describe("CartIcon Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      itemCount: 0,
      toggleCartHidden: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "cart-icon");
    expect(component.length).toBe(1);
  });
});
