import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "../reducer/cartReducer";

// Save and load products from local storage
const saveProducts = (products) => {
  localStorage.setItem("cartProducts", JSON.stringify(products));
};

const loadProducts = () => {
  const products = localStorage.getItem("cartProducts");
  return products ? JSON.parse(products) : [];
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    isOpen: false,
    products: loadProducts(),
  });

  useEffect(() => {
    saveProducts(state.products);
  }, [state.products]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
