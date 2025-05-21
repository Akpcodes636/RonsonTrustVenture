"use client";

import { useRouter } from "next/navigation";

interface OrderButtonProps {
  slug: string;  // receive slug as a prop
}

export default function OrderButton({ slug }: OrderButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/delivery?slug=${slug}`);
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
