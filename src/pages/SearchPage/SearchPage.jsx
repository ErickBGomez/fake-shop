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

  return (
    <div className={styles.searchContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Search results</h1>
        <p>Showing articles found for "{query}".</p>
      </div>
      <div className={styles.content}>
        <ResultsContainer
          fetchPath={`products/search`}
          queries={`q=${query}`}
        />
      </div>
    </div>
  );
};

export default SearchPage;
