import { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "../reducer/cartReducer";

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    isOpen: false,
    products: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
