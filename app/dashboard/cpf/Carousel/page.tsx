"use client";

import React from "react";
import HeaderMember from "@/components/global/headerMember";
import Carousel from "@/components/galerie/Carousel";
import { GetServerSideProps } from "next";
import { withAuth } from "../../../../lib/authUtils"; // Chemin à adapter selon ton arborescence

const CarouselPage: React.FC = () => {
  return (
    <div>
      <HeaderMember />
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth(async (context) => {
  // Ici, tu peux ajouter des props spécifiques à cette page si nécessaire
  return {
    props: {}, // Ajoute d'autres props si besoin
  };
});
export default CarouselPage;
