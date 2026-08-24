import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const getCartAmount = () => {
    return cart.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };
  return (
    <CartContext.Provider value={{ cart, setCart ,getCartAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;