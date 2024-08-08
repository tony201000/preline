// app/cpf/page.tsx
import React from 'react';
import HeaderMember from '../../../../components/global/headerMember';
import ProtectedRoute from '../../../../components/protectedRoute';
import '../../../../styles/imagesSlider.module.scss';
import dynamic from 'next/dynamic';


const DynamicImageSlider = dynamic(() => import('../../../../components/NoUse/imagesSlider'), { ssr: false });


const images = [
    'https://zupimages.net/up/24/32/ymba.jpg',
    'https://zupimages.net/up/24/32/o4ym.jpg',
    'https://zupimages.net/up/24/32/mmv2.jpg',
    'https://zupimages.net/up/24/32/surk.jpg',
    'https://zupimages.net/up/24/32/clpk.jpg',
    'https://zupimages.net/up/24/32/wzvy.jpg',
    'https://zupimages.net/up/24/32/l45f.jpg',
    'https://zupimages.net/up/24/32/fmea.jpg',
    'https://zupimages.net/up/24/32/conc.jpg'
  // Ajoute autant d'URL d'images que nécessaire
];

const RedirectPag: React.FC = () => {
  return (
    <>
    <div>
    <HeaderMember />
      <ProtectedRoute>
        <div className="gallery-container pt-20">
        <DynamicImageSlider images={images} />
        </div>
        </ProtectedRoute>
    </div>
    </>
);
};
export default RedirectPag;