import React from "react";

import "./AppDrawer.css";

const appDrawer = props => {
  return (
    <nav className="app-drawer">
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
