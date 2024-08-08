import type { Config } from "tailwindcss"; // Importation du type Config de Tailwind CSS

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true, // Active les effets de survol uniquement si pris en charge
  },

  content: [
    // Chemins pour rechercher les classes Tailwind utilisées
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/src/**/*.js', // Chemin pour le plugin Preline
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Gradient radial
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Gradient conique
      },
        },
  plugins: [
    require('preline/plugin'), // Intégration du plugin Preline
  ],
}
};
export default config; // Exportation de la configuration
