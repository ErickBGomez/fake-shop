import { ChevronLeft, ChevronRight } from "lucide-react";
import Product from "../Product/Product";
import styles from "./ProductCarousel.module.scss";

const ProductCarousel = ({ products }) => {
  return (
    <div className={styles.productsCarousel}>
      <div className={styles.arrow}>
        <ChevronLeft />
      </div>
      <div className={styles.products}>
        {products ? (
          products.map((product) => (
            <Product
              key={product.id}
              image={product.images[0]}
              title={product.title}
              rating={product.rating}
              price={product.price}
              discount={product.discountPercentage}
            />
          ))
        ) : (
          <p>No products...</p>
        )}
      </div>
      <div className={styles.arrow}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default ProductCarousel;
