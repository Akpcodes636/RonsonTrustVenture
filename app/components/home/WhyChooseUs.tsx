"use client";
import Image from "next/image";
import { About } from "../utilis/contents/HomePage.content";
import Icon from "../ui/Icon";

export default function WhyChooseUs() {
  return (
    <section className="pt-[70px] lg:pt-[130px] pb-[96px] lg:pb-[160px] relative">
      <div className="container-sm mx-auto">
      <Icon image="/image/Bolt.svg" direction="left" className="right-0 top-10"  />
      <Icon image="/image/Vehicle.svg" direction="left" className="left-0 bottom-0"  />
        <h1 className="font-semibold text-[22px] leading-[130%] text-[#000000] lg:text-[30px] lg:leading-[100%] text-center mb-[40px]">
          Why Choose Ronson Trust Venture?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[64px] gap-x-[150px]">
          <div className="flex items-start justify-start">
            <div className="w-[358px] h-[320px]  lg:min-h-[666px] lg:min-w-[651px] mx-auto">
              <Image
                src="/image/About.png"
                width={500}
                height={500}
                alt="about image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-full h-full">
            {About.map((p, i) => (
              <div key={i} className="mb-[48px] lg:mb-[56px]">
                <div className="w-[54px] h-[54px] bg-[#FAE6E5] rounded-[3.37px]  flex items-center justify-center mb-[16px]">
                  <div className="w-[32px] h-[20px]">
                    <Image
                      src={p.image}
                      alt="icon"
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-[#000000] text-[24px] font-semibold heading leading-[100%] pb-[8]">
                  {p.title}
                </h2>
                <p className="text-[#727272] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[30px] font-normal ">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
