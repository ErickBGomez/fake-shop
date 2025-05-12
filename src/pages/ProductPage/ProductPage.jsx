import { Button } from "@chakra-ui/react";
import { Weight, Box, Heart, Flag } from "lucide-react";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import ProductSpecs from "../../components/ProductSpecs/ProductSpecs";
import styles from "./ProductPage.module.scss";
import useFetch from "@/hooks/useFetch";
import ErrorPage from "../ErrorPage/ErrorPage";
import Image from "../../components/Image/Image";
import AddCartButton from "@/components/AddCartButton/AddCartButton";
import ProductSuggestions from "@/components/ProductSuggestions/ProductSuggestions";
import calculatePrice from "@/util/price";

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`products/${id}`);

  // TODO: Change into a proper loading page
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
              {product.rating.toFixed(0)} out of 5
            </p>
          </span>
        </div>
        <div className={styles.images}>
          <Image src={product.images[0]} rounded="md" />
        </div>
        <div className={styles.details}>
          <div className={styles.priceContainer}>
            <span className={styles.prices}>
              <p className={styles.finalPrice}>
                {/* Calculate price with discount, and round up to 2 decimals */}
                ${calculatePrice(product.price, product.discountPercentage)}
              </p>
              <p className={styles.originalPrice}>${product.price}</p>
            </span>
            <span className={styles.discount}>
              {product.discountPercentage.toFixed(0)}% OFF
            </span>
          </div>
          <p className={styles.stock}>Stock: {product.stock}</p>
          <div className={styles.addProductDialog}>
            <AddCartButton product={product} />
          </div>
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
          <ProductSuggestions />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
