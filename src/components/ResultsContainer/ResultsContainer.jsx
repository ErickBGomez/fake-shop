import { Button } from "@chakra-ui/react";
import Product from "../Product/Product";
import styles from "./ResultsContainer.module.scss";

const ResultsContainer = ({ results }) => {
  if (results.length === 0) return;

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.results}>
        {results.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            d
            discount={product.discount}
          />
        ))}
      </div>
      <Button colorPalette="brand">SHOW MORE</Button>
    </div>
  );
};

export default ResultsContainer;
