import React, { createContext, useContext, useState } from 'react';
import Products from '@/mocks/mock';

const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(Products);
  const [search, setSearch] = useState('');

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, search, setSearch }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
