import React from 'react';
import {
  PiTShirtThin,
  PiPantsThin,
  PiBaseballCapThin,
  PiHeadphonesThin,
  PiSneakerThin,
} from 'react-icons/pi';

import Section from '@/components/Section';
import FeaturedCard from '@/components/FeaturedCard';
import CategoryCard from '@/components/CategoryCard';

import dropSupreme from '@/assets/drop-supreme.png';
import dropAdidas from '@/assets/drop-adidas.png';
import dropBass from '@/assets/drop-bass.png';

export const CollectionSection = () => {
  return React.createElement(
    'div',
    { className: 'flex flex-col items-center justify-center px-24 py-10 md:px-32' },
    React.createElement(
      Section,
      {
        title: 'Coleções em destaque',
        titleAlign: 'text-left',
        className: 'flex gap-4',
      },
      React.createElement(FeaturedCard, {
        title: 'Novo drop Supreme',
        discount: 30,
        image: {
          src: dropSupreme,
          alt: 'Drop Supreme',
        },
      }),
      React.createElement(FeaturedCard, {
        title: 'Coleção Adidas',
        discount: 30,
        image: {
          src: dropAdidas,
          alt: 'Drop Adidas',
        },
      }),
      React.createElement(FeaturedCard, {
        title: 'Novo Beats Bass',
        discount: 30,
        image: {
          src: dropBass,
          alt: 'Drop Bass',
        },
      })
    ),
    React.createElement(
      Section,
      {
        title: 'Coleções em destaque',
        titleAlign: 'text-center',
        className: 'flex gap-4',
      },
      React.createElement(CategoryCard, { title: 'Camisetas', icon: PiTShirtThin }),
      React.createElement(CategoryCard, { title: 'Calças', icon: PiPantsThin }),
      React.createElement(CategoryCard, { title: 'Bonés', icon: PiBaseballCapThin }),
      React.createElement(CategoryCard, { title: 'Headphones', icon: PiHeadphonesThin }),
      React.createElement(CategoryCard, { title: 'Tênis', icon: PiSneakerThin })
    )
  );
};
