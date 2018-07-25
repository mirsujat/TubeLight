import React, { Component } from "react";
import Toolbar from "../src/components/Toolbar/Toolbar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import "./App.css";

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
    let backdrop = null;
    if (this.state.appDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let contentStyleClasses = "content";
    if (this.state.appDrawerOpen) {
      contentStyleClasses = "content content-right";
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar appDrawerToggle={this.appDrawerToggleHandler} />
        <AppDrawer show={this.state.appDrawerOpen} />
        {/* {backdrop} */}
        <main className={contentStyleClasses}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
