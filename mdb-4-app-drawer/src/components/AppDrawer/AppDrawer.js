import React, { Component } from "react";
import "./AppDrawer.css";

class AppDrawer extends Component {
  render() {
    let appDrawerStyleClasses = "app-drawer";

    if (this.props.show) {
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
  }
}

export default AppDrawer;
