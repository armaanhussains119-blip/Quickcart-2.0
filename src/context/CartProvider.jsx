import React, { useState } from 'react';
import { CartContext } from './CartContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Provider component
export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('quickcart-cart', []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Implement addToCart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Implement removeFromCart function
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Implement updateQuantity function
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // Implement toggleCart function
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Implement getTotalItems function
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Implement getTotalPrice function
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Value object to provide to consumers
  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}