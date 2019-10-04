import React from "react";
import { shallow } from "enzyme";
import CartIconComponent from "./cart-icon.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CartIconComponent {...props}></CartIconComponent>);
  return component;
};

describe("Main Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      toggleCartHidden: jest.fn(),
      itemCount: 2
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "cart-icon-component");
    expect(component.length).toBe(1);
  });
});
