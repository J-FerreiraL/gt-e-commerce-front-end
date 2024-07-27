import React from 'react';
import { HeroSection } from './HeroSection';
import { CollectionSection } from './CollectionSection';
import { SpecialSection } from './SpecialSection';
import { HotSection } from './HotSection';

export const HomePage = () => {
  return React.createElement(
    'main',
    null,
    React.createElement(HeroSection),
    React.createElement(CollectionSection),
    React.createElement(HotSection),
    React.createElement(SpecialSection)
  );
};
