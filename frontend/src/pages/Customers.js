import React, { useState } from "react";
import useFetchCustomers from "../hooks/useFetchCustomers";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CustomersTable from "../components/CustomersTable";
import PaginationControls from "../components/PaginationControls";

const CustomersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const { customers, totalPages, loading } = useFetchCustomers(
    currentPage,
    search,
    filterField,
    filterValue
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Customer Management
      </h1>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar
        filterField={filterField}
        setFilterField={setFilterField}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <CustomersTable customers={customers} loading={loading} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CustomersPage;
