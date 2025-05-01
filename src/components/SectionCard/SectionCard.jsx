import image from "../../assets/candles.png";
import styles from "./SectionCard.module.scss";

const SectionCard = ({ title, img, gradientVariant = "orange" }) => {
  return (
    <div className={`${styles.sectionCard} ${styles[gradientVariant]}`}>
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
