'use client';

import React from 'react';
import HeaderMember from '@/components/headerMember';
import Index from '@/components/index';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <HeaderMember />
          <div>
            <Index />
          </div>
      </div>
    </>
  );
};
export default HomePage; 
