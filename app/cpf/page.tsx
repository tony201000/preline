// app/cpf/page.tsx
import React from 'react';
import CPF from '../../components/cpf';
import HeaderMember from '../../components/headerMember';
import FaqCPF from '@/components/faqCpf';
import ModuleCalCpf from '@/components/modal';
import HeroCpf from '@/components/heroCpf';

const CPFPage = () => {
  return (
    <>
    <div>
        <HeaderMember />
        <div className="pt-20">
            <HeroCpf />
            <CPF />
            <FaqCPF />
            <ModuleCalCpf />
        </div>
    </div>
    </>
);
};

export default CPFPage;