import { Button } from "@chakra-ui/react";
import { SquareDashed } from "lucide-react";
import styles from "./Home.module.scss";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import SectionCard from "@/components/SectionCard/SectionCard";
import Input from "@/components/Input/Input";
import { categories, products } from "@/data/home";

const Home = () => {
  return (
    <div className={styles.home}>
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
