import React, { FC } from "react";
import Image from "next/image";
import StarRating from "./Star";

interface TestimonialProps {
  name: string;
  text: string;
  image: string;
  role: string;
}

const TestimonialCard: FC<TestimonialProps> = ({ 
  name, 
  text, 
  image, 
  role 
}) => {
  return (
    <div className="w-full max-w-[393px] bg-white rounded-[5px] shadow-[0px_8px_16px_0px_#00000026;] mx-auto p-6">
      <div className="mb-4">
        <span className="text-[50px] text-[#555555] leading-[0.5] block mb-2">
          "
        </span>
        <p className="text-[#555555] text-base lg:text-lg leading-[1.5] tracking-wide mb-4">
          {text}
        </p>
        <div className="mb-4">
          <StarRating count={5} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-black text-base font-semibold">
            {name}
          </h3>
          <p className="text-[#555555] text-xs">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;