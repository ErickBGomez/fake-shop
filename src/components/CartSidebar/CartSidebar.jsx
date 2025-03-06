import { useContext } from "react";
import CartContext from "@/context/CartContext";
import styles from "./CartSidebar.module.scss";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const { open } = useContext(CartContext);

  return (
    <>
      {open && (
        <div className={styles.sidebarCart}>
          <div className={styles.details}>
            <p>Subtotal</p>
            {/* TODO: Calculate subtotal here */}
            <p>$9.99</p>
            <Link to="/cart">View Cart</Link>
            <div className={styles.products}></div>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};

export default CartSidebar;
