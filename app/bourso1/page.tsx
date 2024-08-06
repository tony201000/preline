// app/bourso1/page.tsx
import React from 'react';
import Galerieb from '@/components/galerieb';
import HeaderMember from '@/components/headerMember';
import ProtectedRoute from '@/components/protectedRoute';

const Bourso1Page = () => {
  return (
        <>
    <HeaderMember />
    <main className="flex justify-center items-center h-screen bg-gray-100">
     <ProtectedRoute>
      <Galerieb />
      </ProtectedRoute>
    </main>
        </>
);
};

export default Bourso1Page;