import axios from 'axios';
import { BASE_URL } from '../const';

export const addToOrder = async (data) => {
  console.log(data);
  const response = await axios.post(`${BASE_URL}/orders`, data);
  return response;
};
