"use client";

import Header from "../header";

export default function ProductHero() {
  return (
    <section className="lg:background mobile-bg min-h-[300px]">
      <Header />
      <div className="pt-[176px] lg:pt-[247px] pb-[52px] lg:pb-[48px] container-sm mx-auto">
        <div className="max-w-[315px] mx-auto text-center lg:max-w-[950px]">
          <h1 className="heading text-[28px] font-semibold leading-[36px] lg:text-[32px] lg:leading-[130%] mb-[8px] lg:mb-[16px] text-[#FFFFFF] ">
           <span className="text-[#DE9693]">Our Products –</span> Built for Performance
          </h1>
        </div>
      </div>
    </section>
  );
}
