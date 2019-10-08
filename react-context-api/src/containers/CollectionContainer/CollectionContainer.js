import React, { Fragment } from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItemContainer from "../CollectionItemContainer/CollectionItemContainer";

// import "./collection.styles.scss";

const CollectionContainer = ({ collection }) => {
  const { title, items } = collection;
  return (
    <Fragment>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionContainer);
