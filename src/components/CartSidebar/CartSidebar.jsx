import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import CartContext from "../../context/CartContext";
import CartSidebarProduct from "../CartSidebarProduct/CartSidebarProduct";
import styles from "./CartSidebar.module.scss";
import { Button } from "@chakra-ui/react";
import calculatePrice from "@/util/price";

const CartSidebar = () => {
  const { state, dispatch } = useContext(CartContext);

  // Memoize subtotal calculation to avoid unnecessary re-renders
  const subtotal = useMemo(
    () =>
      state?.products?.reduce(
        (total, product) =>
          total +
          calculatePrice(product.price, product.discountPercentage) *
            product.quantity,
        0
      ),
    [state?.products]
  );

  const handleCloseSidebar = () => {
    dispatch({ type: "closeCart" });
  };

  return (
    <>
      {state?.isOpen && (
        <>
          <div className={styles.backdrop} onClick={handleCloseSidebar}></div>
          <div className={styles.sidebarCart}>
            <div className={styles.close}>
              <X onClick={handleCloseSidebar} />
            </div>
            {state?.products?.length ? (
              <>
                <div className={styles.details}>
                  <p className={styles.title}>Subtotal</p>
                  <p className={styles.total}>${subtotal.toFixed(2)}</p>
                  <Link to="/cart">
                    <Button colorPalette="brand" onClick={handleCloseSidebar}>
                      View Cart
                    </Button>
                  </Link>
                </div>
                <hr />
                <div className={styles.products}>
                  {state?.products.map((product) => (
                    <CartSidebarProduct key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.empty}>
                <ShoppingBag />
                <p>Your cart is empty</p>
                <p className={styles.subtitle}>
                  Keep shopping and find amazing deals!
                </p>
                <Link to="/">
                  <Button colorPalette="brand" onClick={handleCloseSidebar}>
                    Explore products
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CartSidebar;
