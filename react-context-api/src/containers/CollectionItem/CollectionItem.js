import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";

const CollectionItem = () => (
  <CollectionItemComponent {...props}></CollectionItemComponent>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
