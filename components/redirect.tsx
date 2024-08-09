"use client";

import { useEffect } from "react";

const Redirect: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://bour.so/1lZ3jMeVAO", "_blank");
    }, 10000); // redirection après 5 secondes

    return () => clearTimeout(timer);
  }, []);

  const codeParrainage = "ANVI8090";
  const nom = "VINCENT";
  const prenom = "ANTHONY";

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Parrainage Boursobank</h1>
      <p className="mb-2">
        Vous allez être redirigé vers la page d&rsquo;inscription de Boursobank.
      </p>
      <p className="mb-2">
        Utilisez le code de parrainage ci-dessous lors de votre inscription :
      </p>
      <p className="mb-2">
        Code de parrainage : <strong>{codeParrainage}</strong>
      </p>
      <p className="mb-2">
        Nom : <strong>{nom}</strong>
      </p>
      <p className="mb-2">
        Prénom : <strong>{prenom}</strong>
      </p>
      <p className="mt-4">Redirection dans quelques secondes...</p>
      <p className="mt-4">
        <a href="https://bour.so/1lZ3jMeVAO" target="_blank">
          ou cliquez ici pour acceder au site
        </a>
      </p>
    </div>
  );
};

export default Redirect;
