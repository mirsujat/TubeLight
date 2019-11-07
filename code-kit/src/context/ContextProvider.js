import React, { useState, useEffect } from "react";
import Context from "./Context";
import {
  addItem,
  removeItem,
  filterItem,
  getCartTotal,
  getItemsCount
} from "./utils";

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleModalOpen = () => setOpen(!open);
  const toggleCartOpen = () => setCartOpen(!cartOpen);
  const addItemToCart = item => setCart(addItem(cart, item));
  const removeItemFromCart = item => setCart(removeItem(cart, item));
  const filterItemFromCart = item => setCart(filterItem(cart, item));

  useEffect(() => {
    setItemsCount(getItemsCount(cart));
    setTotalPrice(getCartTotal(cart));
  }, [cart]);

  console.log("cart: ", cart);

  return (
    <Context.Provider
      value={{
        open,
        toggleModalOpen,
        cart,
        cartOpen,
        toggleCartOpen,
        itemsCount,
        addItemToCart,
        removeItemFromCart,
        filterItemFromCart,
        totalPrice
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
