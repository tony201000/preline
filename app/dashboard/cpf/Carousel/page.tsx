'use client';

import React from 'react';
import HeaderMember from '@/components/global/headerMember';
import Carousel from '@/components/galerie/Carousel';

const CarouselPage: React.FC = () => {
  return (
    <>
      <div>
        <HeaderMember />
          <div>
            <Carousel />
          </div>
      </div>
    </>
  );
};
export default CarouselPage; 