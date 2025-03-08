import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import styles from "./CartPage.module.scss";
import { useContext, useMemo } from "react";
import CartContext from "@/context/CartContext";
import CartPageProduct from "@/components/CartPageProduct/CartPageProduct";

const CartPage = () => {
  const { state } = useContext(CartContext);
  const shipping = 12;
  const subtotal = useMemo(
    () =>
      state?.products?.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    [state?.products]
  );
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping]);

  const summary = [
    {
      title: "SUBTOTAL",
      value: subtotal,
    },
    {
      title: "SHIPPING",
      value: shipping,
    },
    {
      title: "TOTAL",
      value: total,
    },
  ];

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        {state?.products?.length > 0 ? (
          <div className={styles.cartContent}>
            <h1 className={styles.title}>Your cart</h1>
            <div className={styles.products}>
              {state?.products?.map((product) => (
                <CartPageProduct key={product.id} product={product} />
              ))}
            </div>
            <div className={styles.summary}>
              {summary.map((item, index) => (
                <div key={index} className={styles.summaryItem}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>${item.value.toFixed(2)}</p>
                </div>
              ))}
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
            <Link to="/search">
              <Button colorPalette="brand">Search products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
