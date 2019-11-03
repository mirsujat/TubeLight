export const addItem = (cart, itemToAdd) => {
  const cartItemExist = cart.find(cartItem => cartItem.id === itemToAdd.id);
  if (cartItemExist) {
    return cart.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...itemToAdd, quantity: 1 }];
};
