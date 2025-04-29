"use client";
import React from "react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  css?: string;
  value: string;
  readonly?: boolean;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  autoComplete?: string; // Added autoComplete prop
  disabled?: boolean
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  disabled,
  name,
  readonly,
  label,
  // type = "text",
  value,
  onChange,
  onBlur,
  error,
  min,
  max,
  autoComplete, // Destructuring autoComplete prop
}) => {
  // const [view, setView] = useState(false);

  // const handleView = () => {
  //   setView(!view);
  // };

  //   console.log(error)

  return (
    <div className="flex flex-col gap-2">
      <label className="label-class" htmlFor={name}>
        {label}
      </label>
      <div className="relative w-full">
        <input
          min={min}
          max={max}
          readOnly={readonly}
          id={name}
          name={name}
          // type={view && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`input-class ${
            error &&
            "border-2 border-text-negative bg-[#EBEBEB] text-black"
          }`}
        />
      </div>
    </div>
  );
};

export default InputField;
