"use client";
import { RiLoader4Fill } from "react-icons/ri";

export default function Loader() {
  return (
    <div className="container-sm mx-auto py-12 lg:py-[120px] px-4">
      <div className="flex items-center justify-center min-h-[400px]">
        <RiLoader4Fill
          size={45}
          className="animate-spin text-forest-green-500"
        />
      </div>
    </div>
  );
}
