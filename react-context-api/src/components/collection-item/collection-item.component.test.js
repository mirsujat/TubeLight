import React from "react";
import { shallow } from "enzyme";
import CollectionItem from "./collection-item.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CollectionItem {...props}></CollectionItem>);
  return component;
};

describe("CollectionItem Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      item: { name: "", price: 1, imageUrl: "" },
      addItem: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "collection-item");
    expect(component.length).toBe(1);
  });
});
