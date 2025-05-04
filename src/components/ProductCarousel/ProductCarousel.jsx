import { Swiper, SwiperSlide } from "swiper/react";
import ProductCarouselButton from "../ProductCarouselButton/ProductCarouselButton";
import Product from "../Product/Product";
import styles from "./ProductCarousel.module.scss";
import "swiper/css";
import { useRef } from "react";

const ProductCarousel = ({ products }) => {
  const leftButton = useRef(null);
  const rightButton = useRef(null);

  const handleLeftButtonClick = () => {
    if (!leftButton.current) return;
    leftButton.current.click();
  };

  const handleRightButtonClick = () => {
    if (!rightButton.current) return;
    rightButton.current.click();
  };

  return (
    <div className={styles.productsCarousel}>
      {/* <div className={styles.products}>
        {products ? (
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              rating={product.rating}
              price={product.price}
              discount={product.discountPercentage}
            />
          ))
        ) : (
          <p>No products...</p>
        )}
      </div> */}

      {/*
      This is because swiper handles the absolute position of the buttons
      by themselves, and it does not let me to show the proper buttons.
      So, I use a ref to make a element to click outside of Swiper.
      
      Also, this helps me to handle better the padding and position of buttons.
      */}
      <button onClick={handleLeftButtonClick}>Left</button>
      <button onClick={handleRightButtonClick}>Right</button>

      <Swiper
        slidesPerView={7}
        onSlideChange={() => console.log("slided")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ zIndex: 0 }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <ProductCarouselButton direction="left" ref={leftButton} />
        <ProductCarouselButton direction="right" ref={rightButton} />
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
