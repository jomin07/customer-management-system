import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCustomers = async (params) => {
  const response = await axios.get(`${API_URL}`, { params });
  return response.data;
};
