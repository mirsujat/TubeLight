import CartActionTypes from "./cart.types";
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart
} from "./cart.actions";

it("should create an action to toggleCartHidden", () => {
  const expectedAction = {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
  expect(toggleCartHidden()).toEqual(expectedAction);
});
it("should create an action to addItem", () => {
  const item = { id: 2, title: "test 2" };
  const expectedAction = {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  };
  expect(addItem(item)).toEqual(expectedAction);
});
it("should create an action to removeItem", () => {
  const item = { id: 2, title: "test 2" };
  const expectedAction = {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  };
  expect(removeItem(item)).toEqual(expectedAction);
});
it("should create an action to clearItemFromCart", () => {
  const item = { id: 2, title: "test 2" };
  const expectedAction = {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  };
  expect(clearItemFromCart(item)).toEqual(expectedAction);
});
