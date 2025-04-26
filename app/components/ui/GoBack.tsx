"use client";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import React from "react";

export default function GoBack() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div onClick={goBack} className="cursor-pointer flex items-center">
      <MdOutlineKeyboardBackspace size={32} /><span>Back</span>
    </div>
  );
}
