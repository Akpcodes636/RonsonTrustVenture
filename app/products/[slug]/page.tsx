import { getProductBySlug } from "../../lib/sanity";
import type { Metadata } from "next";
import ProductDetails from "./ProductDetails";

type Props = {
  params: { slug: string }; // plain object, not Promise
  searchParams?: { [key: string]: string | string[] | undefined };
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  console.log(product);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }

  return {
    title: product.name,
    description:
      product.description || "Product details",
    openGraph: {
      title: product.name,
      description: product.description || "",
      images: [
        {
          url: product.image1?.asset?.url || "/placeholder-image.jpg",
        },
      ],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* <h1>{product.name}</h1> */}
      {/* ...rest of your UI */}
      <ProductDetails product={product} />
    </div>
  );
}
