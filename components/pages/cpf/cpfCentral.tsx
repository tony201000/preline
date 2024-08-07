'use client';

import React, { useState, useEffect } from 'react';
import ModuleCalCpf from '../../moduleMontantCPF/modal';
import Image from 'next/image';

const CPF: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {/* Approach */}
      <div className="bg-blue-600/70">
        {/* Approach */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <Image
              className="w-full object-cover rounded-xl"
              src="https://i.ibb.co/6NwG7Zh/Souriez-et-recuperez-ce-qui-vous-appartient.jpg"
              alt="Souriez, et récupérez ce qui vous appartient"
              layout="responsive"  // ou "intrinsic", "fixed", selon tes besoins
              width={1200}  // largeur de l&rsquo;image en pixels
              height={675}  // hauteur de l&rsquo;image en pixels
            />
            </div>
            {/* End Col */}
            {/* Timeline */}
            <div>
              {/* Heading */}
              <div className="mb-4">
                <h3 className="text-[#ff0] text-xs font-medium uppercase">
                  Étapes
                </h3>
              </div>
              {/* End Heading */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-black">
                    <span className="text-white">
                      Se connecter au site officiel du CPF.
                    </span>
                    <p>Pour cela vous devez vous connecter sur </p>
                    <a href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/" target='_blank' className='hover:text-red-900'> moncompteformation.gouv.fr </a>
                    et utiliser le service de LAPOSTE : <b>Identité Numérique</b>, pour vous connecter.
                    <a href="/dashboard/identiteNumerique" target='_blank' className="text-sm lg:text-base hover:text-red-900 italic"> Cliquez ici pour accéder au guide d&rsquo;inscription à l&rsquo;Identité Numérique.</a>                
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-black">
                    <span className="text-white">
                      Consulter les montants disponibles.
                    </span>
                    <p>Le montant de votre CPF est indiqué sur votre compte CPF, directement après vous être connecté. </p>
                    <p>Une fois en possession de ce montant, utilisez ce module pour connaître le montant convertible en argent:
                      <ModuleCalCpf />
                    </p>
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-black">
                    <span className="text-white">Contactez votre ami</span>
                    <p>Votre ami vous mettra en relation avec la société partenaire.</p>
                    <p className='font-semibold'>Moins de 30 minutes suffisent !</p>
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5 ms-1">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-black">
                    <span className="text-white">Réception des gains</span>
                    <p>Quelques jours après, vous recevrez l&rsquo;argent par virement bancaire sur votre compte.</p>
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  />
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  />
                </svg>
                Envoyez un message à votre ami et commencez au plus vite !
              </a>
            </div>
            {/* End Timeline */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Approach */}
    </>
  );
};

export default CPF;
