"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');

      const initializePreline = () => {
        try {
          if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
            window.HSStaticMethods.autoInit();

            // Log all elements to debug attributes
            const allElements = document.querySelectorAll('*');
            allElements.forEach(el => {
              if (el.hasAttribute('data-redeviation-bs-uid')) {
                console.log('Element with data-redeviation-bs-uid:', el);
              }
            });
          } else {
            console.error("HSStaticMethods.autoInit is not available");
          }
        } catch (error) {
          console.error("Error during HSStaticMethods.autoInit:", error);
          setTimeout(initializePreline, 100); // Retry initialization after a short delay
        }
      };

      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initializePreline();
      } else {
        document.addEventListener('DOMContentLoaded', initializePreline);
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
