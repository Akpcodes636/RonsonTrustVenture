"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const router = useRouter();

  const goToAboutPage = () => {
    // Navigate to the product detail page using the product's ID
    router.push("/About");
  };

  return (
    <section className="bg-[#050101]">
      <div
        className="container-sm mx-auto pt-[40px] px-[15px] lg:pt-[80px] lg:pb-[112px] lg:px-[100px]"
        data-aos="fade-up"
      >
        <h2
          className="text-white font-semibold text-[22px] leading-[130%] block lg:hidden text-center pb-[40px]"
          data-aos="fade-up"
        >
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[29px] gap-y-[32px]">
          <div className="w-full h-full" data-aos="fade-right">
            <Image
              src="/image/Frame.svg"
              width={500}
              height={500}
              alt="tractor image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-[40px] pb-[76px]" data-aos="fade-left">
            <h2 className="text-[#FFFFFF] text-[30px] font-semibold leading-[100%] mb-[16px] hidden lg:block">
              About Us
            </h2>
            <p className="text-[#FFFFFF] text-[16px] lg:text-[18px] font-normal leading-[28px] mb-[40px]">
              Ronson Trust Ventures has been a trusted name in the sales,
              repairs, and distribution of spare parts & marine equipment for
              decades. Our mission is to provide high-quality, reliable spare
              parts for various industries, ensuring seamless operations for our
              clients worldwide.
            </p>
            <div
              className="flex items-center lg:items-start justify-center lg:justify-start"
              data-aos="zoom-in"
            >
              <Button
                style="primary"
                type="button"
                css="w-[182px] h-[48px] bg-[#B81A14] text-white rounded-[5px]"
                fn={goToAboutPage}
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
