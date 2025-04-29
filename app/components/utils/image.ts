import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../sanity/lib/client'; // Path to your Sanity client

// Create an image URL builder with your Sanity client
const builder = imageUrlBuilder(client);




// Function to generate the URL
export function urlFor(source: object) {
  return builder.image(source);
}
