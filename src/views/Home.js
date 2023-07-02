import React, { useEffect, useState } from "react";
import { getProducts, getOneProduct } from "../utils/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      console.log(res.data);
      setProducts(res.data);
    };
    fetchData().catch(console.error);
  });
  return (
    <div>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.link}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
