import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext({});

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    session: [],
    category: [],
    brand: [],
    gender: [],
  });
  const [order, setOrder] = useState([
    { label: 'RELEVANT', value: 'RELEVANT' },
    { label: 'LOWPRICE', value: 'LOWPRICE' },
    { label: 'HIGHPRICE', value: 'HIGHPRICE' },
  ]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        filters,
        setFilters,
        order,
        setOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductContext);
