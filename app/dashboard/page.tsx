// app/cpf/page.tsx
import React from 'react';
import CardMenu from '../../components/cardMenu';
import HeaderMember from '../../components/headerMember';
import ProtectedRoute from '@/components/protectedRoute';


const Dashboard = () => {
    return (
        <>
            <div>
                <HeaderMember />
                <div className="pt-20">
                    <ProtectedRoute>
                        <CardMenu />
                    </ProtectedRoute>
                </div>
            </div>
        </>
    );
};

export default Dashboard;