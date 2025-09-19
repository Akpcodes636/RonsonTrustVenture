"use client";

import { useRouter } from "next/navigation";

interface OrderButtonProps {
  slug: string; // receive slug as a prop
  inStock: boolean;
}

export default function OrderButton({ slug, inStock }: OrderButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/delivery?slug=${slug}`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={!inStock}
      className={`w-full h-[48px] bg-[#B81A14] text-white rounded-[5px] mt-8 ${inStock ? "bg-[#B81A14] text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"} `}
    >
     {inStock ? "Order Now" : "Out of Stock"}
    </button>
  );
}
