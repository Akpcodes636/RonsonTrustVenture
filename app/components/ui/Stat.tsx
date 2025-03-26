"use client";
import React from "react";
import { FaClock } from "react-icons/fa";
import { PiGearSixFill } from "react-icons/pi";
import { MdEmojiEmotions } from "react-icons/md";

// Map icon names to their components
// const iconComponents = {
//   Clock: FaClock,
//   Settings: PiGearSixFill,
//   Users: MdEmojiEmotions,
// };

interface StatsProps {
  // Remove the icon prop since we'll use the one from PartContent
  icon: React.ElementType;
  text: string;
  title: string;
}

const Stats: React.FC<StatsProps> = ({ icon: Icon, text, title }) => {
  return (
    <div className="">
      <div className="">
        <div className="w-full h-full">
          <div className="mb-[3px] flex items-center justify-center">
            <Icon
              className="w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]"
              color="#B81A14"
            />
          </div>
          <div>
            <h2 className="text-[#000000] text-[16px] lg:text-[26px] leading-[32px] font-bold text-center">
              {title}
            </h2>
            <p className="text-[11px] lg:text-[16px] leading-[32px] font-normal text-center text-[#000000]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
