import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Demo-1/Layout/Layout";
import Home from "./Demo-1/Pages/Home";
import Contact from "./Demo-1/Pages/Contact";
import ProductList from "./Demo-1/Pages/Ecom/Products/Products";

class App extends Component {
  state = {};
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={ProductList} />
      </Switch>
    );
    return <div className="app">{routes}</div>;
  }
}

export default App;
