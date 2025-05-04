import { useSwiper } from "swiper/react";
import styles from "./SwiperButton.module.scss";

const SwiperButton = ({ direction, ref }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === "left") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <button
      ref={ref}
      className={styles.carouselButton}
      onClick={handleClick}
    ></button>
  );
};

export default SwiperButton;
