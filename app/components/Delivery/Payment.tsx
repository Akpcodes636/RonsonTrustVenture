"use client";
import Image from "next/image";
import Button from "../ui/Button";

export default function Payment({ setStep }: { setStep: (step: number) => void }) {
  return (
    <div className="pt-[120px] pb-[200px]">
      <div className="flex items-center gap-[18px] justify-center mb-[32px]">
        <span>
          <Image
            src="/image/Payment.svg"
            width={500}
            height={500}
            alt="icon"
            className="object-contain w-[32px] h-[32px] text-center"
          />
        </span>
        <h1 className="font-semibold text-[24px] text-[#4A4A4A]">
          Payment Details
        </h1>
      </div>
      <div className="mx-auto max-w-[358px]  lg:min-w-[711px] h-[536px] bg-[#F4F4F4] rounded-[5px]">
        <div className="p-[52px]">
          <h1>Hello World!!!!</h1>
          <Button
            style="primary"
            css="w-[182px] h-[48px] rounded-[5px]"
            type="button"
            fn={()=> setStep(3)}
          >
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  );
}
