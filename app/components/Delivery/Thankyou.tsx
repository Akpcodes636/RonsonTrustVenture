"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function ThankYou() {
    const router = useRouter();
    const home = () => {
        router.push("/");
    }
  return (
    <div className="pt-[56px] pb-[112px] lg:pt-[117px] lg:pb-[200px]">
      <div className="flex flex-col items-center justify-center">
        <span className="mb-[24px]">
          <Image
            src="/image/thumbsup.svg"
            width={500}
            height={500}
            alt="icon"
            className="object-contain w-[42px] h-[42px] text-center"
          />
        </span>
        <h1 className="font-semibold text-[22px] lg:text-[48px] text-[#4A4A4A] mb-[16px]">
          Thank you for your order!
        </h1>
        <p className="max-w-[352px] lg:max-w-[805px] mx-auto text-[18px] mb-[56px] text-center">
          Your order has been received and the details of your order would be
          sent to your email shortly.
        </p>
        <Button type="button" fn={home} style="primary" css="w-[182px] h-[48px] rounded-[5px] font-smeibold text-[16px] leading-[100%] text-[#FFFFFF]" >Go to Home</Button>
      </div>
    </div>
  );
}
