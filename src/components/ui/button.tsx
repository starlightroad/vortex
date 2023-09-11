import type { ButtonHTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";

export const buttonStyles = cva(
  '"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",',
  {
    variants: {
      variant: {
        primary: "bg-slate-900 text-white shadow hover:bg-slate-900/90",
        secondary: "bg-slate-200 shadow-sm hover:bg-slate-200/80",
        outline:
          "bg-transparent border border-slate-200 shadow-sm hover:bg-gray-50",
        ghost: "hover:bg-gray-50",
        link: "underline-offset-4 hover:underline",
        destructive: "bg-red-600 text-red-50 shadow-sm hover:bg-red-600/90",
      },
      size: {
        sm: "h-8 px-3 py-2 rounded-md text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 px-4 py-2 rounded-md",
        icon: "w-9 h-9",
      },
      width: {
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export default function Button({
  className,
  type,
  variant,
  size,
  width,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ?? "button"}
      className={buttonStyles({ variant, size, width })}
      {...props}
    />
  );
}
