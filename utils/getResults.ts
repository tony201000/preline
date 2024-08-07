import { v2 as cloudinary } from 'cloudinary';

let cachedResults: any;

export default async function getResults(): Promise<any> {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.api.resources({
      type: 'upload',
      prefix: process.env.CLOUDINARY_FOLDER,
      max_results: 400,
      sort_by: { public_id: 'desc' }
    });

    cachedResults = fetchedResults;
  }

  return cachedResults;
}
