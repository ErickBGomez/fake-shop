import { useParams } from "react-router-dom";
import ResultsContainer from "../../components/ResultsContainer/ResultsContainer";
import ErrorPage from "../ErrorPage/ErrorPage";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const { category } = useParams();
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
    <div className={styles.categoryPage}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{category}</h1>
      </div>
      <div className={styles.content}>
        {results.length > 0 ? (
          <ResultsContainer results={results} />
        ) : (
          <ErrorPage variant="page-not-found" />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
