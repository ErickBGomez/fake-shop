import { useContext } from "react";
import CartContext from "@/context/CartContext";
import { NumberInputField, NumberInputRoot } from "../ui/number-input";
import { Trash2 } from "lucide-react";
import Image from "../Image/Image";
import styles from "./CartPageProduct.module.scss";

const CartPageProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <div className={styles.details}>
        <Image src={product.images[0]} alt={product.name} />
        <p className={styles.title}>{product.title}</p>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.price}>${product.price}</p>
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
        <p>${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPageProduct;
