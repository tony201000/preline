"use client";

import React, { useState } from "react";
import Image from "next/image";

const images: string[] = [
  "https://zupimages.net/up/24/31/v3l9.jpg",
  "https://zupimages.net/up/24/31/bkl1.jpg",
  "https://zupimages.net/up/24/31/zxhk.jpg",
  "https://zupimages.net/up/24/31/wja5.jpg",
  "https://zupimages.net/up/24/31/uf7g.jpg",
  "https://zupimages.net/up/24/31/dwn1.jpg",
  "https://zupimages.net/up/24/31/o3ld.jpg",
  // Ajoutez d'autres URL d'images ici
];

const Bourso: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openFullscreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const renderImages = () => {
    const displayedImages = [];
    for (let i = 0; i < 3; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      displayedImages.push(
        <div
          key={imageIndex}
          className="w-1/3 h-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          onClick={() => openFullscreen(imageIndex)}
        >
          <Image
            src={images[imageIndex]}
            alt={`Image ${imageIndex + 1}`}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      );
    }
    return displayedImages;
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
                L&apos;offre la plus convoitée depuis des années avec Boursorama
              </h2>
              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Retrouvez en image ci-dessous toutes les informations sur
                l&apos;offre Boursorama qui fait des milliers d&apos;heureux
                chaque année.
              </p>
            </div>
            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Comme toutes nos offres sur ce site, elles sont 100% gratuites et
              sans engagement...
            </p>
            {/* Début galerie */}
            <div className="w-full object-cover rounded-xl">
              <div className="flex items-center">
                <button onClick={handlePrev} className="p-4 text-4xl">
                  &lt;
                </button>
                <div className="flex overflow-hidden w-full">
                  {renderImages()}
                </div>
                <button onClick={handleNext} className="p-4 text-4xl">
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
                  <Image
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    width={1000}
                    height={1000}
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
            {/* Fin galerie */}
            <p className="text-lg text-gray-800 dark:text-neutral-200">
              As we&apos;ve grown, we&apos;ve seen how Preline has helped...
            </p>
            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                To say that switching to Preline has been life-changing...
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
