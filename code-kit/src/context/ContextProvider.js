import React, { useState, useEffect } from "react";
import Context from "./Context";
import { addItem } from "./utils";

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleAuth = () => setAuth(!auth);
  const toggleModalOpen = () => setOpen(!open);
  const toggleCartOpen = () => setCartOpen(!cartOpen);
  const addItemToCart = item => setCart(addItem(cart, item));
  console.log("cart: ", cart);

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
        addItemToCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
