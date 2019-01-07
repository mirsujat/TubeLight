import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import IpAddress from "./components/IpAddress/IpAddress";
import Ecom from "./components/Ecom/Ecom";
import Register from "./components/Register/Register";
class App extends Component {
  state = {};
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={IpAddress} />
        <Route path="/ecom" exact component={Ecom} />
        <Route path="/register" exact component={Register} />
      </Switch>
    );
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
