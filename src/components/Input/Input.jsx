import { Input as ChakraInput, Field } from "@chakra-ui/react";
import styles from "./Input.module.scss";

// Variant: default, with border, dark
const Input = ({ label = "", placeholder, variant }) => {
  return (
    <Field.Root>
      {label && <Field.Label className={styles.label}>{label}:</Field.Label>}
      <ChakraInput
        className={`${styles.input} ${styles[variant] ? styles[variant] : ""}`}
        placeholder={placeholder}
        size="lg"
        variant="subtle"
      />
    </Field.Root>
  );
};

export default Input;
