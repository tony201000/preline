// app/bourso1/page.tsx
import React from 'react';
import Galerieb from '@/components/galerieb';
import HeaderMember from '@/components/headerMember';

const Bourso1Page = () => {
  return (
        <>
    <HeaderMember />
    <main className="flex justify-center items-center h-screen bg-gray-100">
     
      <Galerieb />
    </main>
        </>
);
};

export default Bourso1Page;