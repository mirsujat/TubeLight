import React from "react";
import { shallow } from "enzyme";
import CollectionItem from "./collection-item.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CollectionItem {...props}></CollectionItem>);
  return component;
};

describe("Collection Item Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      item: { id: 1, title: "test" },
      addItem: jest.fn()
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "collection-item");
    expect(component.length).toBe(1);
  });
});
