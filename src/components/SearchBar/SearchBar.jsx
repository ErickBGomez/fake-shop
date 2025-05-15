import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useRef } from "react";
import Input from "../Input/Input";
import styles from "./SearchBar.module.scss";
import { motion, AnimatePresence } from "motion/react";

const SearchBar = ({ active, setActive }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleClickWhenInactive = () => {
    setActive(true);
    // Wait for the next render to focus the input
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const [searchInput] = e.target;

    if (!searchInput.value) return;

    navigate(`/search?query=${searchInput.value}`);

    setActive(false);
    searchInput.value = "";
  };

  const handleUnfocus = () => {
    setTimeout(() => {
      setActive(false);
    }, 100);
  };

  return (
    <div className={styles.search}>
      {/* Separate icon button with form to activate animation correctly */}
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          key="search-button"
        >
          <IconButton
            className={`${styles.searchButton} ${active ? styles.active : ""}`}
            variant="ghost"
            size="md"
            onClick={handleClickWhenInactive}
          >
            <Search />
          </IconButton>
        </motion.div>
        {active && (
          <motion.div
            initial={{ width: "25%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ width: "25%", opacity: 0 }}
            transition={{ duration: 0.2, ease: [0, 0.55, 0.45, 1] }}
            key="search-form"
          >
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <Input
                className={styles.input}
                ref={inputRef}
                variant="border"
                onBlur={handleUnfocus}
                placeholder="Find a item..."
              />
              {/* TODO: This button is not submitting the form */}
              <button className={styles.activeSearchButton} type="submit">
                <Search />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
