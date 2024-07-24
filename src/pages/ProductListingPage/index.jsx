import React from 'react';
import { useProductsContext } from "@/contexts/ProductsContext";
import FilterCard from '@/components/FilterCard';
import ProductCard from '@/components/ProductCard';

const ProductListingPage = () => {
  const { products, search } = useProductsContext();

  const filterProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase()),
  );

  const hasSearch = search.trim().length > 0;

  return (
    <section className="flex items-center justify-center">
      <div className="px-24 gap-5 md:px-32">
        <div className="flex my-14 gap-1">
          {hasSearch && (
            <h2 className="flex gap-1 text-darkGray2 text-[1rem]">
              <span className="font-bold">
                Resultados para &quot;{search}&quot; -
              </span>
              <span className="font-normal">
                {filterProducts.length}{' produto'}
                {filterProducts.length !== 1 && 's'}
              </span>
            </h2>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <FilterCard />
            </div>
            <div className="flex flex-wrap gap-4">
              {filterProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListingPage;