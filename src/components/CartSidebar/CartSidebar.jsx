import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag } from "lucide-react";
import CartContext from "../../context/CartContext";
import CartSidebarProduct from "../CartSidebarProduct/CartSidebarProduct";
import styles from "./CartSidebar.module.scss";
import { Button, IconButton } from "@chakra-ui/react";
import calculatePrice from "@/util/price";
import { motion, AnimatePresence } from "motion/react";

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
    <AnimatePresence>
      {state?.isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            onClick={handleCloseSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div
            className={styles.sidebarCart}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              variant="ghost"
              size="md"
              className={styles.close}
              onClick={handleCloseSidebar}
            >
              <X />
            </IconButton>
            {/* Load total details */}
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
                {/* Load products */}
                <div className={styles.products}>
                  {/* Animate when products are loaded or removed */}
                  <AnimatePresence mode="popLayout">
                    {state?.products.map((product) => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CartSidebarProduct product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
