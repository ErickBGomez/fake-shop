import image from "../../assets/candles.png";
import styles from "./SectionCard.module.scss";

// Variants: default, large, tall, wide
const SectionCard = ({
  title,
  img,
  variant = "default",
  gradientVariant = "orange",
}) => {
  return (
    <div
      className={`${styles.sectionCard} ${
        styles[variant] ? styles[variant] : " "
      } ${styles[gradientVariant]}`}
    >
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>Click to explore</div>
      </div>
      <div className={styles.img}>
        <img src={image} />
      </div>
    </div>
  );
};

export default SectionCard;
