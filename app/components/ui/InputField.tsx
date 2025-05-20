"use client";
import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={props.name} className="label-class">
          {label}
        </label>
        <div className="relative w-full">
          <input
            ref={ref}
            {...props}
            className={`input-class ${
              error
                ? "border-2 border-text-negative bg-[#EBEBEB] text-black "
                : ""
            } ${className}`}
          />
        </div>
        {error && (
          <span className="text-sm text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
