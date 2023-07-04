import React, { useEffect, useRef, useState } from "react";
import { getProducts } from "../utils/api";

import ProductCard from "../components/ProductCard";
import Paginate from "../components/Paginate";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchInput = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      setProducts(res.data);
      setFilteredProducts(res.data);
    };
    fetchData().catch(console.error);
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
    const temp = searchInput
      ? products.filter((item) =>
          item.title.includes(searchInput.current.value)
        )
      : products;
    setFilteredProducts(temp);
    setCurrentPage(1);
  };
  
  console.log(filteredProducts);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const onPageProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const lastPage = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-6">
          Total Products: {filteredProducts.length}
        </div>
        <div className="col-md-6">
          <form className="input-group" onSubmit={searchHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Product ..."
              ref={searchInput}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row mb-4 gy-4">
        {onPageProducts.map((product) => (
          <ProductCard
            className="col-sm-6 col-md-5 col-lg-4 col-xl-3"
            p={product}
            key={product.id}
          />
        ))}
      </div>
      <Paginate
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default Home;
