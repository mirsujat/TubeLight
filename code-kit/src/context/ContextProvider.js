import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = props => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);

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
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
