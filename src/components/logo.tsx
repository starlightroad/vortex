import { type VariantProps, cva } from "class-variance-authority";

const logoStyles = cva("text-slate-800", {
  variants: {
    size: {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7",
    },
  },
});

const containerStyles = cva(
  "flex items-center justify-center rounded-full bg-lime-400",
  {
    variants: {
      size: {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
      },
    },
  },
);

type LogoProps = VariantProps<typeof logoStyles>;

export default function Logo({ size }: LogoProps) {
  return (
    <span className={containerStyles({ size: size ?? "sm" })}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={logoStyles({ size: size ?? "sm" })}
      >
        <path d="M21 4H3" />
        <path d="M18 8H6" />
        <path d="M19 12H9" />
        <path d="M16 16h-6" />
        <path d="M11 20H9" />
      </svg>
    </span>
  );
}
