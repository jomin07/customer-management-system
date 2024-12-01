import Customer from "../models/customerModel.js";

const getCustomers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      filterField,
      filterValue,
    } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { name_of_customer: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    if (filterField && filterValue) {
      query[filterField] = { $regex: filterValue, $options: "i" };
    }

    const skip = (page - 1) * limit;
    const customers = await Customer.find(query)
      .skip(skip)
      .limit(Number(limit));
    const totalRecords = await Customer.countDocuments(query);

    res.json({
      customers,
      totalPages: Math.ceil(totalRecords / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching customers", error });
  }
};

export default getCustomers;
