import { createContext } from "react";

const Context = createContext({
  cart: [],
  cartOpen: false,
  toggleCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  filterItemFromCart: () => {},
  itemsCount: 0,
  totalPrice: 0,
  open: false,
  toggleModalOpen: () => {}
});
export default Context;
