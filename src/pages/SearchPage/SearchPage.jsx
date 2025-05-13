import { useNavigate, useSearchParams } from "react-router-dom";
import ResultsContainer from "../../components/ResultsContainer/ResultsContainer";
import ErrorPage from "../ErrorPage/ErrorPage";
import styles from "./SearchPage.module.scss";
import { useEffect } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) {
      navigate("/");
    }
  }, [navigate, query]);

  // Add loading state when redirecting to home
  if (!query) {
    return;
  }

  // const result = [];
  const results = [
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
          {results.length} articles found for "{query}".
        </p>
      </div>
      <div className={styles.content}>
        {results.length > 0 ? (
          <ResultsContainer results={results} />
        ) : (
          <ErrorPage variant="search-no-results" />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
