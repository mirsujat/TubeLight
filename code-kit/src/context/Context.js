import { createContext } from "react";

const Context = createContext({
  auth: false,
  open: false,
  toggleAuth: () => {},
  toggleModalOpen: () => {},
  cartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  cartItemsCount: 0,
  addItemToCart: () => {},
  handleIncrement: () => {},
  handleDecrement: () => {},
  removeItem: () => {},
  handleCartItemCount: () => {},
  cartTotal: 0,
  removeItemFromCart: () => {},
  checkedout: () => {}
});

export default Context;
