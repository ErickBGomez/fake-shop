import { useContext } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import CartContext from "../../context/CartContext";
import styles from "./CartSidebar.module.scss";

const CartSidebar = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleCloseSidebar = () => {
    dispatch({ type: "closeCart" });
  };

  return (
    <>
      {state?.isOpen && (
        <>
          <div className={styles.backdrop} onClick={handleCloseSidebar}></div>
          <div className={styles.sidebarCart}>
            <div className={styles.details}>
              <X onClick={handleCloseSidebar} />
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
