import React, { useState } from "react";
import "./MultiSelect.css";

const MultiSelect = () => {
  const [showOption, setShowOption] = useState(false);

  const handleShowOption = () => {
    setShowOption(() => !showOption);
  };
  return (
    <div className="multi_selection">
      <div className="select_box" onClick={() => handleShowOption()}>
        <select>
          <option>Select Options</option>
        </select>
        <div className="over_select"></div>
      </div>
      <div
        className="checkboxes"
        style={{ display: showOption ? "block" : "none" }}
      >
        <label htmlFor="first">
          <input type="checkbox" id="first" /> Checkbox-1
        </label>
        <label htmlFor="second">
          <input type="checkbox" id="second" /> Checkbox-2
        </label>

        <label htmlFor="third">
          <input type="checkbox" id="third" /> Checkbox-3
        </label>
        <label htmlFor="fourth">
          <input type="checkbox" id="fourth" /> Checkbox-4
        </label>
        <label htmlFor="fifth">
          <input type="checkbox" id="fifth" /> Checkbox-5
        </label>
      </div>
    </div>
  );
};

export default MultiSelect;
