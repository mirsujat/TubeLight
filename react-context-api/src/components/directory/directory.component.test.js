import React from "react";
import { shallow } from "enzyme";
import DirectoryComponent from "./directory.component";
import { findByDataAttr } from "../../utils/utils";

const setUp = (props = {}) => {
  const component = shallow(
    <DirectoryComponent {...props}></DirectoryComponent>
  );
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
    const component = findByDataAttr(wrapper, "directory-component");
    expect(component.length).toBe(1);
  });
});
