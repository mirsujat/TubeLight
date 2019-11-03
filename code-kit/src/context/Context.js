import { createContext } from "react";

const Context = createContext({
  auth: false,
  open: false,
  toggleAuth: () => {},
  toggleModalOpen: () => {},
  cartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addItemToCart: () => {}
});

export default Context;
