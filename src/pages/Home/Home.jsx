import { Button } from "@chakra-ui/react";
import { SquareDashed } from "lucide-react";
import styles from "./Home.module.scss";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import SectionCard from "@/components/SectionCard/SectionCard";
import { name } from "ejs";

const products = [
  {
    id: 0,
    images: [],
    title: "Article 1",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
  {
    id: 1,
    images: [],
    title: "Article 2",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
  {
    id: 2,
    images: [],
    title: "Article 2",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
  {
    id: 3,
    images: [],
    title: "Article 2",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
  {
    id: 4,
    images: [],
    title: "Article 2",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
  {
    id: 5,
    images: [],
    title: "Article 2",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
  {
    id: 6,
    images: [],
    title: "Article 2",
    rating: 4,
    price: 9.99,
    discountPercentage: 99,
  },
];

const categories = [
  {
    id: 0,
    title: "Category 1",
    image: null,
    url: "candles",
    variant: "large",
  },
  {
    id: 1,
    title: "Category 2",
    image: null,
    url: "candles",
  },
  {
    id: 2,
    title: "Category 3",
    image: null,
    url: "candles",
  },
  {
    id: 3,
    title: "Category 4",
    image: null,
    url: "candles",
    variant: "tall",
  },
  {
    id: 4,
    title: "Category 5",
    image: null,
    url: "candles",
  },
  {
    id: 5,
    title: "Category 6",
    image: null,
    url: "candles",
  },
  {
    id: 6,
    title: "Category 7",
    image: null,
    url: "candles",
    variant: "wide",
  },
];

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>MAKE YOUR DREAMS COME TRUE</h1>
          <p className={styles.subtitle}>
            Explore our products to see your next purchase
          </p>
          {/* TODO: Set styles for outline button */}
          <Button color="white" variant="outline">
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.content}>
          <FeatureCard
            icon={<SquareDashed />}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
          />
          <FeatureCard
            icon={<SquareDashed />}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
          />
          <FeatureCard
            icon={<SquareDashed />}
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
          />
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.content}>
          <h2 className={styles.title}>Best selling of the week</h2>
          <ProductCarousel products={products} />
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.content}>
          <h2 className={styles.title}>Categories</h2>
          <div className={styles.grid}>
            {categories.map((category) => (
              <SectionCard
                key={category.id}
                title={category.title}
                url={category.url}
                variant={category.variant}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.newsletter}>
        <div className={styles.content}>
          <h2 className={styles.title}>Never miss any offer</h2>
          <p>
            Subscribe to our newsletter to be in touch with the latest offers of
            your favorite products!
          </p>
          <div className={styles.form}>
            <Button color="white" variant="outline">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
