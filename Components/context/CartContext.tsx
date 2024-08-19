import React, { createContext, useState, ReactNode } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  detail: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
