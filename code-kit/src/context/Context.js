import { createContext } from "react";

const Context = createContext({
  open: false,
  toggleModalOpen: () => {},
  cartOpen: false,
  toggleCartOpen: () => {}
});

export default Context;
