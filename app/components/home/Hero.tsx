"use client";
import Header from "../header";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-stone-400 background">
      <div className="pt-[30px] md:pt-[50px] lg:pt-[70px]">
        <Header />
      </div>
      <div className="pt-72 md:pt-96 lg:pt-80 container-sm mx-auto">
        <div className="flex items-center justify-center max-w-[1041px] mx-auto text-center flex-col">
          <h1 className="text-[28px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold tracking-[0.5%] text-white mb-[16px] md:mb-[24px] lg:mb-[32px]">
            <span className="border-b-4 border-[#B81A14]">Roson</span>– Genuine Manitowoc Spare Parts Dealer, Trusted & Reliable
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] md:leading-[28px] lg:leading-[32px] text-white max-w-[650px] mx-auto mb-[24px] md:mb-[32px] lg:mb-[40px]">
            Your trusted source for high-quality Manitowoc spare parts, built
            for durability and performance.
          </p>
          <div>
            <Button
              style="primary"
              css="w-[120px] md:w-[150px] lg:w-[182px] h-[40px] md:h-[48px] rounded-[5px]"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}