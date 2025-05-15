import useFetch from "@/hooks/useFetch";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ProductSuggestions = ({ category = "phone" }) => {
  const {
    data: suggestions,
    loading,
    error,
  } = useFetch("products/search", `q=${category}`);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error loading suggestions</p>;

  return <ProductCarousel products={suggestions.products} />;
};

export default ProductSuggestions;
