import { createContext } from "react";

const Context = createContext({
  auth: false,
  open: false,
  toggleAuth: () => {},
  toggleModalOpen: () => {},
  cartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addItemToCart: item => {}
});

export default Context;
