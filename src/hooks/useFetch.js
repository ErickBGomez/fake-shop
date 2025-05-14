import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, queries = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const path = queries ? `${endpoint}?${queries}` : endpoint;
        const response = await axios.get(`${API_URL}/${path}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL, endpoint, queries]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
