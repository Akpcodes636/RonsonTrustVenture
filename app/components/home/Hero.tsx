"use client";
import Header from "../header";
import Button from "../ui/Button";
import Stats from "../ui/Stat";
import { FaClock } from "react-icons/fa";
import { PiGearSixFill } from "react-icons/pi";
import { MdEmojiEmotions } from "react-icons/md";

export default function Hero() {
  return (
    <section className="mobile-bg lg:desktop-bg relative">
      <div className="min-h-[70vh] lg:min-h-[100vh] 2xl:min-h-[100vh] container-sm mx-auto">
        <Header />

        <div className="pt-[165px] lg:pt-[262px] mx-auto min-w-[355px] lg:max-w-[1041px]">
          <h1 className="text-[#FFFFFF] font-medium lg:font-bold text-[28px] lg:text-[60px] lg:leading-[110%] leading-9 text-center mb-[24px]">
            {" "}
            <span className="border-b-4 border-[#B81A14]">Roson</span> – Genuine
            Manitowoa Spare Parts Dealer, Trusted & Reliable
          </h1>
          <p className="text-[#FFFFFF] font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] text-center max-w-[277px] lg:max-w-[650px] mx-auto mb-[32px] lg:mb-[40px]">
            Your trusted source for high-quality Manitowoc spare parts, built
            for durability and performance.
          </p>
          <div className="flex items-center justify-center">
            <Button
              style="primary"
              type="button"
              css="bg-[#B81A14] w-[182px] h-[48px] rounded-[5px] text-white body-text"
            >
              Order Now
            </Button>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-[-80px] lg:bottom-[-90px] 2xl:bottom-[-80px] max-w-[358px] lg:max-w-[1028px] lg:min-h-[176px] min-h-[96px] bg-white mx-auto rounded-[5px] shadow-[0px_4px_8px_0px_#00000014;] z-30 ">
          <div className="px-4 py-4 lg:py-[33px] lg:px-[134px]">
            <div className="flex items-center justify-center gap-x-[24px] lg:gap-x-[180px]">
              <Stats title="20+" text="Years Experience" icon={FaClock} />
              <Stats
                title="5000+"
                text="Spare Parts Supplied"
                icon={PiGearSixFill}
              />
              <Stats
                title="100+"
                text="Satisfied Clients"
                icon={MdEmojiEmotions}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
