import {
  NumberInputRoot,
  NumberInputField,
} from "@/components/ui/number-input";
import { Trash2 } from "lucide-react";
import Image from "../Image/Image";
import styles from "./CartSidebarProduct.module.scss";

const CartSidebarProduct = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.close}>
        <Trash2 />
      </div>
      <Image src={product.image} alt={product.name} />
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <NumberInputRoot defaultValue={product.quantity} min={1} size="xs">
        <NumberInputField />
      </NumberInputRoot>
    </div>
  );
};

export default CartSidebarProduct;
