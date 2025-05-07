import { Button } from "@chakra-ui/react";
import styles from "./SearchBar.module.scss";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import Input from "../Input/Input";

const SearchBar = () => {
  const [active, setActive] = useState(false);
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

    console.log("sis");
    const [searchInput] = e.target;
    if (!searchInput.value) return;

    console.log(`Searching for: ${searchInput.value}`);

    searchInput.value = "";
  };

  const handleUnfocus = () => {
    setTimeout(() => {
      setActive(false);
    }, 10);
  };

  return (
    <div className={styles.search}>
      {active ? (
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
      ) : (
        <Button variant="plain" onClick={handleClickWhenInactive}>
          <Search />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
