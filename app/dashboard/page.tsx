// app/cpf/page.tsx
import React from 'react';
import CardMenu from '../../components/cardMenu';
import HeaderMember from '../../components/headerMember';


const Dashboard = () => {
  return (
    <>
    <div>
        <HeaderMember />
        <div className="pt-20">
            <CardMenu />
        </div>
    </div>
    </>
);
};

export default Dashboard;