import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionItemContainer = ({ item, addItem }) => (
  <CollectionItem item={item} addItem={addItem}></CollectionItem>
);
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItemContainer);
