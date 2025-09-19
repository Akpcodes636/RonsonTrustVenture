// "use client";
import ProductCard from "../ui/ProductCard";
import { client } from "../../../sanity/lib/client"; //
import { productQuery } from "../utils/productQueries";
import {Product} from "../../types/index"; // Adjust the import path as needed
import { urlFor } from "../utils/image"; // Adjust the import path as needed
// import products from "../../data/caterpillar.json"; // Adjust path if needed

export default async function ProductCatalogue() {
  const products: Product[] = await client.fetch(productQuery); // Fetch the product data from Sanity
  //  console.log(products);
  //  const imageUrl = product.image1?.asset ? urlFor(product.image1.asset).url() : '';


   return (
    <section className="py-[40px] lg:py-[96px]">
      <div className="container-sm mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[56px] gap-x-[30px]">
          {products.map((product) => {
            // Resolve the image URL from the asset reference
            const imageUrl = product.image1?.asset ? urlFor(product.image1.asset).url() : '';

            return (
              <ProductCard
                key={product._id}
                title={product.name}
                price={product.price.toString()}
                image={imageUrl} // Use the resolved image URL
                text={product.text || ""}
                slug={product.slug.current} 
              />
            );
          })}
        </div>
      </div>
    </section>
   )
}
