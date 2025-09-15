import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const badgeVariants = cva("font-semibold text-render-legible", {
  variants: {
    variant: {
      default: "bg-gray-200 text-gray-700 text-shadow-sm",
      outline: "outline-2 outline-foreground text-foreground text-shadow-sm",
      solid: "bg-foreground text-background text-shadow-sm",
      surface: "outline-2 bg-primary text-primary-foreground text-shadow-sm",
    },
    size: {
      sm: "px-2 py-1 text-xs leading-snug",
      md: "px-2.5 py-1.5 text-sm leading-snug",
      lg: "px-3 py-2 text-base leading-normal",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
