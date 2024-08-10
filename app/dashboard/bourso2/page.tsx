// app/bourso1/page.tsx
import React from "react";
import Bourso from "../../../components/pages/bourso";
import HeaderMember from "../../../components/global/headerMember";
import { GetServerSideProps } from "next";
import { withAuth } from "../../../lib/authUtils"; // Chemin à adapter selon ton arborescence

const BoursoPage: React.FC = () => {
  return (
    <>
      <div>
        <HeaderMember />
        <div className="pt-20">
          <Bourso />
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

export default BoursoPage;
