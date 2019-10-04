import React from "react";
import { shallow } from "enzyme";
import CollectionPreview from "./collection-preview.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<CollectionPreview {...props}></CollectionPreview>);
  return component;
};

describe("CollectionPreview Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      title: "test title",
      items: [{ id: 1, title: "test title1" }, { id: 2, title: "test title2" }]
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "collection-preview");
    expect(component.length).toBe(1);
  });
});
