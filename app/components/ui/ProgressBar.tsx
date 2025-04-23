"use client";
import Image from "next/image";
import { useStep } from "../../zustand/store";
import { stepsContent } from "../utilis/contents/HomePage.content";
import React from "react";

export default function BookingProgress() {
  const { step } = useStep();
  
  return (
    <div className="container-sm mx-auto pt-[80px]">
     
      {/* Progress Bar */}
      <div className="h-[10vh] mx-4 flex justify-between items-center">
        <div className="w-full flex items-center">
          {stepsContent.map((stepItem, index) => (
            <React.Fragment key={index}>
              <div className="relative flex flex-col items-center">
                <div 
                  className={`rounded-full transition duration-500 ease-in-out border-2 h-[24px] w-[24px] flex items-center justify-center text-[11px] ${
                    index + 1 < step
                      ? "border-[#B81A14] bg-[#B81A14] text-white" // completed step
                      : index + 1 === step
                      ? "border-[#B81A14] text-[#333333] bg-[#F8E8E8]" // current step
                      : "border-[#B81A14] text-[#333333] bg-[#F8E8E8]" // future step
                  }`}
                >
                 <Image src={stepItem.image || "/default-image.png"} width={50} height={50} alt="icons" className="text-white w-[14px] h-[14px]" />
                </div>
                <div className="absolute top-0 text-black text-center mt-[28px] w-64 text-[16px] font-medium hidden md:block lg:block">
                  {stepItem.text}
                </div>
              </div>
              {/* Only render the line if it's not the last item */}
              {index < stepsContent.length - 1 && (
                <div 
                  className={`flex-auto border-[1px] transition duration-500 ease-in-out ${
                    index + 1 < step 
                      ? "border-[#B81A14]" // completed line
                      : "border-[#F8E8E8]" // future line
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}