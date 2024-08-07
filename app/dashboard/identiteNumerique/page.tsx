// app/cpf/page.tsx
import React from 'react';
import Galerieb from '../../../components/galerieb';
import ProtectedRoute from '@/components/protectedRoute';



const RedirectPag = () => {
  return (
    <>
    <div>
        <div className="pt-20">
        <ProtectedRoute>
            <Galerieb />
        </ProtectedRoute>
        </div>
    </div>
    </>
);
};
export default RedirectPag;