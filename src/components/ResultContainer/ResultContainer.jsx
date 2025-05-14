import { Button } from "@chakra-ui/react";
import Product from "../Product/Product";
import styles from "./ResultContainer.module.scss";

const ResultContainer = ({ result }) => {
  if (result.length === 0) return;

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.results}>
        {result.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
      <Button colorPalette="brand">SHOW MORE</Button>
    </div>
  );
};

export default ResultContainer;
