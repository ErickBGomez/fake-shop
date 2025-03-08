import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import styles from "./CartPage.module.scss";
import { useContext } from "react";
import CartContext from "@/context/CartContext";
import CartPageProduct from "@/components/CartPageProduct/CartPageProduct";

const CartPage = () => {
  const { state } = useContext(CartContext);

  const summary = [
    {
      title: "SUBTOTAL",
      value: 0,
    },
    {
      title: "SHIPPING",
      value: 0,
    },
    {
      title: "TOTAL",
      value: 0,
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
              {summary.map((item) => (
                <div className={styles.summaryItem}>
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
