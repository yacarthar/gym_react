import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getProducts = async () => await axios.get(`${apiUrl}/p/`, {});

export const getProductByName = async (name) =>
  await axios.get(`${apiUrl}/p/name/${name}`, {});

export const getUser = async (accessToken) =>
  await axios.get(`${apiUrl}/u/sub/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const updateUser = async (accessToken, body) =>
  await axios.put(`${apiUrl}/u/sub/`, body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
