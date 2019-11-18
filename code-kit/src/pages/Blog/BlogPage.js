import React, { useState, useEffect, useContext } from "react";
import SHOP_DATA from "./ShopData";
import Context from "../../context/Context";

const BlogPage = () => {
  const { addItemToCart } = useContext(Context);
  const [collections, setCollections] = useState({});

  useEffect(() => {
    const collections = Object.keys(SHOP_DATA).map(key => SHOP_DATA[key]);
    setCollections(collections);
  }, []);

  let content = null;
  if (collections.length > 0) {
    content = collections.map(collection => {
      const { title, id, items } = collection;
      return (
        <div className="section" key={id} data-testid="product-section">
          <h1 className="section-title" data-testid="section-title">
            {title}
          </h1>
          <div className="collections" data-testid="collections">
            {items.map(item => {
              return (
                <div
                  className="collection"
                  key={item.id}
                  data-testid="collection"
                >
                  <div className="img">
                    <img src={item.imageUrl} alt="product" />
                  </div>
                  <div className="footer" data-testid="footer">
                    <span className="p-name">{item.name}</span>
                    <span className="p-price">${item.price}</span>
                  </div>
                  <div className="buy-now" data-testid="buy-now">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addItemToCart(item)}
                      data-testid="add-to-cart-btn"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }
  return (
    <div className="blog" data-testid="blog">
      {content}
    </div>
  );
};

export default BlogPage;
