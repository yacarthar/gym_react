import axios from "axios";

const apiUrl = "http://localhost:5000"

export const getProducts = async () =>
  await axios.get(`${apiUrl}/`, {});

export const getOneProduct = async (productId) =>
  await axios.get(`${apiUrl}/${productId}`, {});