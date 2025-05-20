"use client";

import { useRouter } from "next/navigation";

export default function OrderButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/delivery");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-[182px] h-[48px] bg-[#B81A14] text-white rounded-[5px] mt-8"
    >
      Order Now
    </button>
  );
}
