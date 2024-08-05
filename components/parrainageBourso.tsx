'use client';

import React from 'react';
import ProtectedRoute from './protectedRoute';



  const ParrainageBourso: React.FC = () => {
    const openBoursobank = () => {
      window.open("/redirect", "_blank");
    };

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={openBoursobank}
        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        S&rsquo;inscrire
      </button>
    </div>
  );
};

export default ParrainageBourso;
