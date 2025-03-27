"use client";
import Image from "next/image";
import { OurValues as ValuesData } from "../../components/utilis/contents/HomePage.content";
import Icon from "../ui/Icon";

export default function OurValues() {
  return (
    <section className="relative">
          <Icon
            image="/image/Bolt.svg"
            direction="left"
            className="right-0 top-7"
          />
      <div className="container-sm mx-auto">
        <div className="pt-[56px] pb-[35px] lg:pt-[137px] lg:pb-[40px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[24px]">
            {/* Image Section */}
            <div className="w-[358px] h-[144px] lg:w-[605px] lg:h-[536px] mx-auto rounded-[5px]">
              <Image
                src="/image/tractor2.png"
                width={500}
                height={500}
                alt="tractor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Values Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
              {ValuesData.map((value, index) => (
                <div
                  key={index}
                  className="w-[358px] mx-auto lg:w-[288px] h-[224px] bg-white shadow-[0px_8px_16px_2px_#0000001A;] rounded-[5px]"
                >
                  <div className="py-[32px] px-[21px]">
                    <h2 className="text-center lg:text-start text-[24px] leading-[100%] mb-[12px] text-[#DE9693]">
                      {value.title}
                    </h2>
                    <p className="text-[16px] leading-[24px] tracking-[0.5%] text-[#727272] text-center lg:text-start">
                      {value.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
