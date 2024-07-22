import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <ProductContext.Provider
      value={{ products, setProducts, search, setSearch }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
