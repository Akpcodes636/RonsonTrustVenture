import ProductCard from "../ui/ProductCard";
import { client } from "../../../sanity/lib/client";
import { productQuery } from "../utils/productQueries";
import { Product } from "../../types/index";
import { urlFor } from "../utils/image";
import Icon from "../ui/Icon";

export default async function FeaturedProducts() {
  const products: Product[] = await client.fetch(productQuery);

  // Select only the first 2 products
  const featuredProducts = products.slice(0, 2);

  return (
    <section className="pt-[120px] pb-[20px] lg:pt-[180px] lg:pb-[50px] bg-white relative">
      {/* Icons */}
      <Icon
        image="/image/Vector.svg"
        direction="left"
        className="right-0 top-[40px]"
      />
      <Icon
        image="/image/Plane.svg"
        direction="left"
        className="left-0 top-[58%]"
      />
      <div className="container-sm mx-auto">
        <h2 className="font-semibold text-[22px] lg:text-[30px] leading-[130%] text-center mb-[40px]">
          Explore Our Premium Manitowoc Parts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[56px] gap-x-[30px]">
          {featuredProducts.map((product) => {
            const imageUrl = product.image1?.asset
              ? urlFor(product.image1.asset).url()
              : "";

            return (
              <ProductCard
                key={product._id}
                id={Number(product._id)}
                title={product.name}
                price={String(product.price)}
                image={imageUrl}
                text={product.description || ""}
                slug={product.slug.current} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
