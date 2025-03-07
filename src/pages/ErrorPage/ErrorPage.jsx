import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

const setVariant = (variant) => {
  switch (variant) {
    case "page-not-found":
      return {
        title: "Sorry, we couldn't find that page!",
        description:
          "Try searching, or go to home to see all our amazing articles.",
      };

    case "search-no-results":
      return {
        title: "Oh no! We couldn't find that article!",
        description: "Please use another keywords and try again.",
      };

    case "product-not-found":
      return {
        title: "Sorry, we couldn't find that product!",
        description:
          "You can try searching for another product or go back to home.",
      };

    default:
      return {
        title: "An error occurred!",
        description: "Please try again later.",
      };
  }
};

const ErrorPage = ({ variant }) => {
  const { title, description } = setVariant(variant);

  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Link to="/">
          <Button colorPalette="brand">RETURN TO HOME</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
