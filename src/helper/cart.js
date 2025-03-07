export const addProduct = (products = [], newProduct = {}) => {
  const existingProduct = products.find(
    (product) => product.id === newProduct.id
  );

  // Add new product at the end of array if it does not exists in allProducts
  if (!existingProduct) return [...products, newProduct];

  // Add the previous quantity with the new one if the product already exists
  const updatedProduct = {
    ...existingProduct,
    quantity: existingProduct.quantity + newProduct.quantity,
  };

  return products.map((product) =>
    product.id === newProduct.id ? updatedProduct : product
  );
};

export const updateProduct = (products = [], updatedProduct = {}) => {
  const existingProduct = products.find(
    (product) => product.id === updatedProduct.id
  );

  if (!existingProduct) return products;

  return products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
};

export const removeProduct = (products = [], productId) => {
  return products.filter((product) => product.id !== productId);
};
