import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps {
  className?: string;
  secondary?: boolean;
  style?: React.CSSProperties;
}

export function Button({
  className,
  secondary,
  style,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        className,
        "bg-white drop-shadow-lg border border-gray-base",
        "min-w-fit font-semibold py-2 px-3.5 md:py-3 md:px-5 rounded-full",
        {
          "bg-black text-white hover:bg-white hover:text-black transition delay-100":
            secondary,
        },
      )}
      style={style}
    >
      {children}
    </button>
  );
}

Button.Text = function ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span className={cn("inline-block mx-auto my-auto", className)}>
      {children}
    </span>
  );
};
