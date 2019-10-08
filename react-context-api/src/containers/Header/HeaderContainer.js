import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import Header from "../../components/header/header.component";

const HeaderContainer = ({ currentUser, hidden }) => (
  <Header currentUser={currentUser} hidden={hidden}></Header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderContainer);
