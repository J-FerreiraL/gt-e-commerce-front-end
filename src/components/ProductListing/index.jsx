import ProductCard from '@/components/ProductCard';

const ProductListing = ({ products, alignment = "justify-start" }) => {
  return (
    <div className={`flex flex-wrap gap-5 ${alignment}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;