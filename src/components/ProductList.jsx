import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
      <div className="my-auto flex flex-wrap gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
};

export default ProductList;
