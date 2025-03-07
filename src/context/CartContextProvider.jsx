import { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "../reducer/cartReducer";

const CartContextProvider = ({ children }) => {
  // TODO: Remove these temporal products later
  const products = [
    {
      id: 1,
      image: null,
      title: "Product 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      image: null,
      title: "Product 2",
      price: 150,
      quantity: 2,
    },
    {
      id: 3,
      image: null,
      title: "Product 3",
      price: 200,
      quantity: 1,
    },
    {
      id: 4,
      image: null,
      title: "Product 4",
      price: 250,
      quantity: 3,
    },
    {
      id: 5,
      image: null,
      title: "Product 5",
      price: 300,
      quantity: 1,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    isOpen: false,
    products,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
