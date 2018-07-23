import React, { Component } from "react";
import Toolbar from "../src/components/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main style={{ marginTop: "65px" }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
