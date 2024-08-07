// app/cpf/page.tsx
import React from 'react';
import Redirect from '../../components/redirect';
import ProtectedRoute from '../../components/protectedRoute';



const RedirectPage = () => {
  return (
    <>
    <div>
        <div className="pt-20">
            <ProtectedRoute>
            <Redirect />
            </ProtectedRoute>
        </div>
    </div>
    </>
);
};

export default RedirectPage;