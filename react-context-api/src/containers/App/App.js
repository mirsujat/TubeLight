import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import { setCurrentUser } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import MainComponent from "../../components/main/main.component";

class App extends React.Component {
  render() {
    return <MainComponent {...this.props}></MainComponent>;
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
