import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cartItems: [],
  addItem: (item) => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      console.log('Added to cart:', item); 
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
