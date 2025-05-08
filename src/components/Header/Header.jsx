import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserRound, ShoppingCart, Menu } from "lucide-react";
import CartContext from "../../context/CartContext";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import useDisplayScroll from "@/hooks/useDisplayScroll";
import HeaderDialog from "../HeaderDialog/HeaderDialog";

const navLinks = [
  { label: "Categories", link: "/categories/test" },
  { label: "Sales", link: "/sales" },
  { label: "New", link: "/new-products" },
];

const Header = ({ landingVariant = false }) => {
  const { state, dispatch } = useContext(CartContext);
  const [dialogState, setDialogState] = useState(false);
  const { scrollY } = useDisplayScroll();

  const handleOpenDialog = () => {
    setDialogState(true);
  };

  return (
    <>
      {dialogState && <HeaderDialog handleDialogState={setDialogState} />}
      <header
        className={`${styles.mainHeader} ${
          landingVariant ? styles.landing : ""
        } ${scrollY > 0 ? styles.scrolled : ""}`}
      >
        <div className={styles.content}>
          <nav className={styles.headerNav}>
            {/* Appear only when screen width < 768px */}
            <div className={styles.menu}>
              <Button variant="plain" onClick={handleOpenDialog}>
                <Menu />
              </Button>
            </div>
            <div className={styles.brand}>
              <Link to="/">BRAND</Link>
            </div>
            <ul className={styles.navLinks}>
              {navLinks.map((element, index) => (
                <li key={index} className={styles.navLink}>
                  <Link to={element.link}>{element.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.actions}>
            <SearchBar />
            <div className={styles.user}>
              <Button variant="plain">
                <UserRound />
              </Button>
            </div>
            <div
              className={styles.cart}
              onClick={() => dispatch({ type: "openCart" })}
            >
              <Button variant="plain">
                <ShoppingCart />
              </Button>
              {state?.products?.length > 0 && (
                <span className={styles.size}>{state.products.length}</span>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
