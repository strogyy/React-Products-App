import "./ProductsData.css";
import { Link } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
import { useState, useEffect } from "react";
import SearchBox from "../Search-Box/Search-Box";

const ProductsData = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    productsARR: products,
    loading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products?offset=10&limit=160");

  const onSearchFunction = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return product.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredProducts(newFilteredProducts);
  }, [products, searchField]);

  return (
    <div className="ProductsData">
      <h1 className="header-products">Products</h1>
   

      <SearchBox
        type="search"
        onChangeFunction={onSearchFunction}
        field={searchField}
        placeholder="Search Product..."
      />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <Link className="aoflink" to={`/products/${product.id}`}>
              <div className="product-inner">
                <img src={product.images[1]} alt="{}" className="product-img" />
                <div className="product-texts">
                  <h2 className="product-title">
                    {product.title} for only ${product.price}
                  </h2>
                  <h3 className="product-description">{product.description}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsData;
