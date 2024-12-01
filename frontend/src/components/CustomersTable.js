const CustomersTable = ({ customers, loading }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border px-4 py-2">S.No</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Mobile</th>
            <th className="border px-4 py-2">DOB</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                Loading...
              </td>
            </tr>
          ) : customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.s_no} className="odd:bg-gray-100">
                <td className="border px-4 py-2">{customer.s_no}</td>
                <td className="border px-4 py-2">
                  {customer.name_of_customer}
                </td>
                <td className="border px-4 py-2">{customer.email}</td>
                <td className="border px-4 py-2">{customer.mobile_number}</td>
                <td className="border px-4 py-2">
                  {new Date(customer.dob).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
