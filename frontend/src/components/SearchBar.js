const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 border rounded-lg flex-grow shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
