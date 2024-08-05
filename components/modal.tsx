'use client';

import React, { useState } from 'react';
import ProtectedRoute from './protectedRoute';

const ModuleCalCpf: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [montantInitial, setMontantInitial] = useState<number | string>('');
  const [resultat, setResultat] = useState<string>('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const calculerMontant = (e: React.FormEvent) => {
    e.preventDefault();
    const x = Number(montantInitial);
    if (isNaN(x)) return;
    const montantApresTaxe = 0.764 * x;
    const montantApresCommission = montantApresTaxe - 100;
    const montantFinal = montantApresCommission / 2;
    const resultatFinal = Math.floor(montantFinal / 100) * 100;
    setResultat(`Tu peux récupérer la somme de ${resultatFinal} euros`);
  };

  return (
    <>
      <div className="text-center">
        {/* Bouton d&rsquo;accès au modal */}
        <button
          type="button"
          onClick={toggleModal}
          className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="dialog"
          aria-expanded={isModalOpen ? 'true' : 'false'}
          aria-controls="hs-task-created-alert"
        >
          Votre Montant
        </button>
        {/* Fin bouton d&rsquo;accès au modal */}
      </div>
      {isModalOpen && (
        <div
          id="hs-task-created-alert"
          className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto flex items-center justify-center bg-gray-900 bg-opacity-50"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="hs-task-created-alert-label"
        >
          {/* Start Modal */}
          <div className="relative bg-white shadow-lg rounded-xl dark:bg-neutral-900 w-full max-w-lg mx-4 sm:mx-auto">
            {/* Close button */}
            <div className="absolute top-2 right-2">
              <button
                type="button"
                className="inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                onClick={toggleModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-10 text-center">
              {/* Contenu du modal */}
              <div className="p-5">
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
              {/* Fin contenu du modal */}
            </div>
          </div>
        </div>
      )}
      </>
  );
};

export default ModuleCalCpf;
