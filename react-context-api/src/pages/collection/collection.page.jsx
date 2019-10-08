import React from "react";

import CollectionContainer from "../../containers/CollectionContainer/CollectionContainer";

import "./collection.styles.scss";

const CollectionPage = props => (
  <div className="collection-page">
    <CollectionContainer {...props}></CollectionContainer>
  </div>
);

export default CollectionPage;
