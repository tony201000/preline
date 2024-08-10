// app/cpf/page.tsx
import React from "react";
import Redirect from "../../components/redirect";
import { GetServerSideProps } from "next";
import { withAuth } from "../../lib/authUtils"; // Chemin à adapter selon ton arborescence

const RedirectPage = () => {
  return (
    <>
      <div>
        <div className="pt-20">
            <Redirect />
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

export default RedirectPage;
