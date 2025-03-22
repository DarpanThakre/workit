import React from 'react';
import ProductCard from './ProductCard';

function TjProductList({ products }) {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default TjProductList;
