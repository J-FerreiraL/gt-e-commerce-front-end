import React from 'react';
import { Products }  from '@/mock/mock';
import FilterCard from '@/components/FilterCard';
import ProductCard from '@/components/ProductCard';
import { useProductsContext } from '@/contexts/ProductsContext';

const ProductListing = () => {
  const { search } = useProductsContext();

  const filterProducts = Products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase()),
  );

  const isSearch = search.trim().length > 0;

  return (
    <div className="grid grid-cols-3 gap-5">
      {filterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;