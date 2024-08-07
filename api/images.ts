// pages/api/images.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '../utils/cloudinary';
import getBase64ImageUrl from '../utils/generateBlurPlaceholder';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute();

    const imagesWithBlurDataUrls = await Promise.all(
      results.resources.map(async (image: any) => ({
        id: image.asset_id,
        height: image.height,
        width: image.width,
        public_id: image.public_id,
        format: image.format,
        blurDataUrl: await getBase64ImageUrl(image),
      }))
    );

    res.status(200).json(imagesWithBlurDataUrls);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
