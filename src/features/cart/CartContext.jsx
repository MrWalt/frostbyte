import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => []);

  function handleAddToCart(item) {
    setCart((cart) => [item, ...cart]);
  }

  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("Cart context was used outside of provider.");
  return context;
}

export { useCart, CartProvider };
