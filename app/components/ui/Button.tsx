import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  fn?: () => void;
  type: "button" | "submit" | "reset"; // Can be 'button', 'submit', or 'reset'
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
        flex items-center justify-center
        ${
          style === "primary"
            ? "bg-[#B81A14] text-white"
            : ""
        }
        ${
          style === "secondary"
            ? "border-[1px] border-[#0073E5] shadow-[0px_4px_8px_1px_#0094D226]"
            : ""
        }
        ${css}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
