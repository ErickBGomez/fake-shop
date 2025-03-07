import axios from "axios";
import { useEffect, useState } from "react";

const useFetchProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`${API_URL}/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL, productId]);

  return {
    product,
    loading,
    error,
  };
};

export default useFetchProduct;
