// FaqCPF.tsx
'use client';

import React from 'react';
import FaqData from '../../../public/FaqData';

const FaqCPF = () => (
  <>
    {/* FAQ */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-neutral-200">
          Questions fréquemment posées
        </h2>
      </div>
      {/* End Title */}
      <div className="max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <FaqData />
        </div>
        {/* End Grid */}
      </div>
      {/* End FAQ */}
    </div>
  </>
);

export default FaqCPF;
