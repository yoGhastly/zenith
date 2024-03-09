import React from "react";
import { Button } from "../reusable/button";
import Image from "next/image";
import "../../styles/color-transition.css";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer
      className="relative bottom-0 w-full h-full md:h-[80vh] flex flex-col justify-center items-center mt-24"
      style={{
        borderTop: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      <section className="w-full flex flex-col md:flex-row justify-center gap-3 md:gap-0 items-center mx-auto">
        <div className="flex flex-col justify-center items-center md:items-start gap-9 px-3 py-5 md:ml-24">
          <h5 className="font-bold text-3xl md:text-4xl flex">
            Choose.Build.
            <span className="text-transition">Grow.</span>
          </h5>
          <p className="text-gray-base self-center mx-auto text-center md:text-start">
            Choose Wisely, Build Efficiently: Zenith's Intelligent Tool
            Recommendations.
          </p>

          <div className="flex gap-7">
            <Button>
              <Button.Text className="font-semibold text-black">
                Start now
              </Button.Text>
            </Button>

            <Button secondary>
              <Button.Text className="font-semibold">
                Schedule a demo
              </Button.Text>
            </Button>
          </div>
        </div>
        <figure className="relative w-full aspect-[4/1] md:aspect-[3/1]">
          <Image
            src="/footer-bg.svg"
            alt="Zenith"
            className="object-cover w-full"
            priority
            sizes="(min-width: 768px) 66vw, 100vw"
            fill
          />
        </figure>
      </section>

      <section className="bg-black-secondary w-full h-full flex items-center p-8 md:p-16">
        <div className="max-w-7xl flex flex-col gap-24 md:gap-0 justify-between h-full w-full">
          <p className="font-semibold text-xl md:text-2xl">zenith.</p>
          <p className="sm:text-sm text-gray-base">
            &copy; {year} Zenith. All rights reserved.
          </p>
          <Link
            href="https://diegoes.vercel.app"
            className="flex items-center gap-1 w-full underline"
          >
            Made with <HeartIcon className="h-4 text-red-500" /> by Diego
          </Link>
        </div>
      </section>
    </footer>
  );
}
