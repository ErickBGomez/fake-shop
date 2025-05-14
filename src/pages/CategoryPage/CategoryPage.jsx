import { useParams } from "react-router-dom";
import ResultsContainer from "../../components/ResultsContainer/ResultsContainer";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className={styles.categoryPage}>
      <div className={styles.titleContainer}>
        <p className={styles.subtitle}>Exploring the best of:</p>
        <h1 className={styles.title}>{category}</h1>
      </div>
      <div className={styles.content}>
        <ResultsContainer fetchPath={`products/category/${category}`} />
      </div>
    </div>
  );
};

export default CategoryPage;
