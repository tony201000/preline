// app/components/galerieb.tsx
'use client';
import React, { useState } from 'react';
import ProtectedRoute from './protectedRoute';

const images: string[] = [
  'https://zupimages.net/up/24/31/v3l9.jpg',
  'https://zupimages.net/up/24/31/bkl1.jpg',
  'https://zupimages.net/up/24/31/zxhk.jpg',
  'https://zupimages.net/up/24/31/wja5.jpg',
  'https://zupimages.net/up/24/31/uf7g.jpg',
  'https://zupimages.net/up/24/31/dwn1.jpg',
  'https://zupimages.net/up/24/31/o3ld.jpg',
  // Ajoutez d'autres URL d'images ici
];


const Bourso: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openFullscreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
  <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    {/* Blog Article */}
    <div className="max-w-2xl">
      {/* Content */}
      <div className="space-y-5 md:space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
            L'offre la plus convoitee depuis des annees avec Boursorama          </h2>
          <p className="text-lg text-gray-800 dark:text-neutral-200">
            Retrouvez en image ci-dessous toutes les informations sur l'offre Boursorama qui fait des milliers d'heureux chaque annee.
          </p>
        </div>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
          Comme toutes nos offres sur ce site, elles sont 100% gratuites et sans engagement. Loffre de Boursorama est divise en 3 parties. 
          L'ordre doit etre respecte pour beneficier de l'ensemble des primes, mais vous pouvez aussi choisir de ne pas beneficier de certaines primes si vous le souhaitez.
          Vous pouvez par exemple beneficier de l'offre de bienvenue sans condition 1, et ensuite decider de ne pas beneficier des autres primes.
        </p>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
          1- Une prime de bienvenue de 70€ offerte pour toute ouverture de compte sans condition ! Pas besoin de deposer de l'argent ou d'utiliser le compte.
          Pour un compte 100% gratuit et sans conditions, choisissez l'option sans carte bancaire ou l'option avec carte virtuelle. Les cartes physiques sont gratuites sous condition d'utilisation mensuelle.
        </p>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
          2- Une prime de 80€ offerte pour tout depot de 300€ minimum sur le compte, ou de 40€ pour tout depot entre 50€ et 299€.
          L'argent est a vous et peut etre retire a tout moment, sans frais. C'est comme ci vous faisiez un virement de votre compte courant vers votre livret A.
        </p>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
         3- Une prime de 70€ offerte pour toute souscription au service gratuit EasyMove qui permet de domicilier automatiquement vos prelevements et virements recurents de votre ancien compte vers votre nouveau compte Boursorama.
        </p>
        {/* debut galerie*/}
        <div className="w-full object-cover rounded-xl">
            <div className="flex items-center">
                <button
                  onClick={handlePrev}
                  className="p-4 text-4xl"
                >
                  &lt;
                </button>
                <div className="flex overflow-hidden w-full">
                  {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${currentIndex + index + 1}`}
                      className="w-1/3 h-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                      onClick={() => openFullscreen(currentIndex + index)}
                    />
                  ))}
                  {currentIndex + 3 > images.length && images.slice(0, (currentIndex + 3) % images.length).map((image, index) => (
                    <img
                      key={images.length + index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-1/3 h-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                      onClick={() => openFullscreen(index)}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="p-4 text-4xl"
                >
                  &gt;
                </button>
            </div>

            {/* Image en plein écran */}
            {isFullscreen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <button
                  onClick={closeFullscreen}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  &times;
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="h-auto max-h-full max-w-full object-contain"
                />
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow text-4xl"
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow text-4xl"
                >
                    &gt;
                </button>
            </div>
              )}
        </div>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
          As we've grown, we've seen how Preline has helped companies such as
          Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their
          designers closer together to create amazing things. We've also learned
          that when the culture of sharing is brought in earlier, the better
          teams adapt and communicate with one another.
        </p>
        <p className="text-lg text-gray-800 dark:text-neutral-200">
          That's why we are excited to share that we now have a{" "}
          <a
            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
            href="#"
          >
            free version of Preline
          </a>
          , which will allow individual designers, startups and other small
          teams a chance to create a culture of openness early on.
        </p>
        <blockquote className="text-center p-4 sm:px-7">
          <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
            To say that switching to Preline has been life-changing is an
            understatement. My business has tripled and I got my life back.
          </p>
          <p className="mt-5 text-gray-800 dark:text-neutral-200">
            Nicole Grazioso
          </p>
        </blockquote>
      </div>
      {/* End Content */}
    </div>
    {/* End Blog Article */}
  </div> 
  </>
  );
};

export default Bourso;
