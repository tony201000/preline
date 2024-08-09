'use client';

import React from 'react'
import ModuleCalCpf from '../moduleMontantCPF/modal';

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
          <div className="hs-accordion-group">
            <div
              className="hs-accordion hs-accordion-active:bg-grey-100 rounded-xl p-6 
              dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                En quoi consiste la formation dans laquelle je serais inscrit ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="mt-2 text-gray-600 dark:text-neutral-400 overflow-hidden">
                  La formation dans laquelle vous serez inscrit est un bilan de compétences 100% en ligne.
                  Le centre de formation dont elle fait partie est entierement reconnu par L&rsquo;Etat.
                </p>
              </div>
            </div>
            {/* End Col */}
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                Dois-je suivre cette formation ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p className="mt-2 text-gray-600 dark:text-neutral-400 overflow-hidden">
                  Non, Vous ne devrez suivre aucune formation.
                  Cependant, vous recevrez par mail les documents comme-ci vous suiviez une formation.
                  Vous n&rsquo;avez pas besoin d&rsquo;y répondre ou de signer quoique ce soit.
                </p>
              </div>
            </div>
            {/* End Col */}
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                J&rsquo;ai recu un mail m&rsquo;invitant à un appel vidéo. Dois-je y participer ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="mt-2 text-gray-600 dark:text-neutral-400">
                  Non, comme indiqué précédemment, vous n&rsquo;avez pas besoin de répondre aux mails ou appels vidéos.
                  Ils sont envoyés dans le but de rendre officiel le fait que vous suiviez une formation.
                </p>
              </div>
            </div>
            {/* End Col */}
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                Dois-je payer quelque chose ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className="mt-2 text-gray-600 dark:text-neutral-400">
                  Depuis le 2 mai 2024 l&rsquo;Etat a mis en place une participation forfaitaire obligatoire de 100 €
                  pour les personnes souhaitant utiliser leur compte personnel de formation.</p>
                <p className="">Malheureusement, il est impossible de passer outre cette participation, mais vous en récupérerez bien plus.</p>
                <p className="">De plus il est possible de profiter du bon plan <a href="/Bourso2" className="text-red-900 font-semibold"> Boursorama </a>
                  pour récupérer 70 euros sans avancer d&rsquo;argent et jusqu&rsquo;a 220 euros !</p>
              </div>
            </div>
            {/* End Col */}
          </div>
          <div className="hs-accordion-group">
            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                Pourquoi je ne peux pas récupérer la totalité du montant annoncé sur mon compte de formation ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="mt-2 text-gray-600 dark:text-neutral-400">
                  En effet, il est impossible de récupérer tout l&rsquo;argent qui est sur votre compte de formation car
                  pour pouvoir accéder à cet argent bloqué, le centre de formation doit effectuer des démarches et cela a un cout!
                </p>
                <p className='text-gray-700'>Voici ce qui est déduit du montant total :</p>
                <li>Les taxes percues par l&rsquo;URSAAF : 23,6%</li>
                <li>Le montant nécessaire au centre de formation pour mener les démarches : salaires, suivi du dossier...</li>
                <li>Une commission de 100 euros</li>
                <p>Vérifie le montant que tu peux toucher grâce à ce module:</p><ModuleCalCpf />
              </div>
            </div>
            {/* End Col */}
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-six">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                Est-ce qu&rsquo;il y a un risque ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <p className="mt-2 text-gray-600 dark:text-neutral-400">
                  La société qui vous propose de récupérer votre argent est une société 100% légale.
                </p>  
                <p className="text-gray-700">Elle est enregistrée au RCS de Paris, et est listée officiellement dans les sociétés partenaires sur le site du CPF</p>     
                <p className="text-gray-700"> Pourquoi risquerait-elle de tuer la poule aux oeufs d&rsquo;or ?
                </p>
              </div>
            </div>
            {/* End Col */}
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/10"
              id="hs-basic-with-title-and-arrow-stretched-heading-seven">
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-seven">
                Est-ce que cette offre est permanente ?
                <svg
                  className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-seven"
                className="hs-accordion-content w-full hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-seven">
                <p className="text-gray-800 dark:text-neutral-200">
                Il n'y a pas de date limite pour demander à récupérer votre argent. 
                Ce qui veut dire que l'offre n'a pas de fin défini, elle peut durer plusieurs mois, années, ou quelques jours seulement.
                </p>
              </div>
            </div>
            {/* End Col */}
          </div>
        </div >
        {/* End Grid */}
      </div >
      {/* End FAQ */}
    </div>
  </>
)

export default FaqCPF;