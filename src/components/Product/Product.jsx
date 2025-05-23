import { useNavigate } from "react-router-dom";
import Image from "../Image/Image";
import Rating from "../Rating/Rating";

import styles from "./Product.module.scss";

const Product = ({ id, image, title, rating, price, discount = 0 }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.product} onClick={() => navigate(`/product/${id}`)}>
      <Image src={image} alt={title} />
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
      </div>
      <div>
        <Rating defaultValue={rating} readOnly />
      </div>
      <div className={styles.priceContainer}>
        <span>${price}</span>
        {discount && (
          <span className={styles.discount}>-{discount.toFixed(0)}%</span>
        )}
      </div>
    </div>
  );
};

export default Product;
