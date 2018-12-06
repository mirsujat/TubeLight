import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Posts from "./components/blog/Posts";
import Post from "./components/blog/Post";
import User from "./components/blog/User";
import Newpost from "./components/blog/Newpost";
import Search from "./components/search/Search";
import Login from "./components/user/Login";
import ValidationOnSubmit from "./components/form/ValidationOnSubmit";
import AsyncValidation from "./components/form/AsyncValidation";
import ValidateBeforeSubmit from "./components/form/ValidateBeforeSubmit";
import UserFriendlyValidation from "./components/UserFriendlyValidation/UserFriendlyValidation";
import Navigation from "./components/navigation/Navigation";
import * as serviceWorker from "./serviceWorker";

const app = (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/users" exact component={Posts} />
        <Route path="/users/:id" exact component={Post} />
        <Route path="/newuser" exact component={Newpost} />
        <Route path="/search" exact component={Search} />
        <Route
          path="/validation-on-submit"
          exact
          component={ValidationOnSubmit}
        />
        <Route path="/async-validation" exact component={AsyncValidation} />
        <Route
          path="/validate-before-submit"
          exact
          component={ValidateBeforeSubmit}
        />
        <Route
          path="/user-friendly-validation"
          exact
          component={UserFriendlyValidation}
        />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
