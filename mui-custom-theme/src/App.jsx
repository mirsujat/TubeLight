import React, { Component } from "react";

import NavbarIcon from "./components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "./components/Navbar/NavbarIconText.jsx";
import NavbarNotification from "./components/Navbar/NavbarNotification.jsx";
import NavbarSearch from "./components/Navbar/NavbarSearch.jsx";
import InputDefaultDemo from "./components/Input/InputDefaultDemo.jsx";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>React Custom Theme</h2>
        <InputDefaultDemo />
        <NavbarIcon />
        <NavbarIconText />
        <NavbarNotification />
        <NavbarSearch />
      </div>
    );
  }
}

export default App;
