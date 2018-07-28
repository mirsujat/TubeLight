import React from "react";

import "./AppDrawerHeader.css";

const appDrawerHeader = props => (
  <div className="app-drawer-header" onClick={props.click} />
);

export default appDrawerHeader;
