import React, { Component } from "react";

import NavbarIcon from "./components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "./components/Navbar/NavbarIconText.jsx";
import NavbarNotification from "./components/Navbar/NavbarNotification.jsx";
import NavbarSearch from "./components/Navbar/NavbarSearch.jsx";
import InputDefaultDemo from "./components/InputDefault/InputDefaultDemo.jsx";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>React Custom Theme</h2>
        <div style={{ border: "1px solid red" }}>
          <InputDefaultDemo />
        </div>
        <NavbarNotification />
        <NavbarIcon />
        <NavbarIconText />
        <NavbarSearch />
      </div>
    );
  }
}

export default App;
