import { cn } from "@/utils/cn";
import { BeakerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export function TeamBasedSection() {
  return (
    <section
      className={cn(
        "mx-auto max-w-[65.5rem] w-full h-full md:h-[70vh] mt-7 flex md:flex-row flex-col",
      )}
      style={{
        border: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      <article
        className={cn(
          "flex flex-col justify-between md:justify-center items-center mx-auto w-full p-5",
          "backdrop-blur-[2px] bg-gradient-to-bl from-[#EF3E31] from-0% to-black-secondary to-20%",
        )}
        style={{
          borderRight: "0.3px solid rgba(161, 161, 161, 0.3)",
        }}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-1 md:mt-24">
            <BeakerIcon className="h-4 text-gray-base" />
            <p className="text-gray-base">Team-based Recommendations</p>
          </div>
          <p className="md:w-[25rem]">
            We allow users to describe their team composition, including the
            number of frontend developers, backend developers, designers,
            project managers, and other team members.
          </p>
          <figure className="aspect-square w-full relative">
            <Image
              src="/illustrations.svg"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="Illustration"
              className="object-contain"
            />
          </figure>
        </div>
      </article>
      <figure className="relative md:block aspect-video hidden w-full">
        <Image
          src="/bg-teams.svg"
          alt="Team Recommendation"
          sizes="(min-width: 768px) 66vw, 100vw"
          fill
          className="object-cover"
        />
      </figure>
    </section>
  );
}
