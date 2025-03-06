import { useContext } from "react";
import CartContext from "@/context/CartContext";
import styles from "./CartSidebar.module.scss";

const CartSidebar = () => {
  const { open } = useContext(CartContext);

  return (
    <>
      {open && (
        <div className={styles.sidebarCart}>
          CartSidebar
          {console.log("cart mounted")}
        </div>
      )}
    </>
  );
};

export default CartSidebar;
