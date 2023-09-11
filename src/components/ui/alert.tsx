import type { HTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { Text } from "@/components/ui";

type AlertProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertStyles>;

const alertStyles = cva(
  "flex flex-col justify-center gap-1 h-10 px-3 py-2 ring-1 rounded-md",
  {
    variants: {
      variant: {
        info: "bg-slate-50 text-slate-600 ring-slate-50",
        success: "bg-green-50 text-green-600 ring-green-50",
        warning: "bg-orange-50 text-orange-600 ring-orange-50",
        error: "bg-red-50 text-red-600 ring-red-50",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

export const Alert = ({ className, variant, ...props }: AlertProps) => {
  return <div role="alert" className={alertStyles({ variant })} {...props} />;
};

type AlertTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  return <Text variant="h5" className="text-base font-medium" {...props} />;
};

type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const AlertDescription = ({
  className,
  ...props
}: AlertDescriptionProps) => {
  return <Text variant="p" className="text-sm" {...props} />;
};
