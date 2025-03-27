"use client";

import Header from "../header";

export default function ContactHero() {
  return (
    <section className="lg:background mobile-bg min-h-[70vh]">
      <Header />
      <div className="pt-[176px] lg:pt-[247px] pb-[52px] lg:pb-[48px] container-sm mx-auto">
        <div className="max-w-[336px] mx-auto text-center lg:max-w-[950px]">
          <h2 className="text-[#DE9693] body-text font-medium mb-[12px] lg:text-[20px] text-[14px]">
            Contact Us
          </h2>
          <h1 className="heading text-[28px] font-semibold leading-[36px] lg:text-[32px] lg:leading-[130%] mb-[8px] lg:mb-[16px] text-[#FFFFFF] ">
            We&apos;re here to help and support you!
          </h1>
        </div>
      </div>
    </section>
  );
}
