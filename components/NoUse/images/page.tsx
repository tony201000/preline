import { CldImage } from 'next-cloudinary';
import React from 'react';

interface Image {
  url: string;
  public_id: string;
}

const fetchImages = async (): Promise<Image[]> => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=${process.env.CLOUDINARY_FOLDER}`;

  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + Buffer.from(`${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`).toString('base64'));

  const res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await res.json();
  return data.resources.map((resource: any) => ({
    url: resource.secure_url,
    public_id: resource.public_id,
  }));
};

const ImagesPage = async () => {
  const images: Image[] = await fetchImages();

  return (
    <div>
      <h1>Images from Cloudinary</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image: Image) => (
          <div key={image.public_id} style={{ margin: '10px' }}>
            <CldImage 
              src={image.public_id} 
              alt={image.public_id} 
              width={300} 
              height={200} 
              crop="fill" 
              gravity="auto" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesPage;
