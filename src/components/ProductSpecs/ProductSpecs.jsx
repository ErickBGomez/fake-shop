import styles from "./ProductSpecs.module.scss";

const ProductSpecs = ({ icon, label, value, units }) => {
  return (
    <div className={styles.productSpecs}>
      <div className={styles.label}>
        {icon}
        <p>{label}</p>
      </div>
      <p>
        {value} {units}
      </p>
    </div>
  );
};

export default ProductSpecs;
