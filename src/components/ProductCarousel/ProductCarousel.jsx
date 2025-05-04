import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Product/Product";
import styles from "./ProductCarousel.module.scss";
import "swiper/css";
import ProductCarouselButton from "../ProductCarouselButton/ProductCarouselButton";
// import "swiper/css/navigation";

const ProductCarousel = ({ products }) => {
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

      <Swiper
        slidesPerView={7}
        onSlideChange={() => console.log("slided")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <ProductCarouselButton direction="left" />
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
        <ProductCarouselButton direction="right" />
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
