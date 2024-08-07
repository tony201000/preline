'use client';
import type { NextPage } from "next";
import HeaderMember from "../../components/global/headerMember";
import { useSearchParams } from "next/navigation";
import ImageGallery from "../../components/galerie/ImageGallery";
import Modal from "../../components/galerie/Modal";
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto";
import { useState } from "react";
import type { ImageProps } from "../../utils/types";

const Home: NextPage = () => {
  const searchParams = useSearchParams();
  const photoId = searchParams.get("photoId");

  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const [images, setImages] = useState<ImageProps[]>([]);

  return (
    <>
      <HeaderMember />
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              const photoIdNumber = typeof photoId === 'string' ? parseInt(photoId, 10) : null;
              setLastViewedPhoto(photoIdNumber);
            }}
          />
        )}
        <ImageGallery 
          images={images} 
          setImages={setImages} 
          lastViewedPhoto={lastViewedPhoto} 
          setLastViewedPhoto={setLastViewedPhoto} 
        />
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Thank you to 
        <a href="https://edelsonphotography.com/" target="_blank" className="font-semibold hover:text-white" rel="noreferrer">
          Josh Edelson
        </a>
        , 
        <a href="https://www.newrevmedia.com/" target="_blank" className="font-semibold hover:text-white" rel="noreferrer">
          Jenny Morgan
        </a>
        , and 
        <a href="https://www.garysextonphotography.com/" target="_blank" className="font-semibold hover:text-white" rel="noreferrer">
          Gary Sexton
        </a> for the pictures.
      </footer>
    </>
  );
};

export default Home;
