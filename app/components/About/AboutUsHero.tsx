"use client";

import Header from "../header";

export default function AboutUsHero() {
  return (
    <section className="lg:background mobile-bg">
      <Header />
      <div className="pt-[176px] lg:pt-[247px] pb-[52px] lg:pb-[48px] container-sm mx-auto">
        <div className="max-w-[336px] mx-auto text-center lg:max-w-[950px]">
          <h2 className="text-[#DE9693] heading font-medium mb-[12px] lg:text-[22px]">About Us</h2>
          <h1 className="heading text-[28px] font-semibold leading-[36px] lg:text-[32px] lg:leading-[130%] mb-[8px] lg:mb-[16px] text-[#FFFFFF] ">We have been bridging the spare parts gap since 1990.</h1>
          <p className="heading text-[16px] text-[#FFFFFF] px-0 lg:px-6 font-light leading-[24px]">
            Over the years, we have built strong partnerships with leading
            manufacturers and suppliers, expanding our reach across global
            markets.
          </p>
        </div>
      </div>
    </section>
  );
}
