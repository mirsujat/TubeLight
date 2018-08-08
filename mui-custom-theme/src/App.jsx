import React, { Component } from "react";

import NavbarIcon from "./components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "./components/Navbar/NavbarIconText.jsx";
import NavbarNotification from "./components/Navbar/NavbarNotification.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h2>React Custom Theme</h2>
        <NavbarIcon />
        <NavbarIconText />
        <NavbarNotification />
      </div>
    );
  }
}

export default App;
