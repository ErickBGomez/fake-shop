import { useContext } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import CartContext from "../../context/CartContext";
import CartSidebarProduct from "../CartSidebarProduct/CartSidebarProduct";
import styles from "./CartSidebar.module.scss";
import { Button } from "@chakra-ui/react";

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
              <div className={styles.close}>
                <X onClick={handleCloseSidebar} />
              </div>
              <p className={styles.title}>Subtotal</p>
              {/* TODO: Calculate subtotal here */}
              <p className={styles.total}>$9.99</p>
              <Link to="/cart">
                <Button colorPalette="brand">View Cart</Button>
              </Link>
            </div>
            <hr />
            <div className={styles.products}>
              {state?.products.map((product) => (
                <CartSidebarProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartSidebar;
