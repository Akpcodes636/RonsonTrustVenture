import React from "react";
import Loader from "./Loader";

interface ButtonProps {
  children: React.ReactNode;
  fn?: () => void;
  type: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  style: "primary" | "secondary" | string;
  css?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fn,
  loading,
  disabled,
  style,
  css,
  type
}) => {
  return (
    <button
      onClick={fn}
      disabled={loading || disabled}
      type={type}
      className={`
        flex items-center justify-center px-6 py-2 rounded-lg font-medium
        transition-all duration-200 ease-in-out
        ${
          style === "primary"
            ? "bg-[#B81A14] text-white hover:bg-[#a01712] active:bg-[#8f140f] transform hover:scale-105 active:scale-95"
            : ""
        }
        ${
          style === "secondary"
            ? "border-[1px] border-[#0073E5] shadow-[0px_4px_8px_1px_#0094D226] hover:bg-[#0073E5] hover:text-white"
            : ""
        }
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        ${css}
      `}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
