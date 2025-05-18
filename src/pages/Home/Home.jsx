import { Button } from "@chakra-ui/react";
import { SquareDashed } from "lucide-react";
import styles from "./Home.module.scss";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import SectionCard from "@/components/SectionCard/SectionCard";
import Input from "@/components/Input/Input";
import { categories, products } from "@/data/home";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Toaster, toaster } from "@/components/ui/toaster";

const features = [
  {
    icon: <SquareDashed />,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    icon: <SquareDashed />,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
  {
    icon: <SquareDashed />,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  },
];

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <Toaster />
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>MAKE YOUR DREAMS COME TRUE</h1>
          <p className={styles.subtitle}>
            Explore our products to see your next purchase
          </p>
          <Button color="white" variant="outline" className={styles.heroButton}>
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.content}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.content}>
          <h2 className={styles.title}>Explore by Category</h2>
          <div className={styles.grid}>
            {categories.map((category) => (
              <SectionCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.content}>
          <div className={styles.productsGroup}>
            <h2 className={styles.title}>Featured Categories</h2>
            <div className={styles.sectionAndCarousel}>
              <SectionCard title="New Arrivals" />
              <ProductCarousel products={products} productsPerView={4} />
            </div>
          </div>
          <div className={styles.productsGroup}>
            <div className={`${styles.sectionAndCarousel} ${styles.inverted}`}>
              <SectionCard title="Week Sales" />
              <ProductCarousel products={products} productsPerView={4} />
            </div>
          </div>
          <div className={styles.productsGroup}>
            <div className={styles.sectionAndCarousel}>
              <SectionCard title="Best Tech" />
              <ProductCarousel products={products} productsPerView={4} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.newsletter}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get the Best First</h2>
          <p>
            Subscribe to our newsletter to be in touch with the latest offers of
            your favorite products!
          </p>
          <div className={styles.form}>
            <Input placeholder="Enter your email here" variant="dark" />
            <Button
              color="white"
              variant="outline"
              className={styles.subscribeButton}
              onClick={() => {
                toaster.create({
                  title: "Success!",
                  description:
                    "You have been subscribed to BRXND newsletter successfully.",
                  type: "success",
                  duration: 5000,
                });
              }}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
