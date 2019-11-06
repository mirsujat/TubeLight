import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/Home/HomePage";
import BlogPage from "./pages/Blog/BlogPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/blog" component={BlogPage}></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
