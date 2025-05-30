import { useNavigate } from "react-router-dom";
import image from "../../assets/candles.png";
import styles from "./SectionCard.module.scss";

// Variants: default, large, tall, wide
const SectionCard = ({
  title,
  img,
  url,
  variant = "default",
  gradientVariant = "orange",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${url}`);
  };

  return (
    <div
      className={`${styles.sectionCard} ${
        styles[variant] ? styles[variant] : " "
      } ${styles[gradientVariant]}`}
      onClick={handleClick}
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
