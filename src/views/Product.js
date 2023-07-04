import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByName } from "../utils/api";

import ProductDetail from "../components/ProductDetail";
const About = ({}) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductByName(params.productName);
      setProduct(res.data);
      setLoading(!loading)
    };
    fetchData().catch(console.error);
  }, []);
  console.log(product);
  return (
    <>{loading ? <h2>loading</h2> : <ProductDetail product={product} />};</>
  );
};

export default About;
