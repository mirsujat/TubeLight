import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Views
import Components from "./views/Components/Components.jsx";

//Latout Page
import Layout from "./HOC/Layout.jsx";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Components} />
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
