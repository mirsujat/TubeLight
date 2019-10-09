import React from "react";
import { shallow } from "enzyme";
import CartDropdownComponent from "./cart-dropdown.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(
    <CartDropdownComponent {...props}></CartDropdownComponent>
  );
  return component;
};

describe("CartDropdown Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      history: {},
      cartItems: [],
      toggleCartHidden: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "cart-dropdown-component");
    expect(component.length).toBe(1);
  });
});
