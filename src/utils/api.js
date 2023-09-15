import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// export const setAxiosTokenInterceptor = (accessToken) => {
//   axios.interceptors.request.use((config) => {
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   });
// };

export const getProducts = async (ids=null) => {
  const params = ids? {ids: ids}: {}
  return await axios.get(`${apiUrl}/p/`, {params});
}

export const getProductByName = async (name) =>
  await axios.get(`${apiUrl}/p/${name}`, { params: { query_by: "name" } });

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

export const getCart = async (accessToken) =>
  await axios.get(`${apiUrl}/u/cart/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const updateCart = async (accessToken, body) =>
  await axios.put(`${apiUrl}/u/cart/`, body, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
