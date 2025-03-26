"use client";
import Image from "next/image";
import Button from "../ui/Button";

export default function About() {
  return (
    <section className="bg-[#050101]">
      <div className="container-sm mx-auto  pt-[40px] px-[15px] lg:pt-[80px] lg:pb-[112px] lg:px-[100px]">
        <h2 className="text-white font-semibold text-[22px] leading-[130%] block lg:hidden text-center pb-[40px]">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[29px] gap-y-[32px]">
          <div className="w-full h-full">
            <Image
              src="/image/tractors.png"
              width={500}
              height={500}
              alt="tractor image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-[40px] pb-[76px]">
            <h2 className="text-[#FFFFFF] text-[30px] font-semibold leading-[100%] mb-[16px] hidden lg:block">About Us</h2>
            <p className="text-[#FFFFFF] text-[16px] lg:text-[18px] font-normal leading-[28px] mb-[40px]">
              Ronson Trust Ventures has been a trusted name in the sales,
              repairs, and distribution of spare parts & marine equipment for
              decades. Our mission is to provide high-quality, reliable spare
              parts for various industries, ensuring seamless operations for our
              clients worldwide.
            </p>
            <div className="flex items-center lg:items-start justify-center lg:justify-start">
                <Button style="primary" type="button" css="w-[182px] h-[48px] bg-[#B81A14] text-white rounded-[5px]" >Explore More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
