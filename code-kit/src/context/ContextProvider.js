import React, { useState, useEffect } from "react";
import Context from "./Context";
import { addItem, incrementQuantity, decrementQuantity } from "./utils";

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleAuth = () => setAuth(!auth);
  const toggleModalOpen = () => setOpen(!open);
  const toggleCartOpen = () => setCartOpen(!cartOpen);
  const addItemToCart = item => setCart(addItem(cart, item));
  const handleIncrement = item => setCart(incrementQuantity(cart, item));
  const handleDecrement = item => setCart(decrementQuantity(cart, item));

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
        handleDecrement
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
