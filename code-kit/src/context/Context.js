import { createContext } from "react";

const Context = createContext({
  open: false,
  toggleModalOpen: () => {},
  cartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  itemsCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  filterItemFromCart: () => {},
  totalPrice: 0
});

export default Context;
