import { useReducer, useState } from "react";
import CartContext from "./CartContext";
import cartReducer from "../reducer/CartReducer";

const CartContextProvider = ({ children }) => {
  // const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, { isOpen: false });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
