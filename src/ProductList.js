
import React from 'react';

function ProductList({ products, setProducts }) {
  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.manufacturer} - ${product.salePrice}
            {     1   }
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
