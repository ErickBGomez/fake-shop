export const addProduct = (allProducts = [], newProduct = {}) => {
  const index = allProducts.indexOf((product) => product.id === newProduct.id);

  // Add new product at the end of array if it does not exists in allProducts
  if (index === -1) return [...allProducts, newProduct];

  const existingProduct = allProducts[index];

  // Add the previous quantity with the new one if the product already exists
  const b = {
    ...existingProduct,
    quantity: existingProduct.quantity + newProduct.quantity,
  };

  return allProducts.splice(index, 1, b);
};
