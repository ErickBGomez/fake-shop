import { ShoppingCart } from "lucide-react";
import CartContext from "@/context/CartContext";
import { useContext } from "react";
import styles from "./HeaderCartButton.module.scss";
import { IconButton } from "@chakra-ui/react";

const HeaderCartButton = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <IconButton
      variant="ghost"
      size="md"
      className={styles.cart}
      onClick={() => dispatch({ type: "openCart" })}
    >
      <ShoppingCart />
      {state?.products?.length > 0 && (
        <span className={styles.size}>{state.products.length}</span>
      )}
    </IconButton>
  );
};

export default HeaderCartButton;
