import { createContext } from "react";

const Context = createContext({
  auth: false,
  open: false,
  toggleAuth: () => {},
  toggleModalOpen: () => {},
  cartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addItemToCart: () => {},
  handleIncrement: () => {},
  handleDecrement: () => {},
  removeItem: () => {}
});

export default Context;
