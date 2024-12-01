import { useState, useEffect } from "react";
import { fetchCustomers } from "../api/api";

const useFetchCustomers = (currentPage, search, filterField, filterValue) => {
  const [customers, setCustomers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCustomers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCustomers({
          page: currentPage,
          limit: 10,
          search,
          filterField,
          filterValue,
        });
        setCustomers(data.customers || []);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    getCustomers();
  }, [currentPage, search, filterField, filterValue]);

  return { customers, totalPages, loading, error };
};

export default useFetchCustomers;
