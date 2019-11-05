import React, { useState, useEffect } from "react";
import Context from "./Context";
import {
  addItem,
  incrementQuantity,
  decrementQuantity,
  getCartTotal,
  removeItem,
  getCartItemsCount
} from "./utils";

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const toggleAuth = () => setAuth(!auth);
  const toggleModalOpen = () => setOpen(!open);
  const toggleCartOpen = () => setCartOpen(!cartOpen);
  const addItemToCart = item => setCart(addItem(cart, item));
  const handleIncrement = item => setCart(incrementQuantity(cart, item));
  const handleDecrement = item => setCart(decrementQuantity(cart, item));
  const removeItemFromCart = item => setCart(removeItem(cart, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cart));
    setCartTotal(getCartTotal(cart));
  }, [cart]);

  console.log("Cart: ", cart);
  return (
    <Context.Provider
      value={{
        auth,
        open,
        toggleAuth,
        toggleModalOpen,
        cartOpen,
        toggleCartOpen,
        cart,
        addItemToCart,
        handleIncrement,
        handleDecrement,
        cartTotal,
        removeItemFromCart,
        cartItemsCount
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
