import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import styles from "./CartPage.module.scss";
import { useContext, useMemo } from "react";
import CartContext from "@/context/CartContext";
import CartPageProduct from "@/components/CartPageProduct/CartPageProduct";
import calculatePrice from "@/util/price";
import { motion, AnimatePresence } from "motion/react";

const CartPage = () => {
  const { state } = useContext(CartContext);
  const shipping = 12;
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
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping]);

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        {state?.products?.length > 0 ? (
          <div className={styles.cartContent}>
            <h1 className={styles.title}>Your cart</h1>
            <motion.div className={styles.products}>
              <AnimatePresence mode="sync">
                {state?.products?.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CartPageProduct product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className={styles.summary}>
              <div className={styles.summaryItems}>
                <div className={styles.summaryItem}>
                  <p className={styles.title}>Subtotal</p>
                  <p className={styles.subtitle}>${subtotal.toFixed(2)}</p>
                </div>
                <div className={styles.summaryItem}>
                  <p className={styles.title}>Shipping</p>
                  <p className={styles.subtitle}>+${shipping.toFixed(2)}</p>
                </div>
                <hr />
                <div className={styles.totalItem}>
                  <p className={styles.title}>Total</p>
                  <p className={styles.subtitle}>${total.toFixed(2)}</p>
                </div>
              </div>
              <Button colorPalette="brand">CHECKOUT</Button>
            </div>
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.icon}>
              <ShoppingBag />
            </div>
            <h2 className={styles.title}>Your cart is empty</h2>
            <p className={styles.subtitle}>
              Keep shopping and find amazing deals!
            </p>
            <Link to="/">
              <Button colorPalette="brand">Explore products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
