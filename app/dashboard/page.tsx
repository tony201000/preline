// app/cpf/page.tsx
import React from "react";
import CardMenu from "../../components/cardMenu";
import HeaderMember from "../../components/global/headerMember";
import { GetServerSideProps } from "next";
import { withAuth } from "../../lib/authUtils"; // Chemin à adapter selon ton arborescence

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

export const getServerSideProps: GetServerSideProps = withAuth(async (context) => {
  // Ici, tu peux ajouter des props spécifiques à cette page si nécessaire
  return {
    props: {}, // Ajoute d'autres props si besoin
  };
});

export default Dashboard;
