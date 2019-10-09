import React from "react";
import { shallow } from "enzyme";
import Directory from "./directory.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<Directory {...props}></Directory>);
  return component;
};

describe("Directory Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      sections: []
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "directory-menu");
    expect(component.length).toBe(1);
  });
});
