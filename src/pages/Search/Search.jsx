import Product from "../../components/Product/Product";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Button } from "@chakra-ui/react";
import styles from "./Search.module.scss";

const Search = ({ query = "" }) => {
  // const result = [];
  const result = [
    {
      id: 0,
      image: null,
      title: "Article 1",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 1,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 2,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 3,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 4,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 5,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 6,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 7,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
  ];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Search results</h1>
        <p>
          {result.length} articles found for "{query}"
        </p>
      </div>
      <div className={styles.content}>
        {result.length > 0 ? (
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
        ) : (
          <ErrorPage variant="search-no-results" />
        )}
      </div>
    </div>
  );
};

export default Search;
