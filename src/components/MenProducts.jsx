// components/MenProducts.jsx

import React, { useState, useEffect } from "react";
import Product from "./Product";

const MenProducts = () => {
  const API_URL = "https://fakestoreapi.com/products/category/men's clothing";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching men's products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} post={product} />
        ))
      )}
    </div>
  );
};

export default MenProducts;
