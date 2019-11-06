import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleModalOpen = () => setOpen(!open);
  const toggleCartOpen = () => setCartOpen(!cartOpen);
  return (
    <Context.Provider
      value={{
        open,
        toggleModalOpen,
        cartOpen,
        toggleCartOpen
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
