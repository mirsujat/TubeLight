import React from "react";

import "./AppDrawerToggleButton.css";

const AppDrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default AppDrawerToggleButton;
