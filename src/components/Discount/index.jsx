import React from 'react';

const Discount = ({ discountOffer, className }) => {
  return (
    <span
      className={`flex items-center justify-center bg-productOff text-darkGray2 font-bold rounded-full mb-4 w-24 h-8 ${className}`}
    >
      {discountOffer}% OFF
    </span>
  );
};

export default Discount;
