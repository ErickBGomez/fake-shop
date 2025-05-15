import { ShoppingCart } from "lucide-react";
import CartContext from "@/context/CartContext";
import { useContext, useEffect } from "react";
import styles from "./HeaderCartButton.module.scss";
import { IconButton } from "@chakra-ui/react";
import { useAnimate } from "motion/react";

const HeaderCartButton = () => {
  const { state, dispatch } = useContext(CartContext);
  const [sizeScope, animate] = useAnimate();

  // TODO: Play this animation 3 times only when cart size is changed
  useEffect(() => {
    animate(
      sizeScope.current,
      {
        boxShadow: [
          "0px 0px 0px 0px #3c908940",
          "0px 0px 0px 8px #3c908940",
          "0px 0px 0px 10px #3c908900",
        ],
      },
      { duration: 1, ease: "linear" }
    );
  }, [animate, sizeScope]);

  return (
    <IconButton
      variant="ghost"
      size="md"
      className={styles.cart}
      onClick={() => dispatch({ type: "openCart" })}
    >
      <ShoppingCart />
      {state?.products?.length > 0 && (
        <span ref={sizeScope} className={styles.size}>
          {state.products.length}
        </span>
      )}
    </IconButton>
  );
};

export default HeaderCartButton;
