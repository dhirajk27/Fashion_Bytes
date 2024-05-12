// components/KidsProducts.jsx

import React, { useState, useEffect } from "react";
import Product from "./Product";
import { products } from "../data"; // Import products from data.js

const KidsProducts = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate API fetch delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products
          .filter((product) => product.category === "kids")
          .map((product) => <Product key={product.id} post={product} />)
      )}
    </div>
  );
};

export default KidsProducts;
