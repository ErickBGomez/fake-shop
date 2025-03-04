import { Button } from "@chakra-ui/react";
import { ShoppingCart, Weight, Box, Heart, Flag } from "lucide-react";
import Rating from "../../components/Rating/Rating";
import ProductSpecs from "../../components/ProductSpecs/ProductSpecs";
import styles from "./ProductPage.module.scss";

// TODO: Temporal data, remove later when the API is integrated
const product = {
  title: "Title of the product",
  brand: "Brand",
  price: 9.99,
  discount: 99,
  rating: 4,
  images: [],
  stock: 5,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. ",
  weight: 24,
  dimensions: {
    length: 10,
    width: 10,
    height: 10,
  },
  suggestions: [
    {
      id: 0,
      image: null,
      title: "Article 1",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 1,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 2,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 3,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 4,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 5,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
    {
      id: 6,
      image: null,
      title: "Article 2",
      rating: 4,
      price: 9.99,
      discount: 99,
    },
  ],
};

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.brand}>{product.brand}</p>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <span className={styles.rating}>
            <Rating defaultValue={product.rating} readOnly />
            <p className={styles.ratingText}>{product.rating} out of 5</p>
          </span>
        </div>
        <div className={styles.images}>
          {/* TODO: Pending to create image preview component */}
          <p>Images will go here...</p>
        </div>
        <div className={styles.details}>
          <div className={styles.priceContainer}>
            <span className={styles.prices}>
              <p className={styles.finalPrice}>
                {/* Calculate price with discount, and round up to 2 decimals */}
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </p>
              <p className={styles.originalPrice}>${product.price}</p>
            </span>
            <span className={styles.discount}>{product.discount}% OFF</span>
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
              value={`${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height}`}
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
            <p>Checkout these similar products your might like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
