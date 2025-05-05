import { Input as ChakraInput, Field } from "@chakra-ui/react";
import styles from "./Input.module.scss";

// Variant: default, with border, dark
const Input = ({ label = "", placeholder, variant, ref, onBlur }) => {
  return (
    <Field.Root>
      {label && <Field.Label className={styles.label}>{label}:</Field.Label>}
      <ChakraInput
        className={`${styles.input} ${styles[variant] ? styles[variant] : ""}`}
        placeholder={placeholder}
        size="lg"
        variant="subtle"
        ref={ref}
        onBlur={onBlur}
      />
    </Field.Root>
  );
};

export default Input;
