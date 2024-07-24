import productNikeImage from '@/assets/white-sneaker.png';

const ProductCard = ({ product }) => {
  return(
    <div>
      <div className='bg-white h-80 w-[292px] rounded flex items-center mb-6'>
        <img src={productNikeImage}/>
      </div>

      <div>
        <span className='text-lightGray text-xs font-bold'>
          {product.type}
        </span>
        <p className='text-darkGray2 text-lg w-[292px]'>
          {product.title}
        </p>
        <div className='flex gap-2'>
          {product.originalPrice && (
            <p className='text-lightGray text-lg line-through'>
              ${product.originalPrice}
            </p>
          )}
          <p className='text-darkGray text-lg font-bold'>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;