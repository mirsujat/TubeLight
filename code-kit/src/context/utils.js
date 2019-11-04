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

export const incrementQuantity = (cart, item) => {
  const cartItemExist = cart.find(cartItem => cartItem.id === item.id);
  if (cartItemExist) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};
export const decrementQuantity = (cart, item) => {
  const existingCartItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingCartItem.quantity === 1) {
    return cart.filter(cartItem => cartItem.id !== item.id);
  }

  return cart.map(cartItem =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
