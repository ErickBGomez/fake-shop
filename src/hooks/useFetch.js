import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const path = query ? `${endpoint}?${query}` : endpoint;
        const response = await axios.get(`${API_URL}/${path}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL, endpoint, query]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
