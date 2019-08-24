import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collectionpage.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log("Mir: ", collection);
  return (
    <div className="collection-page">
      <h2>CATEGORY APGE</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
