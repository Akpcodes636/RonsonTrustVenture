"use client";
import Image from "next/image";
import Icon from "../ui/Icon";

export default function History() {
  return (
    <section className="relative">
      <Icon
        image="/image/Screw.svg"
        direction="left"
        className="right-0 top-7"
      />
      <div className="container-sm mx-auto pt-[40px] lg:pt-[60px] pb-[96px] lg:pb-[160px]">
        <h1 className="font-semibold heading text-[#B81A14] leading-[100%] text-[24px] block lg:hidden text-center mb-[16px]">
          Our History
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[24px]">
          <div className="relative mx-auto rounded-[5px] overflow-hidden w-[358px] h-[160px] lg:w-[499px] lg:h-[304px] min-w-full">
            <Image
              src="/image/History-image.png"
              alt="history image"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full h-full lg:py-[18.5px] mx-auto px-3">
            <h2 className="text-start hidden lg:block text-[28px] leading-[100%] text-[#B81A14] heading font-semibold mb-[16px]">
              Our History
            </h2>
            <p className="text-[#000000] text-[18px] leading-[150%] font-normal mb-[24px]">
              Ronson Trust Ventures has been a trusted name in the sales,
              repairs, and distribution of spare parts & marine equipment for
              decades. Our mission is to provide high-quality, reliable spare
              parts for various industries, ensuring seamless operations for our
              clients worldwide.
            </p>
            <p className="text-[#000000] text-[18px] leading-[150%] font-normal mb-[24px]">
              Established in 1990, Ronson Trust Ventures began with a vision to
              bridge the gap in the spare parts industry. Over the years, we
              have built strong partnerships with leading manufacturers and
              suppliers, expanding our reach across global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
