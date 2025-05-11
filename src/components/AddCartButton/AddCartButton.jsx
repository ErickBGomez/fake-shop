import React, { useContext, useState } from "react";
import { ShoppingCart } from "lucide-react";
import {
  NumberInputRoot,
  NumberInputField,
} from "@/components/ui/number-input";
import styles from "./AddCartButton.module.scss";
import CartContext from "@/context/CartContext";
import { Button } from "@chakra-ui/react";

const AddCartButton = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const [openCartDialog, setOpenCartDialog] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Save product in cart context to display in the sidebar and cart page
  const handleAddCart = () => {
    dispatch({ type: "addProduct", product: { ...product, quantity } });
    handleCloseCart();
  };

  // Resets quantity and hides button and number input
  const handleCloseCart = () => {
    setOpenCartDialog(false);
    setQuantity(1);
  };

  return (
    <div className={styles.addCartButton}>
      {openCartDialog ? (
        <>
          <NumberInputRoot
            defaultValue={1}
            min={1}
            max={product.stock}
            onValueChange={(e) => setQuantity(e.valueAsNumber)}
          >
            <NumberInputField />
          </NumberInputRoot>
          <div className={styles.buttons}>
            <Button colorPalette="brand" onClick={handleAddCart}>
              CONFIRM
            </Button>
            <Button variant="outline" onClick={handleCloseCart}>
              CANCEL
            </Button>
          </div>
        </>
      ) : (
        <Button colorPalette="brand" onClick={() => setOpenCartDialog(true)}>
          <ShoppingCart /> ADD TO CART
        </Button>
      )}
    </div>
  );
};

export default AddCartButton;
