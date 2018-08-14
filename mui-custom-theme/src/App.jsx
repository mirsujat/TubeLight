import React, { Component } from "react";

import NavbarIcon from "./components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "./components/Navbar/NavbarIconText.jsx";
import NavbarNotification from "./components/Navbar/NavbarNotification.jsx";
import NavbarSearch from "./components/Navbar/NavbarSearch.jsx";
import InputDefaultDemo from "./components/InputDefault/Demo.jsx";
import CustomInputDemo from "./components/Input/Demo.jsx";

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

        <NavbarNotification />
        <NavbarIcon />
        <NavbarIconText />
        <NavbarSearch />

        <div>
          <h3 style={{ paddingLeft: "15px", color: "#757575" }}>
            Input Component
          </h3>
          <InputDefaultDemo />
          <div style={{ padding: "15px", color: "#757575" }}>
            <h3 style={{ paddingLeft: "15px" }}>Inputs</h3>
            <CustomInputDemo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
