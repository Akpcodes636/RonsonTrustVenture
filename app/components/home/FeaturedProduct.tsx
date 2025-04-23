"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../ui/ProductCard";
import Icon from "../ui/Icon";
import products from "../../data/caterpillar.json"; // Import your JSON data

export default function FeaturedProducts() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens once
    });
  }, []);

  // Get only the first 2 products to feature
  const featuredProducts = products.CraneParts.slice(0, 2);

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
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product["Product Name"]}
              price={product.price}
              image={product.image}
              text={
                Array.isArray(product["Key Specification"])
                  ? product["Key Specification"].find((item) => 
                      item.toLowerCase().includes("gross")
                    ) || "Gross Power: N/A"
                  : typeof product["Key Specification"] === "object" 
                    ? `Gross Power: ${product["Key Specification"]?.GrossPower || "N/A"}` 
                    : "Gross Power: N/A"
              }
              data-aos="zoom-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
}