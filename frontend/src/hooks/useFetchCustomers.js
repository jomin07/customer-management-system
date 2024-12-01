import { useState, useEffect } from "react";
import { fetchCustomers } from "../api/api";

const useFetchCustomers = (currentPage, search, filterField, filterValue) => {
  const [customers, setCustomers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCustomers = async () => {
      setLoading(true);
      try {
        const data = await fetchCustomers({
          page: currentPage,
          limit: 10,
          search,
          filterField,
          filterValue,
        });
        setCustomers(data.customers);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    getCustomers();
  }, [currentPage, search, filterField, filterValue]);

  return { customers, totalPages, loading };
};

export default useFetchCustomers;
