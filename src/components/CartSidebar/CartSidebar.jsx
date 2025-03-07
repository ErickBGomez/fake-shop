import { useContext } from "react";
import CartContext from "@/context/CartContext";
import styles from "./CartSidebar.module.scss";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const { open, setOpen } = useContext(CartContext);

  return (
    <>
      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)}></div>
          <div className={styles.sidebarCart}>
            <div className={styles.details}>
              <p>Subtotal</p>
              {/* TODO: Calculate subtotal here */}
              <p>$9.99</p>
              <Link to="/cart">View Cart</Link>
            </div>
            <hr />
            <div className={styles.products}></div>
          </div>
        </>
      )}
    </>
  );
};

export default CartSidebar;
