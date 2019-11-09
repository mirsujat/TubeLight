import React, { useState, useEffect } from "react";

import Context from "./Context";
import {
  addItem,
  removeItem,
  filterItem,
  getItemsCount,
  getTotalPrice
} from "./utils";

const CentextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleCartOpen = () => setCartOpen(!cartOpen);
  const addItemToCart = item => setCart(addItem(cart, item));
  const removeItemFromCart = item => setCart(removeItem(cart, item));
  const filterItemFromCart = item => setCart(filterItem(cart, item));

  useEffect(() => {
    setItemsCount(getItemsCount(cart));
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <Context.Provider
      value={{
        cart,
        cartOpen,
        toggleCartOpen,
        addItemToCart,
        removeItemFromCart,
        filterItemFromCart,
        itemsCount,
        totalPrice
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CentextProvider;
