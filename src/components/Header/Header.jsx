import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserRound, Menu } from "lucide-react";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import useDisplayScroll from "@/hooks/useDisplayScroll";
import HeaderDialog from "../HeaderDialog/HeaderDialog";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const navLinks = [
  { label: "CATEGORIES", link: "/categories/test" },
  { label: "SALES", link: "/sales" },
  { label: "NEW", link: "/new-products" },
];

const Header = ({ landingVariant = false }) => {
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
      <HeaderDialog
        dialogState={dialogActive}
        closeDialog={handleCloseDialog}
      />
      <header
        className={`${styles.mainHeader} ${
          landingVariant ? styles.landing : ""
        } ${scrollY > 0 ? styles.scrolled : ""} ${
          searchBarActive ? styles.searchActive : ""
        }`}
      >
        <div className={styles.content}>
          <nav className={styles.headerNav}>
            {/* Appears only when screen width < 768px */}
            <IconButton
              className={styles.menu}
              variant="ghost"
              size="md"
              onClick={handleOpenDialog}
            >
              <Menu />
            </IconButton>
            <Link className={styles.brand} to="/">
              BRAND
            </Link>
            <div className={styles.navLinks}>
              {navLinks.map((element, index) => (
                <Link key={index} className={styles.navLink} to={element.link}>
                  {element.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className={styles.actions}>
            <SearchBar
              active={searchBarActive}
              setActive={handleSearchBarState}
            />
            <IconButton variant="ghost" size="md" className={styles.user}>
              <UserRound />
            </IconButton>
            <HeaderCartButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
