import React, { Component } from "react";
import Toolbar from "../src/components/Toolbar/Toolbar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Toolbar />
        <AppDrawer />
        <Backdrop />
        <main style={{ marginTop: "65px" }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
