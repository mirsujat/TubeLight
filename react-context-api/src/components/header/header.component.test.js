import React from "react";
import { shallow } from "enzyme";
import Header from "./header.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}></Header>);
  return component;
};

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      currentUser: {},
      hidden: false
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "header");
    expect(component.length).toBe(1);
  });
});
