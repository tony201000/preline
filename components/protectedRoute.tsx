"use client";
import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (!user) {
        router.push("/login"); // Assurez-vous que vous avez une page de connexion configurée
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
