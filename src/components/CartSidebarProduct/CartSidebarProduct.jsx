import {
  NumberInputRoot,
  NumberInputField,
} from "@/components/ui/number-input";
import { Trash2 } from "lucide-react";
import Image from "../Image/Image";
import styles from "./CartSidebarProduct.module.scss";
import CartContext from "@/context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartSidebarProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigateProduct = () => {
    navigate(`/product/${product.id}`);
    dispatch({ type: "closeCart" });
  };

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
      <div className={styles.details} onClick={handleNavigateProduct}>
        <Image src={product.images[0]} alt={product.name} />
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
      <NumberInputRoot
        defaultValue={product.quantity}
        min={1}
        size="xs"
        onValueChange={(value) =>
          dispatch({
            type: "updateProduct",
            product: { ...product, quantity: value.valueAsNumber },
          })
        }
      >
        <NumberInputField />
      </NumberInputRoot>
    </div>
  );
};

export default CartSidebarProduct;
