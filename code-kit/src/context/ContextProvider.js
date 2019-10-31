import React, { useState, useEffect } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleAuth = () => setAuth(!auth);
  const toggleModalOpen = () => setOpen(!open);

  return (
    <Context.Provider
      value={{
        auth,
        open,
        toggleAuth,
        toggleModalOpen
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
