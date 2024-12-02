"use client";
import React from "react";

const variants = {
  primary: "checked:border-[3px]",
} as const;

const sizes = {
  xs: "h-[34px] w-[34px]",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> & {
  className?: string;
  name: string;
  label: string;
  id: string;
  onChange?: (checked: boolean) => void;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  onClick?: () => void;
};

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e.target.checked);
    };

    return (
      <div
        className={`${className} flex items-center gap-[5px] cursor-pointer`}
      >
        <input
          ref={ref}
          type="checkbox"
          name={name}
          id={id}
          className={`${size && sizes[size]} ${variant && variants[variant]}`}
          onChange={handleChange}
          {...restProps}
        />
        {!!label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

export { CheckBox };
