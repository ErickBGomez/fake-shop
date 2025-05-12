import { addProduct, updateProduct, removeProduct } from "../util/cart";

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

    case "updateProduct": {
      return {
        ...state,
        products: updateProduct(state.products, action.product),
      };
    }

    case "removeProduct": {
      return {
        ...state,
        products: removeProduct(state.products, action.productId),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default cartReducer;
