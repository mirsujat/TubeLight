import React, { Component } from "react";

import NavbarIcon from "./components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "./components/Navbar/NavbarIconText.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarIcon />
        <NavbarIconText />
        <h2>React Custom Theme</h2>
      </div>
    );
  }
}

export default App;
