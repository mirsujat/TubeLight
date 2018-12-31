import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Nav/Nav";
import App from "./App";
import Ecom from "./components/Ecom/Ecom";
import Register from "./components/Register/Register";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

const Root = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/ecom" exact component={Ecom} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
