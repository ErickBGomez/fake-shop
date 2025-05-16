import { Button } from "@chakra-ui/react";
import { SquareDashed } from "lucide-react";
import styles from "./Home.module.scss";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import SectionCard from "@/components/SectionCard/SectionCard";
import Input from "@/components/Input/Input";
import { categories, products } from "@/data/home";
import { motion } from "motion/react";

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
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
          >
            <h1 className={styles.title}>MAKE YOUR DREAMS COME TRUE</h1>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.25,
            }}
          >
            <p className={styles.subtitle}>
              Explore our products to see your next purchase
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.5,
            }}
          >
            <Button
              color="white"
              variant="outline"
              className={styles.heroButton}
            >
              SHOP NOW
            </Button>
          </motion.div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.content}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.content}>
          <h2 className={styles.title}>Categories</h2>
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
            <h2 className={styles.title}>Best selling of the week</h2>
            <div className={styles.sectionAndCarousel}>
              <SectionCard title="Group" />
              <ProductCarousel products={products} productsPerView={4} />
            </div>
          </div>
          <div className={styles.productsGroup}>
            <h2 className={styles.title}>Best selling of the week</h2>
            <div className={`${styles.sectionAndCarousel} ${styles.inverted}`}>
              <SectionCard title="Group" />
              <ProductCarousel products={products} productsPerView={4} />
            </div>
          </div>
          <div className={styles.productsGroup}>
            <h2 className={styles.title}>Best selling of the week</h2>
            <div className={styles.sectionAndCarousel}>
              <SectionCard title="Group" />
              <ProductCarousel products={products} productsPerView={4} />
            </div>
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
            <Input placeholder="Enter your email here" variant="dark" />
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
