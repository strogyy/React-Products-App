import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [productsARR, setProductsARR] = useState([]);
  const [productsNull, setProductsNull] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("res issue");
        } else {
          setError(null);
        }
        return res.json();
      })
      .then((data) => {
        setProductsARR(data);
        setProductsNull(data)
        setLoading(false);
      })
      .catch((err) => {
        setError(`error: ${err.message}`);
        setLoading(false);
      });
  }, [url]);

  return { productsNull, productsARR, loading, error };
};

export default useFetch;
