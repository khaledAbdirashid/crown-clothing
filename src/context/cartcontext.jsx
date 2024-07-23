import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isDropDownOpen: false,
  setIsDropDownOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

// helper methods
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToAdd.id
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

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

// cart context provider
export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (accummulator, currentValue) =>
        accummulator + currentValue.price * currentValue.quantity,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);
  const value = {
    cartItems,
    cartCount,
    isDropDownOpen,
    setIsDropDownOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};
