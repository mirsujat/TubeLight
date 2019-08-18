import React from "react";

import "./collectionpreview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="prewview">
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
