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

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default cartReducer;
