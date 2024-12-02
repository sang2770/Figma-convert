"use client";
import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  outline: {
    black_900: "border-[#000000] border-2 border-solid",
  },

  fill: {
    white_A700: "bg-[#ffffff]",
  },
} as const;

const sizes = {
  sm: "h-[60px] px-3",
  xs: "h-[50px] pl-3.5 pr-2 text-[20px]",
} as const;

type InputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "prefix" | "size"
> &
  Partial<{
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    shape?: keyof typeof shapes;
    variant?: keyof typeof variants | null;
    size?: keyof typeof sizes;
    color?: keyof typeof variants;
    label?: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name,
      placeholder,
      type = "text",
      label,
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "sm",
      color = "black_900",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`flex items-center justify-center cursor-text border-solid w-full`}
      >
        {!!prefix && <span className="mr-2">{prefix}</span>}
        <input
          ref={ref}
          name={name}
          placeholder={placeholder}
          type={type}
          className={`w-full p-2 border ${shapes[shape ?? "round"]} ${
            sizes[size]
          } ${variants[variant ?? "outline"]} ${variants[color] ?? ""}`}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && <span className="ml-2">{suffix}</span>}
      </label>
    );
  }
);

Input.displayName = "Input"; // Set display name for debugging

export { Input };
