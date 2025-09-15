"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0 - 100
}

export const Progress = ({ className, value = 0, ...props }: ProgressProps) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className={cn(
        "relative h-3 w-full overflow-hidden border-2 border-primary/70 bg-black/40",
        "shadow-[0_0_8px_rgba(0,255,170,0.25)]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full bg-primary",
          "transition-[width] duration-500 ease-out",
          "shadow-[0_0_16px_rgba(0,255,170,0.6)]",
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
};


