import React from "react";

import CollectionItemContainer from "../../containers/CollectionItemContainer/CollectionItemContainer";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
