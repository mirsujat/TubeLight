import React, { useState, useEffect } from "react";

import Context from "./Context";
import {
  addItem,
  removeItem,
  filterItem,
  getItemsCount,
  getTotalPrice
} from "./utils";

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleCartOpen = () => setCartOpen(!cartOpen);
  const addItemToCart = item => setCart(addItem(cart, item));
  const removeItemFromCart = item => setCart(removeItem(cart, item));
  const filterItemFromCart = item => setCart(filterItem(cart, item));
  const toggleModalOpen = () => setOpen(!open);

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
        totalPrice,
        open,
        toggleModalOpen
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
