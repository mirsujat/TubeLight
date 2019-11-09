export const addItem = (cart, itemToAdd) => {
  const itemExist = cart.find(cartItem => cartItem.id === itemToAdd.id);
  if (itemExist) {
    return cart.map(cartItem =>
      cartItem.id === itemExist.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cart, item) => {
  const itemExist = cart.find(cartItem => cartItem.id === item.id);
  if (itemExist.quantity === 1) {
    return cart.filter(cartItem => cartItem.id !== item.id);
  }
  return cart.map(cartItem =>
    cartItem.id === itemExist.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const filterItem = (cart, item) => {
  return cart.filter(cartItem => cartItem.id !== item.id);
};
export const getItemsCount = cart => {
  return cart.reduce((itemsCount, item) => itemsCount + item.quantity, 0);
};
export const getTotalPrice = cart => {
  return cart.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
};
