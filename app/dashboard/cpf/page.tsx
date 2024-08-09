// app/cpf/page.tsx
import React from "react";
import CPF from "../../../components/pages/cpf/cpfCentral";
import HeaderMember from "../../../components/global/headerMember";
import FaqCPF from "../../../components/pages/cpf/FAQCpf";
import HeroCpf from "../../../components/pages/cpf/heroCpf";
import ProtectedRoute from "../../../components/protectedRoute";

const CPFPage = () => {
  return (
    <>
      <div>
        <HeaderMember />
        <div className="pt-20">
          <ProtectedRoute>
            <HeroCpf />
            <CPF />
            <FaqCPF />
          </ProtectedRoute>
        </div>
      </div>
    </>
  );
};

export default CPFPage;
