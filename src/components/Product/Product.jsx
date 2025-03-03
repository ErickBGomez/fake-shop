import Image from "../Image/Image";
import styles from "./Product.module.scss";

const Product = ({ image, title, rating, price, discount = 0 }) => {
  return (
    <div className={styles.product}>
      <Image src={image} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.rating}>{rating} stars</div>
      <div className={styles.price}>
        <span className={styles.discount}>${price}</span>
        {discount && <span className={styles.originalPrice}>-{discount}%</span>}
      </div>
    </div>
  );
};

export default Product;
