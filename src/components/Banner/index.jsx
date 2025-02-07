import React from 'react';
import { motion } from 'framer-motion';
import OfferCard from '@/components/OfferCard';
import Ornament from '@/assets/ornament.png';
import whiteSneaker from '/white-sneaker.png';

const Banner = () => {
  return (
    <section className="flex items-center justify-center bg-lightGray3 px-24 py-5">
      <img
        src={Ornament}
        alt="Partículas brilhantes"
        className="h-36 w-36 absolute right-10 top-32 -translate-y-1/2"
      />
      <OfferCard
        title={{
          label: 'Queima de estoque Nike 🔥',
          style: 'text-darkGray',
        }}
        subtitle={{
          label: 'Melhores ofertas personalizadas',
          style: 'text-warning',
        }}
        description={{
          label:
            'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
          style: 'w-[400px]',
        }}
        button={{
          label: 'Ver Ofertas',
          style:
            'bg-primary font-bold w-48 h-10 text-white hover:bg-tertiary ease-in transition-all duration-300',
        }}
        className="flex flex-col w-1/2 h-80"
      />
      <div className="flex w-1/2">
        <motion.img
          src={whiteSneaker}
          className="w-full h-full"
          alt="Nike AIR"
          animate={{ y: [5, -5] }}
          transition={{
            y: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
