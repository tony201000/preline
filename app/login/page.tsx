// app/cpf/page.tsx
import React from 'react';
import Login from '../../components/login';
import ProtectedRoute from '@/components/protectedRoute';


const nonautorise = () => {
    return (
        <>
            <div>
                <Login />
                <div className="pt-20">
                    <ProtectedRoute>
                        <Login />
                    </ProtectedRoute>
                </div>
            </div>
        </>
    );
};

export default nonautorise;