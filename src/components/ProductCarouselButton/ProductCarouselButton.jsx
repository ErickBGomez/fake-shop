import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";
import styles from "./ProductCarouselButton.module.scss";

const ProductCarouselButton = ({ direction, ref }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (direction === "left") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  const icon = direction === "left" ? <ChevronLeft /> : <ChevronRight />;

  return (
    <button ref={ref} className={styles.carouselButton} onClick={handleClick}>
      {icon}
    </button>
  );
};

export default ProductCarouselButton;
