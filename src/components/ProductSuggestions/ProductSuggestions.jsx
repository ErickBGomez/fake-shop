import useFetch from "@/hooks/useFetch";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

const ProductSuggestions = ({ category = "phone" }) => {
  const {
    data: suggestions,
    loading,
    error,
  } = useFetch("products/search", `q=${category}`);

  console.log(category);
  if (suggestions) console.log(suggestions);

  // TODO: Change into a proper loading component
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading suggestions</p>;

  return <ProductCarousel products={suggestions.products} />;
};

export default ProductSuggestions;
