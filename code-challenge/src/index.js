import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Navigation from "./components/navigation/Navigation";
import App from "./App";
import Posts from "./components/blog/posts/Posts";
import PostDetail from "./components/blog/postDetail/PostDetail";
import Registration from "./components/user/Registration";

import * as serviceWorker from "./serviceWorker";

const AppRoot = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<AppRoot />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
