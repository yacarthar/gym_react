import React, { useEffect, useState } from "react";
import { getProducts, getOneProduct } from "../utils/api";

import ProductCard from "../components/ProductCard";
import Paginate from "../components/Paginate";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      console.log(res.data);
      setProducts(res.data);
      setFilteredProducts(res.data)
    };
    fetchData().catch(console.error);
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
    const temp = searchInput
      ? products.filter((item) => item.title.includes(searchInput))
      : products;
    console.log(temp)
    setFilteredProducts(temp)
    console.log(filteredProducts);
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const onPageProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(onPageProducts)
  const lastPage = Math.ceil(filteredProducts.length / productsPerPage);
  console.log(lastPage);
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
        <div className="col-md-6">Total Products: {filteredProducts.length}</div>
        <div className="col-md-6">
          <form className="input-group" onSubmit={searchHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Product ..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
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
            key={product.link}
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
