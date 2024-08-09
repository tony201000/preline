// app/bourso1/page.tsx
import React from "react";
import Bourso from "../../../components/pages/bourso";
import HeaderMember from "../../../components/global/headerMember";
import ProtectedRoute from "../../../components/protectedRoute";

const BoursoPage = () => {
  return (
    <>
      <div>
        <HeaderMember />
        <div className="pt-20">
          <ProtectedRoute>
            <Bourso />
          </ProtectedRoute>
        </div>
      </div>
    </>
  );
};

export default BoursoPage;
