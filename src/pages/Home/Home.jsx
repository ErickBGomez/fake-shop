import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import SectionCard from "@/components/SectionCard/SectionCard";
import Input from "@/components/Input/Input";
import {
  categories,
  featuredCategories,
  features,
  products,
} from "@/data/home";
import { Toaster, toaster } from "@/components/ui/toaster";
import { motion } from "motion/react";
import styles from "./Home.module.scss";
import { useParallax } from "react-scroll-parallax";

const Home = () => {
  // const newsletterParallax = useParallax({
  //   speed: -20,
  // });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <Toaster />
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>EVERYTHING YOU NEED IN ONE PLACE</h1>
          <p className={styles.subtitle}>
            Shop top deals and discover new favorites across every category.
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
          <h2 className={styles.title}>Featured Categories</h2>
          <div className={styles.productsGroup}>
            {featuredCategories.map((category, index) => (
              // Apply inverted class to odd indexed categories
              <div
                className={`${styles.sectionAndCarousel} ${
                  index % 2 === 1 ? styles.inverted : ""
                }`}
                key={index}
              >
                <SectionCard
                  title={category.title}
                  variant={category.variant}
                  gradient={category.gradient}
                />
                <ProductCarousel
                  products={products}
                  productsPerView={4}
                  variant={category.variant}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.newsletter}>
        <div className={styles.background} />
        <div className={styles.content}>
          <h2 className={styles.title}>Get the Best First</h2>
          <p className={styles.description}>
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
