export const addItem = (cart, item) => {
  const itemExist = cart.find(cartItem => cartItem.id === item.id);
  if (itemExist) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

export const removeItem = (cart, item) => {
  const itemExist = cart.find(cartItem => cartItem.id === item.id);
  if (itemExist.quantity === 1) {
    return cart.filter(cartItem => cartItem.id !== item.id);
  }
  return cart.map(cartItem =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const filterItem = (cart, item) => {
  return cart.filter(cartItem => cartItem.id !== item.id);
};

export const getCartTotal = cart => {
  return cart.reduce((totalPrice, cartItem) => {
    return totalPrice + cartItem.quantity * cartItem.price;
  }, 0);
};

export const getItemsCount = cart => {
  return cart.reduce((itemsCount, cartItem) => {
    return itemsCount + cartItem.quantity;
  }, 0);
};
