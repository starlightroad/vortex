import type { SVGProps } from "react";

export type IconType = "menu" | "history" | "bar-chart-x" | "bell";

type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType;
};

function SVG({
  children,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      stroke={stroke ?? "currentColor"}
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap={strokeLinecap ?? "round"}
      strokeLinejoin={strokeLinejoin ?? "round"}
    >
      {children}
    </svg>
  );
}

function BarChartHorizontalIcon() {
  return (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16h8" />
      <path d="M7 11h12" />
      <path d="M7 6h3" />
    </>
  );
}

function HistoryIcon() {
  return (
    <>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </>
  );
}

function BellIcon() {
  return (
    <>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
      <path d="M22 8c0-2.3-.8-4.3-2-6" />
    </>
  );
}

export default function Icon({ icon, ...props }: IconProps) {
  switch (icon) {
    case "bar-chart-x":
      return (
        <SVG {...props}>
          <BarChartHorizontalIcon />;
        </SVG>
      );
    case "bell":
      return (
        <SVG {...props}>
          <BellIcon />
        </SVG>
      );
    case "history":
      return (
        <SVG {...props}>
          <HistoryIcon />;
        </SVG>
      );
  }
}
