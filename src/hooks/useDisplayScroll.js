import { useEffect, useState } from "react";

const useDisplayScroll = () => {
  const [displayScroll, setDisplayScroll] = useState({
    scrollX: window.pageXOffset,
    scrollY: window.pageYOffset,
  });

  const handleScroll = () => {
    const currentScrollX = window.pageXOffset;
    const currentScrollY = window.pageYOffset;

    setDisplayScroll({ scrollX: currentScrollX, scrollY: currentScrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return displayScroll;
};

export default useDisplayScroll;
