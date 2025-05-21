"use client";
import Image from "next/image";
import Button from "../ui/Button";
import useSanityProduct from "@/app/hooks/useSanityOrder";
import useMongoProducts from '@/app/hooks/useMongoProducts';
import { useRouter } from "next/router";

interface ConfirmOrderProps {
  setStep: (step: number) => void;
}

export default function ConfirmOrder({ setStep }: ConfirmOrderProps) {
// const { products,error } = useMongoProducts();

const router = useRouter();
const { slug } = router.query;

const { product} = useSanityProduct(slug as string);
  // console.log("Sanity Order:", order);
  return (
    <div className="pt-16 md:pt-24 lg:pt-[120px] pb-20 md:pb-32 lg:pb-[200px] px-4 md:px-6">
      <div className="flex items-center gap-3 md:gap-[18px] justify-center mb-6 md:mb-8 lg:mb-[32px]">
        <span>
          <Image
            src="/image/checkmark.svg"
            width={32}
            height={32}
            alt="checkmark icon"
            className="object-contain w-6 h-6 md:w-8 md:h-8 lg:w-[32px] lg:h-[32px] text-center"
          />
        </span>
        <h1 className="font-semibold text-lg md:text-xl lg:text-[24px] text-[#4A4A4A]">
          Confirm Order
        </h1>
      </div>

      <div className="space-y-8 md:space-y-12 lg:space-y-[56px] mb-[40px]">
        {/* Order Summary Card */}
        <div className="w-full max-w-[358px] md:max-w-[500px] lg:max-w-[700px] mx-auto border border-[#E6E6E6] rounded-[5px] mb-[56px]">
          <div className="p-4 md:p-6 lg:px-[32px] lg:py-[28px]">
            <div className="border-b border-[#E6E6E6] mb-6 md:mb-8 lg:mb-[32px]">
              <h2 className="font-semibold text-base md:text-lg lg:text-[20px] leading-tight text-[#4A4A4A] mb-4 lg:mb-[16px]">
                Order Summary
              </h2>
            </div>
            <p className="font-normal text-sm md:text-base lg:text-[16px] leading-tight text-[#4A4A4A] mb-3 md:mb-4 lg:mb-[14px]">
              {product?.name}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-normal text-sm md:text-base lg:text-[16px] text-[#4A4A4A]">
                  Qty.1 <span>${product?.price}</span>
                </p>
              </div>
              <div>
                <p className="text-[#B81A14] font-medium text-sm md:text-base lg:text-[18px] leading-tight">
                  Edit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Information Card */}
        <div className="w-full max-w-[358px] md:max-w-[500px] lg:max-w-[700px] mx-auto border border-[#E6E6E6] rounded-[5px] mb-[56px]">
          <div className="p-4 md:p-6 lg:px-[32px] lg:py-[28px]">
            <div className="border-b border-[#E6E6E6] mb-6 md:mb-8 lg:mb-[32px]">
              <h2 className="font-semibold text-base md:text-lg lg:text-[20px] leading-tight text-[#4A4A4A] mb-4 lg:mb-[16px]">
                Delivery Information
              </h2>
            </div>
            <p className="font-normal text-sm md:text-base lg:text-[16px] leading-tight text-[#4A4A4A]">
              John Doe
            </p>
            <p className="font-normal text-sm md:text-base lg:text-[16px] leading-tight text-[#4A4A4A] mb-3 md:mb-4 lg:mb-[14px]">
              +234 00 00000 000
            </p>
            <div className="flex flex-row justify-between gap-2 sm:gap-4">
              <div className="max-w-full flex-1 sm:max-w-[250px] md:max-w-[300px] lg:max-w-[401px]">
                <p className="font-normal text-sm md:text-base lg:text-[16px] text-[#4A4A4A]">
                  The Mansion, Mosheshe Estate, Airport Road, Effurun, Warri,
                  Delta. Nigeria
                </p>
              </div>
              <div className="text-right flex-none">
                <p className="text-[#B81A14] font-medium text-sm md:text-base lg:text-[18px] leading-tight">
                  Edit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="w-full max-w-[358px] md:max-w-[500px] lg:max-w-[700px] mx-auto border border-[#E6E6E6] rounded-[5px] mb-[56px]">
          <div className="p-4 md:p-6 lg:px-[32px] lg:py-[28px]">
            <div className="border-b border-[#E6E6E6] mb-6 md:mb-8 lg:mb-[32px]">
              <h2 className="font-semibold text-base md:text-lg lg:text-[20px] leading-tight text-[#4A4A4A] mb-4 lg:mb-[16px]">
                Payment Method
              </h2>
            </div>
            <p className="font-normal text-sm md:text-base lg:text-[16px] leading-tight text-[#4A4A4A] mb-3 md:mb-4 lg:mb-[14px]">
              *******1234
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-normal text-sm md:text-base lg:text-[16px] text-[#4A4A4A]">
                  07/28
                </p>
              </div>
              <div>
                <p className="text-[#B81A14] font-medium text-sm md:text-base lg:text-[18px] leading-tight">
                  Edit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <Button
            style="primary"
            type="submit"
            css="w-[182px] h-[48px] rounded-[5px]"
            fn={() => setStep(4) }
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
}
