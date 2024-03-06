import { cn } from "@/utils/cn";
import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

interface LetterProps {
  letter: string;
}

export function CodeLetter({ letter }: LetterProps) {
  return (
    <div
      className={cn(
        jetbrains.className,
        "w-full h-full flex justify-center items-center mx-auto",
        "text-5xl md:text-9xl text-gray-base",
      )}
      style={{
        border: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      {letter}
    </div>
  );
}
