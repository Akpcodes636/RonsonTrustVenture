"use client";
import { FaClock, FaRegSmile, FaGlobeAsia } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Icon from "../ui/Icon";

export const BannerContents = [
  {
    icon: () => <FaClock />,
    title: "20+",
    text: "Years Experience",
  },
  {
    icon: () => <IoSettingsSharp />,
    title: "5000+",
    text: "Spare Parts Supplied",
  },
  {
    icon: () => <FaRegSmile />,
    title: "100+",
    text: "Satisfied Clients",
  },
  {
    icon: () => <FaGlobeAsia />,
    title: "50+",
    text: "Countries Served",
  },
];

export default function ShowcaseBanner() {
  return (
    <section className="pt-[60px] lg:pt-[80px] pb-[40px] lg:pb-[100px] relative flex justify-center w-full">
      <Icon
        image="/image/Plane.svg"
        direction="left"
        className="absolute left-0 top-7"
      />
      <div className="container-sm mx-auto w-full">
        <div className="lg:bg-[#B81A14] rounded-[10px] lg:h-[184px] flex items-center justify-center">
          <div className="lg:py-[37px] lg:px-[126px]">
            <div className="grid grid-cols-2 w-full md:grid-cols-4 lg:grid-cols-4 gap-x-[16px] gap-y-[16px] lg:gap-x-[153px] place-items-center">
              {BannerContents.map((p, i) => (
                <div className="h-full w-full" key={i}>
                  <div className="w-full h-full rounded-[10px]  bg-[#B81A14] py-[29px] px-[28px] lg:py-0 lg:px-0">
                    <div className="w-full h-full text-center flex items-center justify-center flex-col">
                      <div className="w-[32px] h-[32px] flex items-center justify-center text-white text-2xl mb-[8px] lg:mb-[12px]">
                        {p.icon()}
                      </div>
                      <h2 className="text-[22px] lg:text-[26px] leading-[32px] heading font-semibold text-white">
                        {p.title}
                      </h2>
                      <p className="text-[12px] leading-[100%] font-normal lg:leading-[32px] text-white">
                        {p.text}
                      </p>
                    </div>
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
