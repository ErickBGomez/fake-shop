import { Button } from "@chakra-ui/react";
import { ShoppingCart, Weight, Box, Heart, Flag } from "lucide-react";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import ProductSpecs from "../../components/ProductSpecs/ProductSpecs";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import ImagesPreview from "../../components/ImagesPreview/ImagesPreview";
import styles from "./ProductPage.module.scss";
import useFetchProduct from "@/hooks/useFetch";
import ErrorPage from "../ErrorPage/ErrorPage";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorPage variant="product-not-found" />;

  return (
    <div className={styles.productPage}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.brand}>{product.brand}</p>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <span className={styles.rating}>
            <Rating defaultValue={product.rating} readOnly />
            <p className={styles.ratingText}>
              {product.rating.toFixed(1)} out of 5
            </p>
          </span>
        </div>
        <div className={styles.images}>
          <ImagesPreview images={product.images} />
        </div>
        <div className={styles.details}>
          <div className={styles.priceContainer}>
            <span className={styles.prices}>
              <p className={styles.finalPrice}>
                {/* Calculate price with discount, and round up to 2 decimals */}
                $
                {(
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
              <p className={styles.originalPrice}>${product.price}</p>
            </span>
            <span className={styles.discount}>
              {product.discountPercentage.toFixed(0)}% OFF
            </span>
          </div>
          <p className={styles.stock}>Stock: {product.stock}</p>
          <Button colorPalette="brand">
            <ShoppingCart /> ADD TO CART
          </Button>
          <hr />
          <p className={styles.description}>{product.description}</p>
          <div className={styles.specs}>
            <ProductSpecs
              icon={<Weight />}
              label="Weight"
              value={product.weight}
              units="kg"
            />
            <ProductSpecs
              icon={<Box />}
              label="Dimensions"
              value={`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}
              units="cm"
            />
          </div>
          <hr />
          <div className={styles.actions}>
            <Button variant="ghost">
              <Heart /> Add to favorites
            </Button>
            <Button variant="ghost">
              <Flag /> Report product
            </Button>
          </div>
        </div>
        <div className={styles.suggestions}>
          <div className={styles.suggestionsHeader}>
            <h2 className={styles.title}>Suggestions</h2>
            <p>Checkout these similar products you might like</p>
          </div>
          <ProductCarousel products={product.suggestions} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
