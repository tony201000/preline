'use client';

import React from 'react';
import HeaderMember from '../components/global/headerMember';
import Index from '../components/pages/index';

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
