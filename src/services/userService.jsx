import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Adjust based on your backend

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
