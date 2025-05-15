import { useContext, useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
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
  const [dialogActive, setDialogActive] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const { scrollY } = useDisplayScroll();

  const handleOpenDialog = () => {
    setDialogActive(true);
  };

  const handleCloseDialog = () => {
    setDialogActive(false);
  };

  const handleSearchBarState = (state) => {
    setSearchBarActive(state);
  };

  return (
    <>
      {dialogActive && <HeaderDialog closeDialog={handleCloseDialog} />}
      <header
        className={`${styles.mainHeader} ${
          landingVariant ? styles.landing : ""
        } ${scrollY > 0 ? styles.scrolled : ""} ${
          searchBarActive ? styles.searchActive : ""
        }`}
      >
        <div className={styles.content}>
          <nav className={styles.headerNav}>
            {/* Appear only when screen width < 768px */}
            <IconButton
              className={styles.menu}
              variant="ghost"
              size="md"
              onClick={handleOpenDialog}
            >
              <Menu />
            </IconButton>
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
            <SearchBar
              active={searchBarActive}
              setActive={handleSearchBarState}
            />
            <IconButton variant="ghost" size="md" className={styles.user}>
              <UserRound />
            </IconButton>
            <IconButton
              variant="ghost"
              size="md"
              className={styles.cart}
              onClick={() => dispatch({ type: "openCart" })}
            >
              <ShoppingCart />
              {state?.products?.length > 0 && (
                <span className={styles.size}>{state.products.length}</span>
              )}
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
