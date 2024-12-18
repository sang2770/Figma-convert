import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    orange_800: "bg-[#f25d07] text-[#ffffff]",
    white_A700: "bg-[#ffffff] text-[#000000]",
  },
} as const;
const sizes = {
  lg: "h-[60px] px-[34px] text-[30px]",
  xs: "h-[50px] px-2 text-[20px]",
  md: "h-[60px] px-1.5",
  sm: "h-[54px] px-2 text-[25px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

