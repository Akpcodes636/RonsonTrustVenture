"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Header from "../header";
import Button from "../ui/Button";
import Stats from "../ui/Stat";
import { FaClock } from "react-icons/fa";
import { PiGearSixFill } from "react-icons/pi";
import { MdEmojiEmotions } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleProduct = () => {
    router.push("/products");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-[600px] lg:min-h-[800px] mobile-bg lg:desktop-bg relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container-sm mx-auto relative z-10">
          <Header />

          <div className="pt-[165px] lg:pt-[262px] mx-auto max-w-[355px] lg:max-w-[1041px]">
            <h1
              data-aos="fade-up"
              className="text-[#FFFFFF] font-medium lg:font-bold text-[28px] lg:text-[60px] text-center mb-[24px]"
            >
              <span className="border-b-4 border-[#B81A14]">Ronson</span> –
              Genuine Manitowoa Spare Parts Dealer, Trusted & Reliable
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#FFFFFF] text-center text-[16px] lg:text-[20px] max-w-[650px] mx-auto mb-[32px] lg:mb-[40px]"
            >
              Your trusted source for high-quality Manitowoc spare parts, built
              for durability and performance.
            </p>
            <div className="flex items-center justify-center">
              <Button
                data-aos="zoom-in"
                data-aos-delay="300"
                style="primary"
                fn={handleProduct}
                type="button"
                css="bg-[#B81A14] w-[182px] h-[48px] text-white"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - as bridge between Hero and next content */}
      <section
        data-aos="fade-up"
        data-aos-delay="400"
        className="border border-[#00000014]

 w-full max-w-[358px] md:max-w-[600px] lg:max-w-[1028px] min-h-[96px] lg:min-h-[176px] bg-white mx-auto rounded-[5px] shadow-lg 

 mt-[-88px] lg:mt-[-100px]"
      >
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
      </section>
    </>
  );
}
