// app/cpf/page.tsx
import React from "react";
import CPF from "../../../components/pages/cpf/cpfCentral";
import HeaderMember from "../../../components/global/headerMember";
import FaqCPF from "../../../components/pages/cpf/FAQCpf";
import HeroCpf from "../../../components/pages/cpf/heroCpf";
import { GetServerSideProps } from "next";
import { withAuth } from "../../../lib/authUtils"; // Chemin à adapter selon ton arborescence

const CPFPage = () => {
  return (
    <>
      <div>
        <HeaderMember />
        <div className="pt-20">
            <HeroCpf />
            <CPF />
            <FaqCPF />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async (context) => {
  // Ici, tu peux ajouter des props spécifiques à cette page si nécessaire
  return {
    props: {}, // Ajoute d'autres props si besoin
  };
});

export default CPFPage;
