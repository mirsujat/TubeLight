import React from "react";
import "./ToggleButton.css";

const toggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <i class="material-icons">dehaze</i>
  </button>
);

export default toggleButton;
