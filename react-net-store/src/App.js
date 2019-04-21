import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default/Default";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
