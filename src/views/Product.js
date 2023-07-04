import { useParams } from "react-router-dom";
import { getProductByName } from "../utils/api";

import ProductDetail from "../components/ProductDetail";
const About = ({}) => {
  const params = useParams();
  console.log(params.productName);
  return (
    <ProductDetail/>
  );
};

export default About;
