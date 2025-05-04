import React from "react";
import { useSwiper } from "swiper/react";

const ProductCarouselButton = ({ direction }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === "left") {
      swiper.slidePrev();
    } else if (direction === "right") {
      swiper.slideNext();
    }
  };

  return <button onClick={handleClick}>{direction}</button>;
};

export default ProductCarouselButton;
