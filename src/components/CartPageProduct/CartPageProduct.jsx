import { useContext } from "react";
import CartContext from "@/context/CartContext";
import { NumberInputField, NumberInputRoot } from "../ui/number-input";
import { Trash2 } from "lucide-react";
import Image from "../Image/Image";
import styles from "./CartPageProduct.module.scss";
import calculatePrice from "@/util/price";
import { useNavigate } from "react-router-dom";

const CartPageProduct = ({ product }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <div
        className={styles.details}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <Image src={product.images[0]} alt={product.name} />
        <div className={styles.titleAndBrand}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.brand}>{product.brand}</p>
        </div>
      </div>
      <div className={styles.quantity}>
        <NumberInputRoot
          defaultValue={product.quantity}
          min={1}
          size="xs"
          onValueChange={(value) =>
            dispatch({
              type: "updateProduct",
              product: {
                ...product,
                quantity: value.valueAsNumber,
              },
            })
          }
        >
          <NumberInputField />
        </NumberInputRoot>
        <div
          className={styles.remove}
          onClick={() => {
            dispatch({
              type: "removeProduct",
              productId: product.id,
            });
          }}
        >
          <Trash2 />
        </div>
      </div>
      <div className={styles.total}>
        <p>
          $
          {(
            calculatePrice(product.price, product.discountPercentage) *
            product.quantity
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartPageProduct;
