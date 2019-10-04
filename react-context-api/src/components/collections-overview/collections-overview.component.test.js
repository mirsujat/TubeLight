import React from "react";
import { shallow } from "enzyme";
import CollectionOverview from "./collections-overview.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(
    <CollectionOverview {...props}></CollectionOverview>
  );
  return component;
};

describe("CollectionOverview Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      collections: [{ id: 1, title: "test1" }, { id: 3, title: "test2" }]
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "collections-overview");
    expect(component.length).toBe(1);
  });
});
