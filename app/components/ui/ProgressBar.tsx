"use client";
import Image from "next/image";
import { stepsContent } from "../utils/contents/HomePage.content";
import React from "react";

interface BookingProgressProps {
  step: number;
  setStep: (step: number) => void;
}

export default function BookingProgress({ step, setStep }: BookingProgressProps) {
  return (
    <div className="container-sm mx-auto pt-[80px]">
      {/* Progress Bar */}
      <div className="h-[10vh] mx-4 flex justify-between items-center">
        <div className="w-full flex items-center">
          {stepsContent.map((stepItem, index) => (
            <React.Fragment key={index}>
              <div
                className="relative flex flex-col items-center cursor-pointer"
                onClick={() => setStep(index + 1)} // Optional: allow click to jump steps
              >
                <div
                  className={`rounded-full transition duration-500 ease-in-out border-2 h-[24px] w-[24px] flex items-center justify-center text-[11px] ${
                    index + 1 < step
                      ? "border-[#B81A14] bg-[#B81A14] text-white"
                      : index + 1 === step
                        ? "border-[#B81A14] text-[#333333] bg-[#F8E8E8]"
                        : "border-[#B81A14] text-[#333333] bg-[#F8E8E8]"
                  }`}
                >
                  <Image
                    src={stepItem.image || "/default-image.png"}
                    width={50}
                    height={50}
                    alt="icons"
                    className="text-white w-[14px] h-[14px]"
                  />
                </div>
                <div className="absolute top-0 text-black text-center mt-[28px] w-64 text-[16px] font-medium hidden md:block lg:block">
                  {stepItem.text}
                </div>
              </div>
              {index < stepsContent.length - 1 && (
                <div
                  className={`flex-auto border-[1px] transition duration-500 ease-in-out ${
                    index + 1 < step
                      ? "border-[#B81A14]"
                      : "border-[#F8E8E8]"
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
