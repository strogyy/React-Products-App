import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
import useFetch from "../useFetch/useFetch";

const ProductDetails = () => {
  
  
  const { id } = useParams();
  const { productsNull:product, loading, error } = useFetch(`https://api.escuelajs.co/api/v1/products/${id}`);

  return (
    <div className="ProductDetails">
      <h2 className="header-details">Details of product - {id}</h2>


      {loading && <div className="loading">Loading...</div>}

      {error !== null ? <div className="error">{error}</div> :
      <div className="detail-product-container">
        <div className="detail-product-inner">
          <h1 className="detail-product-header">
            {product && product.title}
          </h1>

          <img
            src={product && product.images[0]}
            alt=""
            className="product-img"
          />
          <img
            src={product && product.images[2]}
            alt=""
            className="product-img"
          />
          <img
            src={product && product.category.image}
            alt=""
            className="product-img"
          />

          <h4 className="product-description">
            {product && product.description}
          </h4>
          <h2 className="product-title">
            For only ${product &&  product.price}
         </h2>
        </div>
      </div>}

      <Link to="/" className="goBackButton">Home Page</Link>
   
      

    </div>
  );
};

export default ProductDetails;