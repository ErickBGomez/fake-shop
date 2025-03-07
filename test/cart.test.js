import { addProduct } from "../src/helper/cart";

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
});
