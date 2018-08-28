import React, { Component } from "react";

import ButtonDemo from "./components/Button/Demo.jsx";
import Cards from "./components/Card/demo.jsx";
import NavbarIcon from "./components/Navbar/NavbarIcon.jsx";
import NavbarIconText from "./components/Navbar/NavbarIconText.jsx";
import NavbarNotification from "./components/Navbar/NavbarNotification.jsx";
import NavbarSearch from "./components/Navbar/NavbarSearch.jsx";
import InputDefaultDemo from "./components/InputDefault/Demo.jsx";
import CustomInputDemo from "./components/Input/Demo.jsx";
import CheckboxRadioSwitchDemo from "./components/CheckboxRadioSwitch/Demo.jsx";
import BadgeDemo from "./components/Badge/Demo.jsx";
import PaginationDemo from "./components/Pagination/Demo.jsx";
import TabsDemo from "./components/Tabs/Demo.jsx";
import NavPillsDemo from "./components/NavPills/Demo.jsx";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ paddingLeft: "15px", paddingRight: "25px" }}>
        <h2 style={{ color: "#2e8eef" }}>React Custom Theme: Based on </h2>
        <h6> React @16.4.3 </h6>
        <h6> Materia-Ui @1.4.3 </h6>
        <h3 style={{ color: "#ccc" }}>
          15px padding set on Body. Remove The Body Padding or set it up what
          ever you like.{" "}
        </h3>

        <ButtonDemo />
        <Cards />
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

        <CheckboxRadioSwitchDemo />
        <BadgeDemo />
        <PaginationDemo />
        <TabsDemo />
        <NavPillsDemo />
      </div>
    );
  }
}

export default App;
