import { addProduct } from "../helper/cart";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "openCart": {
      return {
        ...state,
        isOpen: true,
      };
    }

    case "closeCart": {
      return {
        ...state,
        isOpen: false,
      };
    }

    case "addProduct": {
      return {
        ...state,
        products: addProduct(state.products, action.product),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default cartReducer;
