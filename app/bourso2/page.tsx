// app/bourso1/page.tsx
import React from 'react';
import Bourso from '@/components/bourso';
import HeaderMember from '@/components/headerMember';

const BoursoPage = () => {
  return (
    <>
    <div>
        <HeaderMember />
        <div className="pt-20">
            <Bourso />
        </div>
    </div>
    </>
);
};

export default BoursoPage;