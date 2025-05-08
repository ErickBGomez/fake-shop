import { useEffect, useRef } from "react";

const useDisplayDimensions = () => {
  const displayDimensions = useRef({
    displayWidth: window.innerWidth,
    displayHeight: window.innerHeight,
  });

  const setDisplayDimensions = ({ displayWidth, displayHeight }) => {
    displayDimensions.current = { displayWidth, displayHeight };
  };

  useEffect(() => {
    const handleResize = () => {
      const currentX = window.innerWidth;
      const currentY = window.innerHeight;

      setDisplayDimensions({ displayWidth: currentX, displayHeight: currentY });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return displayDimensions.current;
};

export default useDisplayDimensions;
