import React, { useState, useEffect } from "react";
import SHOP_DATA from "./ShopData";

const BlogPage = () => {
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
        <div className="section" key={id}>
          <h1 className="section-title">{title}</h1>
          <div className="collections">
            {items.map(item => {
              return (
                <div className="collection" key={item.id}>
                  <div className="img">
                    <img src={item.imageUrl} alt="product" />
                  </div>
                  <div className="footer">
                    <span className="p-name">{item.name}</span>
                    <span className="p-price">${item.price}</span>
                  </div>
                  <div className="buy-now">
                    <button className="add-to-cart-btn">add to cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }
  return <div className="blog">{content}</div>;
};

export default BlogPage;
