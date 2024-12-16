// CartContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the product type
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

// Define the context shape
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  cartCount: number;  // Add cartCount property
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Typing the children prop correctly
interface CartProviderProps {
  children: ReactNode;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const cartCount = cart.length;  // Calculate the count of items in the cart

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
