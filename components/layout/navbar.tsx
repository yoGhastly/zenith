"use client";
import { cn } from "@/utils/cn";
import React from "react";

export function Navbar() {
  return (
    <nav
      className={cn(
        "w-full h-full sticky top-0 z-50",
        "bg-black",
      )}
      style={{
        borderBottom: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      <header className="mx-auto w-full max-w-7xl px-4 md:px-0 py-4">
        <p className="font-semibold text-2xl">zenith.</p>
      </header>
    </nav>
  );
}
