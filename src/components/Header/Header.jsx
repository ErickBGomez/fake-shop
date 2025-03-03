import { UserRound, ShoppingCart, Search } from "lucide-react";
import styles from "./Header.module.scss";

const navElements = ["Categories", "Sales", "Stores", "Contact"];

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <div className={styles.brand}>BRAND</div>
          <nav className={styles.headerNav}>
            <ul className={styles.navElements}>
              {navElements.map((element, index) => (
                <li key={index} className={styles.navElement}>
                  {element}
                </li>
              ))}
            </ul>
          </nav>
        </div>
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
