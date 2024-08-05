'use client';
// app/CalculDeMontant.tsx

import React, { useState } from 'react';
import ProtectedRoute from './protectedRoute';

const CalculDeMontant: React.FC = () => {
  const [montantInitial, setMontantInitial] = useState<number | string>('');
  const [resultat, setResultat] = useState<string>('');

  const calculerMontant = (e: React.FormEvent) => {
    e.preventDefault();
    const x = Number(montantInitial);
    if (isNaN(x)) return;
    const montantApresTaxe = 0.764 * x;
    const montantApresCommission = montantApresTaxe - 100;
    const montantFinal = montantApresCommission / 2;
    const resultatFinal = Math.floor(montantFinal / 100) * 100;
    setResultat(`En Cash tu toucheras la somme de ${resultatFinal} euros`);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-80 text-center mx-auto mt-10">
      <h1 className="text-2xl text-gray-800">Calcul de Montant</h1>
      <form onSubmit={calculerMontant} className="mt-5">
        <label htmlFor="montantInitial" className="block text-gray-600 mb-2">
          Montant initial du CPF (en euros) :
        </label>
        <input
          type="number"
          id="montantInitial"
          name="montantInitial"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={montantInitial}
          onChange={(e) => setMontantInitial(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
        >
          Calculer
        </button>
      </form>
      {resultat && <p className="mt-5 text-lg text-gray-800">{resultat}</p>}
    </div>
  );
};

export default CalculDeMontant;
