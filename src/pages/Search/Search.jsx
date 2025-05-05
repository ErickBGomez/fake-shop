import ResultContainer from "../../components/ResultContainer/ResultContainer";
import ErrorPage from "../ErrorPage/ErrorPage";
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
          {result.length} articles found for "{query}".
        </p>
      </div>
      <div className={styles.content}>
        {result.length > 0 ? (
          <ResultContainer result={result} />
        ) : (
          <ErrorPage variant="search-no-results" />
        )}
      </div>
    </div>
  );
};

export default Search;
