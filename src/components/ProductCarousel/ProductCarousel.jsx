import { useEffect, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Product/Product";
import SwiperButton from "../SwiperButton/SwiperButton";
import styles from "./ProductCarousel.module.scss";
import "swiper/css";
import useDisplayDimensions from "@/hooks/useDisplayDimensions";

const ProductCarousel = ({ products, productsPerView = 7 }) => {
  const leftButton = useRef(null);
  const rightButton = useRef(null);
  // TODO: This is provoking performance issues... and even with useMemo
  const { displayWidth } = useDisplayDimensions();

  const handleLeftButtonClick = () => {
    if (!leftButton.current) return;
    leftButton.current.click();
  };

  const handleRightButtonClick = () => {
    if (!rightButton.current) return;
    rightButton.current.click();
  };

  // Calculate the number of products that can be displayed based on the screen width
  // useMemo to avoid recalculating on every render
  const productsPerViewMemoized = useMemo(() => {
    const productsPerViewByWidth = Math.floor((displayWidth - 64) / 100); // Assuming 100px is the max width of each product
    return Math.min(productsPerViewByWidth, productsPerView);
  }, [displayWidth, productsPerView]);

  useEffect(() => {
    console.log(productsPerViewMemoized);
  }, [productsPerViewMemoized]);

  // useEffect(() => {
  //   console.log(displayWidth);
  // }, [displayWidth]);

  return (
    <div className={styles.productsCarousel}>
      {products ? (
        <>
          {/*
          These two buttons (left and right chevron) is because swiper handles the absolute position of the buttons
          by themselves, and it does not let me to show the proper buttons.
          So, I use a ref to make a element to click outside of Swiper.
      
          Also, this helps me to handle better the padding and position of buttons.
          */}
          <button className={styles.arrow} onClick={handleLeftButtonClick}>
            <ChevronLeft />
          </button>

          {/* TODO: Find a way to make the elements responsive */}
          <Swiper slidesPerView={productsPerViewMemoized} spaceBetween={32}>
            <SwiperButton direction="left" ref={leftButton} />
            <SwiperButton direction="right" ref={rightButton} />

            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Product
                  id={product.id}
                  image={product.images[0]}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  discount={product.discountPercentage}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={styles.arrow} onClick={handleRightButtonClick}>
            <ChevronRight />
          </button>
        </>
      ) : (
        <p>No products...</p>
      )}
    </div>
  );
};

export default ProductCarousel;
