// FaqModele.tsx
import React, { useState } from "react";

interface FaqModeleProps {
  id: string;
  question: string;
  children: React.ReactNode;
}

const FaqModele: React.FC<FaqModeleProps> = ({ id, question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`hs-accordion ${isOpen ? "hs-accordion-active:bg-gray-100 dark:hs-accordion-active:bg-white/10" : ""} rounded-xl p-6`}
      id={id}
    >
      <button
        onClick={toggleAccordion}
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
        aria-controls={`${id}-collapse`}
      >
        {question}
        <svg
          className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isOpen ? "hidden" : "block"}`}
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
          className={`shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400 ${isOpen ? "block" : "hidden"}`}
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
        id={`${id}-collapse`}
        className={`hs-accordion-content w-full ${isOpen ? "block" : "hidden"} transition-[height] duration-300`}
        role="region"
        aria-labelledby={id}
      >
        <div className="mt-2 text-gray-600 dark:text-neutral-400">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FaqModele;
