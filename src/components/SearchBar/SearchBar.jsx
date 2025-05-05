import { Button } from "@chakra-ui/react";
import styles from "./SearchBar.module.scss";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

  // TODO: Value is not present in current
  const handleUnfocus = () => {
    if (inputRef.current.value === 0) return;

    setActive(false);
    console.log("si");
  };

  return (
    <div className={styles.search}>
      {active ? (
        <Input ref={inputRef} onBlur={handleUnfocus} />
      ) : (
        <Button variant="plain" onClick={handleClickWhenInactive}>
          <Search />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
