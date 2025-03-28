"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialCard from "../ui/TestCard";

export default function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="pt-[96px] pb-[96px] lg:pt-[120px] lg:pb-[160px]"
      data-aos="fade-up"
    >
      <div className="container-sm mx-auto">
        <h1
          className="mb-[40px] font-semibold text-[22px] lg:text-[30px] leading-[130%] lg:leading-[100%] text-[#000000] text-center"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[32px] gap-x-[30px]">
          <TestimonialCard
            name="Head of Operations"
            text="Ronson Trust Ventures consistently delivers high-quality parts with impressive speed. When dealing with the demanding requirements of offshore projects, like those we undertake with Aveon Offshore, this reliability is paramount."
            image="/image/John.png"
            role="Aveon Offshore"
            data-aos="fade-right"
          />
          <TestimonialCard
            name="Manager"
            text="Ronson Trust Ventures has proven to be a reliable partner, ensuring our operations run smoothly and efficiently. We highly recommend them for their dedication and professionalism."
            image="/image/John.png"
            role="Globestar Company Limited"
            data-aos="zoom-in"
          />
          <TestimonialCard
            name="Client"
            text="Ronson exceeded my expectations! Their genuine Manitowoc spare parts are top quality, and delivery was fast. Our equipment runs smoothly thanks to their reliability!"
            image="/image/John.png"
            role="Heavy Machinery Operator"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
}
