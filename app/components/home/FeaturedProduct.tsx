"use client";
import React from "react";
import ProductCard from "../ui/ProductCard";
import Icon from "../ui/Icon"; // Adjust the path based on the actual location of the Icon component

export default function FeaturedProducts() {

  return (
    <section className="pt-[120px] pb-[20px] lg:pt-[180px] lg:pb-[50px] bg-white relative">
      <Icon image="/image/Vector.svg" direction="left" className="right-0 top-[40px]"  />
      <Icon image="/image/Plane.svg" direction="left" className="left-0 top-[58%]"  />
      <div className="container-sm mx-auto">
        <div>
          <h2 className="font-semibold text-[22px] lg:text-[30px] lg:leading-[100%] leading-[130%] text-center mb-[40px]">
            Explore Our Premium Manitowoc Parts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[56px] gap-x-[30px]">
            <div className="">
            <ProductCard title="Mawitoma 4200" price="500,000" image="image/image.svg" text="Gross Power: 333 – 364 HP" />

            </div>
            <ProductCard title="Mawitoma 4200" price="500,000" image="image/image.svg" text="Gross Power: 333 – 364 HP" />
          </div>
        </div>
      </div>
    </section>
  );
}
