import React from "react";
import { shallow } from "enzyme";
import CheckoutItem from "./checkout-item.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CheckoutItem {...props}></CheckoutItem>);
  return component;
};

describe("CheckoutItem Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      cartItem: { name: "", imageUrl: "", price: 12, quantity: 0 },
      clearItem: jest.fn(),
      addItem: jest.fn(),
      removeItem: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "checkout-item");
    expect(component.length).toBe(1);
  });
});
