import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <section
      className={cn(
        "grid grid-cols-4 grid-rows-2 md:grid-rows-3 mt-7",
        "mx-auto max-w-[65.5rem] w-full h-screen",
      )}
      style={{
        border: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      {children}
    </section>
  );
}
