import {
  NumberInputRoot,
  NumberInputField,
} from "@/components/ui/number-input";
import { Trash2 } from "lucide-react";
import Image from "../Image/Image";
import styles from "./CartSidebarProduct.module.scss";
import CartContext from "@/context/CartContext";
import { useContext } from "react";

const CartSidebarProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <div
        className={styles.remove}
        onClick={() => {
          dispatch({ type: "removeProduct", productId: product.id });
        }}
      >
        <Trash2 />
      </div>
      <Image src={product.images[0]} alt={product.name} />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <NumberInputRoot defaultValue={product.quantity} min={1} size="xs">
        <NumberInputField />
      </NumberInputRoot>
    </div>
  );
};

export default CartSidebarProduct;
