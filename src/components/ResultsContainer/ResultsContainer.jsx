import { Button } from "@chakra-ui/react";
import Product from "../Product/Product";
import styles from "./ResultsContainer.module.scss";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ResultsContainer = ({ fetchPath, queries = "" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showMoreEnabled, setShowMoreEnabled] = useState(true);

  // Use join.(&) to append optional queries in the fetch
  const { data, loading, error } = useFetch(
    fetchPath,
    [queries, `limit=8&skip=${currentPage * 8}`].join("&")
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

  // Reset the results when a new term is searched (specially for SearchPage)
  useEffect(() => {
    setResults([]);
    setCurrentPage(0);
    setShowMoreEnabled(true);
  }, [fetchPath, queries]);

  if (loading && !data) return <LoadingSpinner forceCentered />;
  // Show generic error page when there is an error with the fetch
  if (error) return <ErrorPage />;

  // If there are no products, show the error page
  if (!data.products.length) {
    return <ErrorPage variant="search-no-results" />;
  }

  if (data)
    return (
      <div className={styles.resultsContainer}>
        {results.length > 0 && (
          <>
            <div className={styles.results}>
              {results.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  image={product.images[0]}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  discount={product.discount}
                />
              ))}
            </div>
            {showMoreEnabled && (
              <Button
                colorPalette="brand"
                onClick={handleShowMore}
                loading={loading}
              >
                SHOW MORE
              </Button>
            )}
          </>
        )}
      </div>
    );

  if (!data) return null;
};

export default ResultsContainer;
