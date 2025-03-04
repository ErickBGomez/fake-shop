import { ChevronLeft, ChevronRight } from "lucide-react";
import Product from "../Product/Product";
import styles from "./ProductCarousel.module.scss";

const ProductCarousel = ({ products }) => {
  return (
    <div className={styles.productsCarousel}>
      <ChevronLeft />
      <div className={styles.products}>
        {products ? (
          products.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <p>No products...</p>
        )}
      </div>
      <ChevronRight />
    </div>
  );
};

export default ProductCarousel;
