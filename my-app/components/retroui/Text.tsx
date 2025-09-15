import { ElementType, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-head text-render-legible", {
  variants: {
    as: {
      p: "font-sans text-base leading-relaxed text-shadow-sm",
      li: "font-sans text-base leading-relaxed text-shadow-sm",
      a: "font-sans text-base leading-relaxed hover:underline underline-offset-2 decoration-primary text-shadow-sm",
      h1: "text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-shadow",
      h2: "text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-shadow",
      h3: "text-2xl font-medium leading-snug tracking-tight text-shadow",
      h4: "text-xl font-normal leading-snug tracking-normal text-shadow-sm",
      h5: "text-lg font-normal leading-snug tracking-normal text-shadow-sm",
      h6: "text-base font-normal leading-relaxed tracking-normal text-shadow-sm",
    },
  },
  defaultVariants: {
    as: "p",
  },
});

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof textVariants> {
  className?: string;
}

export const Text = (props: TextProps) => {
  const { className, as, ...otherProps } = props;
  const Tag: ElementType = as || "p";

  return (
    <Tag className={cn(textVariants({ as }), className)} {...otherProps} />
  );
};
