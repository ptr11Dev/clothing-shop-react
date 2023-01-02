import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartVisible: false,
  setIsCartVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
  currentCartCount: 0,
  setCurrentCartCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentCartCount, setCurrentCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCurrentCartCount((prevState) => prevState + 1);
  };

  const value = {
    isCartVisible,
    setIsCartVisible,
    cartItems,
    addItemToCart,
    currentCartCount,
    setCurrentCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
