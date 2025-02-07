import React from 'react';
import { ProductCategory, ProductSession } from '@/enum';
import Section from '@/components/Section';
import ProductListing from '@/components/ProductListing';

export const HotSection = () => {
  const hotProducts = [
    {
      id: '14',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Air Jordan 11 Retro Low 'Pink Snakeskin'",
      price: 1499.99,
      discount: 30,
      image: "https://image.goat.com/attachments/product_template_pictures/images/021/357/907/original/478963_00.png.png"
    },
    {
      id: '15',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Air Jordan 11 Retro 'Space Jam'",
      price: 2199.99,
      discount: 20,
      image: "https://image.goat.com/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png"
    },
    {
      id: '16',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'",
      price: 5490.99,
      discount: 30,
      image: "https://image.goat.com/attachments/product_template_pictures/images/012/219/518/original/335047_00.png.png"
    },
    {
      id: '17',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Travis Scott x Air Jordan 4 Retro 'Cactus Jack'",
      price: 9999.99,
      discount: 30,
      image: "https://image.goat.com/attachments/product_template_pictures/images/012/478/518/original/365514_00.png.png"
    },
    {
      id: '18',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Air Jordan 1 Retro High OG 'Turbo Green'",
      price: 2149.9,
      image: "https://image.goat.com/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png"
    },
    {
      id: '19',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Air Jordan 1 Retro High OG 'Crimson Tint'",
      price: 1499.99,
      image: "https://image.goat.com/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png"
    },
    {
      id: '20',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Air Jordan 1 Retro High OG Spider Man 'Origin Story'",
      price: 1999.99,
      image: "https://image.goat.com/attachments/product_template_pictures/images/016/867/969/original/478648_00.png.png"
    },
    {
      id: '21',
      type: "Tênis",
      session: ProductSession.ADULT,
      category: ProductCategory.CASUAL,
      title: "Air Jordan 1 Retro High SB 'Lakers'",
      price: 3640.9,
      image: "https://image.goat.com/attachments/product_template_pictures/images/020/270/533/original/CD6578_507.png.png"
    }
  ];

  return (
    <div className="flex items-center justify-center px-24 py-10 md:px-32">
      <Section
        title="Produtos em alta"
        titleAlign="text-left"
        className="flex"
        button={true}
      >
        <ProductListing products={hotProducts} alignment="justify-center"/>
      </Section>
    </div>
  );
};
