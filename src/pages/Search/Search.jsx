import ErrorPage from "../ErrorPage/ErrorPage";
import styles from "./Search.module.scss";

const Search = ({ query = "", result = [] }) => {
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
          result.map((product, index) => <div key={index}>{product}</div>)
        ) : (
          <ErrorPage variant="search-no-results" />
        )}
      </div>
    </div>
  );
};

export default Search;
