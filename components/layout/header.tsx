import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

export function Hero({ children }: { children: ReactNode }) {
  return (
    <header
      className={cn(
        "flex flex-col justify-center",
        "mx-auto max-w-6xl h-screen",
        "overflow-hidden",
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
        "dark:bg-grid-gray-base/[0.1] bg-grid-black/[0.2]",
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
