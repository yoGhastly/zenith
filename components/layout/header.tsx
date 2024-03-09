import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

export function Hero({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <header
      className={cn(
        "flex flex-col justify-center",
        "mx-auto max-w-6xl h-screen",
        "overflow-hidden",
        className,
      )}
      style={{
        borderTop: "0px",
        border: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      {children}
    </header>
  );
}

Hero.Content = function ({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "h-[70vh] md:h-[75vh] my-auto w-full dark:bg-black bg-white",
        "bg-clip-content",
        "dark:bg-grid-small-white/[0.1] bg-grid-small-black/[0.1] md:dark:bg-grid-gray-base/[0.1] md:bg-grid-black/[0.2]",
        "relative flex flex-col items-center justify-between",
      )}
      style={{
        borderTop: "0.3px solid rgba(161, 161, 161, 0.3)",
        borderBottom: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      {children}
    </div>
  );
};
