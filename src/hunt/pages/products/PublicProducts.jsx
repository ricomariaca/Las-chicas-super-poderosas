import React, { useState, useEffect } from "react";
import { loadProducts } from "../../helpers/loadProducts";


export const PublicProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await loadProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2> Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} 
            {product.ProductURL} 
            {product.Tage} 
            {product.ProductDescription}
            
          </li>
        ))}
      </ul>
    </div>
  );
};
