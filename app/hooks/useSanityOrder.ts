import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  name: string;
  price: string;
  quantity: number;
}

const useSanityProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]{
            name,
            price,
          }`,
          { slug }
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  return { product, loading };
};

export default useSanityProduct;
