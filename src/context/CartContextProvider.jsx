import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <CartContext.Provider value={{ open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
