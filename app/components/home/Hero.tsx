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
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter()
  
  const handleProduct = () => {
    router.push('/products')
  }

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);
  
  return (
    <section className="mobile-bg lg:desktop-bg relative">
      {/* Dark overlay - moved to top so it doesn't cover content */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="min-h-[70vh] lg:min-h-[100vh] 2xl:min-h-[100vh] container-sm mx-auto relative z-10">
        <Header />
        
        <div className="pt-[165px] lg:pt-[262px] mx-auto max-w-[355px] lg:max-w-[1041px]">
          <h1
            data-aos="fade-up"
            className="text-[#FFFFFF] font-medium lg:font-bold text-[28px] lg:text-[60px] lg:leading-[110%] leading-9 text-center mb-[24px]"
          >
            <span className="border-b-4 border-[#B81A14]">Ronson</span> –
            Genuine Manitowoc Spare Parts Dealer, Trusted & Reliable
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#FFFFFF] font-normal text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] text-center max-w-[277px] lg:max-w-[650px] mx-auto mb-[32px] lg:mb-[40px]"
          >
            Your trusted source for high-quality Manitowoc spare parts, built
            for durability and performance.
          </p>
          <div className="flex items-center justify-center cursor-pointer">
            <Button
              data-aos="zoom-in"
              data-aos-delay="300"
              style="primary"
              fn={handleProduct}
              type="button"
              css="bg-[#B81A14] w-[182px] h-[48px] text-white body-text"
            >
              Order Now
            </Button>
          </div>
        </div>
        
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="absolute left-0 right-0 bottom-[-80px] lg:bottom-[-90px] 2xl:bottom-[-80px] max-w-[358px] md:max-w-[600px] lg:max-w-[1028px] lg:min-h-[176px] min-h-[96px] bg-white mx-auto rounded-[5px] shadow-[0px_4px_8px_0px_#00000014;] z-30"
        >
          <div className="px-4 py-4 lg:py-[33px] lg:px-[134px]">
            <div className="flex items-center justify-center gap-x-[24px] lg:gap-x-[180px]">
              <Stats
                title="20+"
                text="Years Experience"
                icon={FaClock}
                data-aos="fade-up"
              />
              <Stats
                title="5000+"
                text="Spare Parts Supplied"
                icon={PiGearSixFill}
                data-aos="fade-up"
              />
              <Stats
                title="100+"
                text="Satisfied Clients"
                icon={MdEmojiEmotions}
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}