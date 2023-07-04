import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL

export const getProducts = async () =>
  await axios.get(`${apiUrl}/p/`, {});

export const getProductByName = async (name) =>
  await axios.get(`${apiUrl}/p/name/${name}`, {});