import React from "react";

import CollectionItemComponent from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview" data-testid="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        ? items
            .filter((item, idx) => idx < 4)
            .map(item => <CollectionItemComponent key={item.id} item={item} />)
        : null}
    </div>
  </div>
);

export default CollectionPreview;
