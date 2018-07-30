import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
