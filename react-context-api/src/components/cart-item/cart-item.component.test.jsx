import React from "react";
import { shallow } from "enzyme";
import CartItem from "./cart-item.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CartItem {...props}></CartItem>);
  return component;
};

describe("Cart Item Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      item: {
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 33,
        name: "mir",
        quantity: 3
      }
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "cart-item");
    expect(component.length).toBe(1);
  });
});
