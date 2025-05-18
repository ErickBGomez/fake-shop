import { useNavigate } from "react-router-dom";
import image from "../../assets/categories/thumbnails/candles.png";
import styles from "./SectionCard.module.scss";

// Variants: default, large, tall, wide
const SectionCard = ({
  title,
  img,
  url,
  variant = "default",
  gradient = { start: "#ddb770", end: "#d9965b" },
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${url}`);
  };

  return (
    <div
      className={`${styles.sectionCard} ${
        styles[variant] ? styles[variant] : " "
      }`}
      style={{
        background: `linear-gradient(180deg,  ${gradient.start} 0%,  ${gradient.end} 100%)`,
      }}
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
