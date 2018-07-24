import React, { Component } from "react";
import Toolbar from "../src/components/Toolbar/Toolbar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    appDrawerOpen: false
  };

  appDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { appDrawerOpen: !prevState.appDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ appDrawerOpen: false });
  };
  render() {
    let appDrawer = null;
    let backdrop = null;
    if (this.state.appDrawerOpen) {
      appDrawer = <AppDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar appDrawerToggle={this.appDrawerToggleHandler} />
        {appDrawer}
        {backdrop}
        <main style={{ marginTop: "65px" }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
