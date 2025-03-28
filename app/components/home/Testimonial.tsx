"use client";
import TestimonialCard from "../ui/TestCard";

export default function Testimonial() {
  return (
    <section className="pt-[96px] pb-[96px] lg:pt-[120px] lg:pb-[160px]">
      <div className="container-sm mx-auto">
        <h1 className="mb-[40px] font-semibold text-[22px] lg:text-[30px] leading-[130%] lg:leading-[100%] text-[#000000] text-center">
          What Our Clients Say
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[32px] gap-x-[30px]">
          <TestimonialCard
            name="Head of Operations"
            text="Ronson Trust Ventures consistently delivers high-quality parts with impressive speed. When dealing with the demanding requirements of offshore projects, like those we undertake with Aveon Offshore, this reliability is paramount."
            image="/image/John.png"
            role="Aveon Offshore"
          />
          <TestimonialCard
            name="Manager"
            text="Ronson Trust Ventures has proven to be a reliable partner, ensuring our operations run smoothly and efficiently. We highly recommend them for their dedication and professionalism."
            image="/image/John.png"
            role="Globestar Company Limited"
          />
          <TestimonialCard
            name="Client"
            text="Ronson exceeded my expectations! Their genuine Manitowoc spare parts are top quality, and delivery was fast. Our equipment runs smoothly thanks to their reliability!"
            image="/image/John.png"
            role="Heavy Machinery Operator"
          />
        </div>
      </div>
    </section>
  );
}
