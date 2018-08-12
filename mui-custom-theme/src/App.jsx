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
        <h2 style={{ color: "#2e8eef" }}>React Custom Theme: Based on </h2>
        <h6> React @16.4.3 </h6>
        <h6> Materia-Ui @1.4.3 </h6>
        <h3 style={{ color: "#ccc" }}>
          15px padding set on Body. Remove The Body Padding or set it up what
          ever you like.{" "}
        </h3>
        <div style={{ backgroundColor: "#fff", border: "1px solid #e0dede" }}>
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
