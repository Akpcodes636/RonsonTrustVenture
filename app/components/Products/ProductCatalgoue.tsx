"use client";
import ProductCard from "../ui/ProductCard";
import products from "../../data/caterpillar.json"; // Adjust path if needed

export default function ProductCatalogue() {
  return (
    <section className="py-[40px] lg:py-[96px]">
      <div className="container-sm mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[56px] gap-x-[30px]">
          {products.CraneParts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product["Product Name"]}
              price={product.price}
              image={product.image}
              text={
                Array.isArray(product["Key Specification"])
                  ? product["Key Specification"].find((item: string) =>
                      item.toLowerCase().includes("gross")
                    )
                  : product["Key Specification"]?.GrossPower || ""
              }
              
            />
          ))}
        </div>
      </div>
    </section>
  );
}
