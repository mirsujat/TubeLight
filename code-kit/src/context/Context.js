import { createContext } from "react";

const Context = createContext({
  open: false,
  toggleModalOpen: () => {},
  cartOpen: true,
  toggleCartOpen: () => {}
});

export default Context;
