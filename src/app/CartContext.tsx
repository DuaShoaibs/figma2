// CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

// Define types for products and cart context
type Product = { id: string; name: string; price: string; image: string };
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  cartCount: number;
};

// Type for the CartProvider props (to accept children)
type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const cartCount = cart.length; // Cart count based on the number of items

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
