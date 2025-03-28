"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../ui/ProductCard";
import Icon from "../ui/Icon";

export default function FeaturedProducts() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens once
    });
  }, []);

  return (
    <section className="pt-[120px] pb-[20px] lg:pt-[180px] lg:pb-[50px] bg-white relative">
      {/* Icons with fade animations */}
      <Icon
        image="/image/Vector.svg"
        direction="left"
        className="right-0 top-[40px]"
        data-aos="fade-left"
      />
      <Icon
        image="/image/Plane.svg"
        direction="left"
        className="left-0 top-[58%]"
        data-aos="fade-right"
      />

      <div className="container-sm mx-auto">
        {/* Title with fade-in animation */}
        <h2
          className="font-semibold text-[22px] lg:text-[30px] leading-[130%] text-center mb-[40px]"
          data-aos="fade-up"
        >
          Explore Our Premium Manitowoc Parts
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-[56px] gap-x-[30px]"
          data-aos="fade-up"
        >
          <ProductCard
            title="Mawitoma 4200"
            price="500,000"
            image="/image/image.svg"
            text="Gross Power: 333 – 364 HP"
            data-aos="zoom-in"
          />
          <ProductCard
            title="Mawitoma 4200"
            price="500,000"
            image="/image/image.svg"
            text="Gross Power: 333 – 364 HP"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>
  );
}
