import type { HTMLAttributes } from "react";

import type { TextElement } from "@/lib/types";

type TextProps = HTMLAttributes<TextElement> & {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

export default function Text({ className, variant, ...props }: TextProps) {
  const Component = variant;

  return <Component className={className} {...props} />;
}
