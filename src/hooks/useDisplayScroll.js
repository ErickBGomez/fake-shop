import { useEffect, useState } from "react";

const useDisplayScroll = () => {
  const [displayScroll, setDisplayScroll] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const currentScrollX = window.pageXOffset;
    const currentScrollY = window.pageYOffset;

    setDisplayScroll({ x: currentScrollX, y: currentScrollY });
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
