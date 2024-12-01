const FilterBar = ({
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
}) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <select
        value={filterField}
        onChange={(e) => setFilterField(e.target.value)}
        className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Filter By</option>
        <option value="dob">Date of Birth</option>
        <option value="mobile_number">Mobile Number</option>
      </select>
      <input
        type="text"
        placeholder="Filter value"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="p-3 border rounded-lg flex-grow shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default FilterBar;
