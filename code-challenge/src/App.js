import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Ecom from "./components/Ecom/Ecom";

class App extends Component {
  state = {};
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Ecom} />
      </Switch>
    );
    return <div>{routes}</div>;
  }
}

export default App;
