import { client } from "../../sanity/lib/client";
import { Product } from "../types/index"; // Adjust the path to where Product is defined

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch<Product | null>(
      `*[_type == "product" && slug.current == $slug][0]{
          _id,
          name,
          slug,
          price,
          description,
          image1 {
            asset-> {
              url
            }
          },
          image2 {
            asset-> {
              url
            }
          }
        }`,
      { slug }
    );

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function markProductAsSold(productId: string) {
  try {
    const updated = await client
      .patch(productId) // find product by _id
      .set({ inStock: false }) // set inStock to false
      .commit();

    return updated;
  } catch (error) {
    console.error("Error marking product as sold:", error);
    return null;
  }
}
