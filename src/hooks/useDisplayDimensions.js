import { useEffect, useState } from "react";

const useDisplayDimensions = () => {
  const [displayDimensions, setDisplayDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    const currentX = window.innerWidth;
    const currentY = window.innerHeight;

    setDisplayDimensions({ width: currentX, height: currentY });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return displayDimensions;
};

export default useDisplayDimensions;
