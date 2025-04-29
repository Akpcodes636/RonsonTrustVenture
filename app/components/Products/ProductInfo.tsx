// "use client";
import { FaTruck } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsBoxFill } from "react-icons/bs";

export const BannerContents = [
  {
    icon: () => <FaTruck />,
    title: "Fast Shipping",
    text: "Get your order delivered in record time",
  },
  {
    icon: () => <IoLocation />,
    title: "All States covered",
    text: "We deliver across Nigeria",
  },
  {
    icon: () => <BsBoxFill />,
    title: "Easy Tracking",
    text: "Stay updated on your order's status",
  },
];

export default function ProductInfo() {
  return (
    <section className="py-[103px] lg:py-[144px]">
      <div className="container-sm mx-auto">
        <h1 className="text-center text-[22px] leading-[30px] text-[#000000] font-semibold lg:text-[24px] mb-[24px] lg:mb-[40px]">
          Nationwide Delivery - We Bring Your Parts to You!
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
          {BannerContents.map((p, i) => {
            return (
              <div className="w-full h-full flex justify-center" key={i}>
                <div className="bg-[#F8E8E8] w-full max-w-[358px] lg:max-w-[393px]  h-[176px] mx-auto lg:h-[200px] flex items-center justify-center rounded-[5px]">
                  <div className="py-[32px] px-[16px] flex items-center justify-center flex-col">
                    <div className="w-[48px] h-[48px] bg-[#B81A14] mb-[16px] lg:mb-[24px] rounded-full flex items-center justify-center">
                      <div className="text-white w-[24px] h-[24px] flex items-center justify-center">
                        {p.icon()}
                      </div>
                    </div>
                    <h2 className="text-[#000000] heading font-semibold leading-[100%] text-[18px] mb-[8px]">
                      {p.title}
                    </h2>
                    <p className="text-[#000000] text-[16px] leading-[100%] font-normal text-center">
                      {p.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
