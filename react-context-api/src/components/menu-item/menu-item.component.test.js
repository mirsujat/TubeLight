import React from "react";
import { shallow } from "enzyme";
import MenuItemComponent from "./menu-item.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<MenuItemComponent {...props}></MenuItemComponent>);
  return component;
};

describe("Menu Item Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      title: "",
      imageUrl: "",
      size: "",
      history: {},
      linkUrl: "",
      match: {}
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "menu-item-component");
    expect(component.length).toBe(1);
  });
});
