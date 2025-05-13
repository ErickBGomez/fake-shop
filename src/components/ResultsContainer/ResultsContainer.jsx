import { Button } from "@chakra-ui/react";
import Product from "../Product/Product";
import styles from "./ResultsContainer.module.scss";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

// TODO: Remember scroll position when loading more products
const ResultsContainer = ({ query }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showMoreEnabled, setShowMoreEnabled] = useState(true);
  const { data, loading, error } = useFetch(
    `${query}?limit=8&skip=${currentPage * 8}`
  );
  const [results, setResults] = useState([]);

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Load more products when a fetch is successful
  // DummyJSON handles brings the result in products attribute
  useEffect(() => {
    if (data) {
      setResults((prevResults) => [...prevResults, ...data.products]);
    }
  }, [data]);

  // Disable the button when there are no more products to load
  // DummyJSON handles pagination with total attribute
  useEffect(() => {
    if (data) {
      if (results.length >= data.total) {
        setShowMoreEnabled(false);
      }
    }
  }, [data, results]);

  // TODO: Add loading state when redirecting to home
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.resultsContainer}>
      {results.length > 0 ? (
        <>
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
          {showMoreEnabled && (
            <Button colorPalette="brand" onClick={handleShowMore}>
              SHOW MORE
            </Button>
          )}
        </>
      ) : (
        <ErrorPage variant="search-no-results" />
      )}
    </div>
  );
};

export default ResultsContainer;
