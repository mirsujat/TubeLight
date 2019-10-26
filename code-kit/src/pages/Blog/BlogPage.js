import React, { useState, useEffect } from "react";
import SHOP_DATA from "./ShopData";

const BlogPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = Object.keys(SHOP_DATA).map(key => SHOP_DATA[key]);
    setProducts(products);
  }, []);

  let content = null;
  if (products.length > 1) {
    content = products.map(item => {
      const { title, items } = item;
      return (
        <div className="item" key={item.id}>
          <h2 className="product-title">{title}</h2>
          <div className="collections">
            {items.map(collections => {
              const { id, name, imageUrl, price } = collections;
              return (
                <div className="collection" key={id}>
                  <div className="img">
                    <img src={imageUrl} alt="product_image" />
                  </div>
                  <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  }
  console.log("Data1", products);
  return <div className="blog">{content}</div>;
};

export default BlogPage;
