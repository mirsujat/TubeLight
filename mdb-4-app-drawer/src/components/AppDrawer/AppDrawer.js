import React from "react";

import "./AppDrawer.css";

const appDrawer = props => {
  let appDrawerStyleClasses = "app-drawer";

  if (props.show) {
    appDrawerStyleClasses = "app-drawer open";
  }
  return (
    <nav className={appDrawerStyleClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default appDrawer;
