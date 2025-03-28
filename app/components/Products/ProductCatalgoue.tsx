"use client";
import ProductCard from "../ui/ProductCard";

export default function ProductCatalogue() {
  return (
    <section className="py-[40px] lg:py-[96px]">
      <div className="container-sm mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[56px] gap-x-[30px]">
          <div className="">
            <ProductCard
              title="Mawitoma 4200"
              price="500,000"
              image="image/image.svg"
              text="Gross Power: 333 – 364 HP"
            />
          </div>
          <ProductCard
            title="Mawitoma 4200"
            price="500,000"
            image="image/image.svg"
            text="Gross Power: 333 – 364 HP"
          />
        </div>
      </div>
    </section>
  );
}
