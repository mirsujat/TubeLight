import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItemComponent = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item" data-testid="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItemComponent;
