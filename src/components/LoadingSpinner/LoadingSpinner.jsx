import { Spinner } from "@chakra-ui/react";
import styles from "./LoadingSpinner.module.scss";

// Force centered: Add padding when is added in a container without flex set
const LoadingSpinner = ({ forceCentered = false }) => {
  return (
    <div
      className={`${styles.loading}${
        forceCentered ? ` ${styles.forceCentered}` : ""
      }`}
    >
      <Spinner color="brand.100" borderWidth="4px" size="lg" />
    </div>
  );
};

export default LoadingSpinner;
