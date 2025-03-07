import { addProduct, updateProduct, removeProduct } from "../src/helper/cart";

describe("Helper functions", () => {
  describe("addProduct", () => {
    it("should add a product to the cart", () => {
      const allProducts = [
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ];
      const newProduct = { id: 3, title: "Product 3", quantity: 3 };

      const result = addProduct(allProducts, newProduct);

      expect(result).toEqual([
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
        { id: 3, title: "Product 3", quantity: 3 },
      ]);
    });

    it("should update the quantity of the existing product", () => {
      const allProducts = [
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ];
      const newProduct = { id: 2, title: "Product 2", quantity: 3 };

      const result = addProduct(allProducts, newProduct);

      expect(result).toEqual([
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 5 },
      ]);
    });
  });

  describe("updateProduct", () => {
    it("should update the quantity of the existing product", () => {
      const allProducts = [
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ];
      const updatedProduct = { id: 2, title: "Product 2", quantity: 3 };

      const result = updateProduct(allProducts, updatedProduct);

      expect(result).toEqual([
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 3 },
      ]);
    });

    it("should return the same products if the product does not exist", () => {
      const allProducts = [
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ];
      const updatedProduct = { id: 3, title: "Product 3", quantity: 3 };

      const result = updateProduct(allProducts, updatedProduct);

      expect(result).toEqual([
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ]);
    });
  });

  describe("removeProduct", () => {
    it("should remove the product from the cart", () => {
      const allProducts = [
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ];
      const productId = 2;

      const result = removeProduct(allProducts, productId);

      expect(result).toEqual([{ id: 1, title: "Product 1", quantity: 1 }]);
    });

    it("should return the same products if the product does not exist", () => {
      const allProducts = [
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ];
      const productId = 3;

      const result = removeProduct(allProducts, productId);

      expect(result).toEqual([
        { id: 1, title: "Product 1", quantity: 1 },
        { id: 2, title: "Product 2", quantity: 2 },
      ]);
    });
  });
});
