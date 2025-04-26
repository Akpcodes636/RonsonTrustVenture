"use client";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import ProductInfo from "@/app/components/Products/ProductInfo";
import Button from "@/app/components/ui/Button";
import GoBack from "@/app/components/ui/GoBack";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const router = useRouter();

  const goToProductPage = () => {
    // Navigate to the product detail page using the product's ID
    router.push("/delivery");
  };
  return (
    <section className="">
      <div className="lg:background mobile-bg min-h-[300px]">
        <Header />
        <div className="pt-[176px] lg:pt-[247px] pb-[52px] lg:pb-[48px] container-sm mx-auto">
          <div className="max-w-[315px] mx-auto text-center lg:max-w-[950px]">
            <h1 className="heading text-[28px] font-semibold leading-[36px] lg:text-[32px] lg:leading-[130%] mb-[8px] lg:mb-[16px] text-[#FFFFFF] ">
              <span className="text-[#DE9693]">Our Products –</span> Built for
              Performance
            </h1>
          </div>
        </div>
      </div>
      <div className="container-sm mx-auto py-12 md:py-16 lg:py-[120px] px-4 md:px-6">
        <div>
        <GoBack />
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-[32px]">
            {/* Image Gallery Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4 md:gap-[32px]">
                {/* Main Image */}
                <div className="w-full max-w-[605px] h-[300px] md:h-[400px] lg:h-[504px] mx-auto">
                  <Image
                    src="/image/Rectangle9.svg"
                    alt="Product main image"
                    width={605}
                    height={504}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[29px]">
                  <div className="w-full sm:min-w-[288px] h-[120px] rounded-[5px]">
                    <Image
                      src="/image/crane4.png"
                      alt="Product thumbnail"
                      width={288}
                      height={120}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full sm:min-w-[288px] h-[120px] rounded-[5px]">
                    <Image
                      src="/image/crane1.svg"
                      alt="Product thumbnail"
                      width={288}
                      height={120}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              {/* Product Name and Price */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8 lg:mb-[56px]">
                <div>
                  <h2 className="text-xl md:text-[24px] font-semibold leading-[100%] text-[#000000] mb-2 md:mb-[16px]">
                    Product Name
                  </h2>
                  <p className="text-base md:text-[18px] font-normal text-[#000000]">
                    Manitowoc 4100
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-xl md:text-[24px] leading-[100%] text-[#000000] mb-2 md:mb-[16px]">
                    Price
                  </h2>
                  <p className="text-[#B81A14] text-base md:text-[18px] leading-[100%]">
                    N200,000
                  </p>
                </div>
              </div>

              {/* Key Specifications */}
              <div className="mb-8 lg:mb-[56px]">
                <h2 className="font-semibold text-xl md:text-[24px] leading-[100%] text-[#000000] mb-2 md:mb-[16px]">
                  Key Specification
                </h2>
                <ul className="marker:text-[#B81A14] list-disc pl-5">
                  <li className="text-base md:text-[18px] text-[#000000] font-normal">
                    <a href="#" className="hover:underline">
                      Gross Power: 333 – 364 HP
                    </a>
                  </li>
                  <li className="text-base md:text-[18px] text-[#000000] font-normal">
                    <a href="#" className="hover:underline">
                      Net horse power: 360 HP at 2,100 RPM.
                    </a>
                  </li>
                </ul>
              </div>

              {/* Description */}
              <div className="mb-8 lg:mb-[56px]">
                <h2 className="font-semibold text-xl md:text-[24px] text-[#000000] mb-4 md:mb-[24px]">
                  Description
                </h2>
                <p className="font-normal text-base md:text-[18px] leading-[150%] mb-4 md:mb-[24px]">
                  The Manitowoc 4100W Series 2 crawler crane typically features
                  a Cummins NTA-855-C360 diesel engine.
                </p>
                <p className="mb-6 md:mb-[40px] font-normal text-base md:text-[18px] leading-[150%]">
                  It is a heavy-duty crawler crane built for high-capacity
                  lifting and durability on demanding job sites. Known for its
                  reliability and performance, it's a trusted choice for
                  large-scale construction and industrial projects.
                </p>
              </div>

              {/* CTA Button */}
              <Button
                type="button"
                style="primary"
                css="w-full sm:w-[182px] h-[48px] bg-[#B81A14] rounded-[5px]"
                fn={goToProductPage}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductInfo />
      </div>
      <Footer />
    </section>
  );
}
