// app/cpf/page.tsx
import React from 'react';
import Login from '../../components/global/NonAutorise'; 


const nonautorise = () => {
    return (
        <>
                <div className="pt-20">
                        <Login />
                </div>
        </>
    );
};

export default nonautorise;