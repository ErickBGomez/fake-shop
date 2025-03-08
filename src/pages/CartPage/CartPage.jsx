import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import styles from "./CartPage.module.scss";
import ErrorPage from "../ErrorPage/ErrorPage";

const CartPage = () => {
  const products = [];

  const summary = [
    {
      title: "Subtotal",
      value: 0,
    },
    {
      title: "Shipping",
      value: 0,
    },
    {
      title: "Total",
      value: 0,
    },
  ];

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        {products.length > 0 ? (
          <>
            <h1>Your cart</h1>
            <div className={styles.products}></div>
            <div className={styles.summary}>
              <h2>Summary</h2>
              {summary.map((item) => (
                <div className={styles.summaryItem}>
                  <p>{item.title}</p>
                  <p>${item.value}</p>
                </div>
              ))}
              <Button colorPalette="brand">CHECKOUT</Button>
            </div>
          </>
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
