import Image from "../Image/Image";
import Rating from "../Rating/Rating";
import styles from "./Product.module.scss";

const Product = ({ image, title, rating, price, discount = 0 }) => {
  return (
    <div className={styles.product}>
      <Image src={image} alt={title} />
      <div>{title}</div>
      <div>
        <Rating defaultValue={rating} readOnly />
      </div>
      <div className={styles.priceContainer}>
        <span>${price}</span>
        {discount && <span className={styles.discount}>-{discount}%</span>}
      </div>
    </div>
  );
};

export default Product;
