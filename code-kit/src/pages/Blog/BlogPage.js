import React, { useState, useEffect } from "react";
import SHOP_DATA from "./ShopData";

const BlogPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const products = Object.keys(SHOP_DATA).map(key => SHOP_DATA[key]);
    setCollections(products);
  }, []);

  console.log("Data: ", collections);

  let content = null;
  if (collections) {
    content = collections.map(collection => {
      const { id, title, items } = collection;
      return (
        <div className="container" key={id}>
          <h2 className="collections-title">{title}</h2>
          <div className="collections">
            {items.map(item => {
              const { id, name, price, imageUrl } = item;
              return (
                <div className="collection" key={id}>
                  <div className="img">
                    <img src={imageUrl} alt="product" />
                  </div>
                  <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
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
