import React, { Component, createRef } from "react";

import "./AppDrawer.css";

class AppDrawer extends Component {
  render() {
    let appDrawerClasses = "app-drawer";

    if (this.props.show) {
      appDrawerClasses = "app-drawer open";
    }

    return (
      <nav className={appDrawerClasses}>
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
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
