import { Spinner } from "@chakra-ui/react";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.loading}>
      <Spinner color="brand.100" borderWidth="4px" size="lg" />
    </div>
  );
};

export default LoadingSpinner;
