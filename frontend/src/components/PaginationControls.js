const PaginationControls = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow disabled:opacity-50 hover:bg-blue-600"
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow disabled:opacity-50 hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
