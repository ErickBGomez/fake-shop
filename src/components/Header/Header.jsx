import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserRound, ShoppingCart, Search } from "lucide-react";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Categories", link: "/categories" },
  { label: "Sales", link: "/sales" },
  { label: "New", link: "/new-products" },
];

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.content}>
        <nav className={styles.headerNav}>
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
          <div className={styles.search}>
            <Button variant="plain">
              <Search />
            </Button>
          </div>
          <div className={styles.user}>
            <Button variant="plain">
              <UserRound />
            </Button>
          </div>
          <div className={styles.cart}>
            <Button variant="plain">
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
