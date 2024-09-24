// src/Components/CartContext.js
import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, product];
    });
    toast.success("Item added to the cart!");
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    toast.error("Item removed from the cart!");
  };

  return (
    <>
    <ToastContainer/>
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
    </>
  );
};
