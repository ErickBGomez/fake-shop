import { UserRound, ShoppingCart, Search } from "lucide-react";
import styles from "./Header.module.scss";

const navLinks = [
  { label: "Categories", link: "/categories" },
  { label: "Sales", link: "/sales" },
  { label: "Stores", link: "/stores" },
];

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.content}>
        <nav className={styles.headerNav}>
          <div className={styles.brand}>BRAND</div>
          <ul className={styles.navLinks}>
            {navLinks.map((element, index) => (
              <li key={index} className={styles.navLink}>
                <a href={element.link}>{element.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.user}>
            <UserRound />
          </div>
          <div className={styles.cart}>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
