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
  }, []);
  return (
    <div className="container">
      <div className="row mb-4">
        {products.map((p) => (
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="card">
              <img
                src={p.images[0]}
                alt="product-img"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
