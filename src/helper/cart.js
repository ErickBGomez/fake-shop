export const addProduct = (products = [], newProduct = {}) => {
  const existingProduct = products.find(
    (product) => product.id === newProduct.id
  );

  // Add new product at the end of array if it does not exists in allProducts
  if (!existingProduct) return [...products, newProduct];

  const index = products.indexOf(existingProduct);

  // Add the previous quantity with the new one if the product already exists
  const updatedProduct = {
    ...existingProduct,
    quantity: existingProduct.quantity + newProduct.quantity,
  };

  const updatedProducts = products.map((product) =>
    product.id === newProduct.id ? updatedProduct : product
  );

  return updatedProducts;
};
