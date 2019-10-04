import React from "react";
import { shallow } from "enzyme";
import HeaderComponent from "./header.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(<HeaderComponent {...props}></HeaderComponent>);
  return component;
};

describe("Main Component", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      currentUser: { id: 2, email: "test@gmail.com" },
      hidden: false
    };
    wrapper = setUp(props);
  });

  it("should render without error", () => {
    const component = findByDataAttr(wrapper, "header-component");
    expect(component.length).toBe(1);
  });
});
